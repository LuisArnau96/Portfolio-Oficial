import { useEffect, useRef } from 'react'

// Seeded deterministic RNG (mulberry32)
function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = Math.imul(s ^ (s >>> 15), s | 1)
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61)
    return ((s ^ (s >>> 14)) >>> 0) / 0xffffffff
  }
}

const LEAF_COLORS = [
  '#3a5e2a', // deep green
  '#527a3a',
  '#6e9648',
  '#9ab858',
  '#c4a020', // golden
  '#d48018', // amber
  '#b85c18', // burnt orange
  '#8a3010', // rust
]

function buildBranch(relAngle, length, depth, rand) {
  if (depth === 0 || length < 2.5) return null

  const windPhase = rand() * Math.PI * 2
  const windAmp = 0.028 * Math.pow(1.18, 9 - Math.min(depth, 8))

  const branch = { relAngle, length, depth, windPhase, windAmp, children: [], leaves: [] }

  if (depth > 1) {
    const spread = 0.22 + rand() * 0.14
    const tilt = (rand() - 0.5) * 0.08
    const lr = 0.66 + rand() * 0.09
    const rr = 0.63 + rand() * 0.09

    const c1 = buildBranch(-spread + tilt, length * lr, depth - 1, rand)
    const c2 = buildBranch(spread + tilt, length * rr, depth - 1, rand)
    if (c1) branch.children.push(c1)
    if (c2) branch.children.push(c2)

    // occasional mid branch for organic density
    if (rand() > 0.58 && depth > 3) {
      const cm = buildBranch((rand() - 0.5) * 0.35, length * 0.52, depth - 2, rand)
      if (cm) branch.children.push(cm)
    }
  }

  if (depth <= 3) {
    const count = 5 + Math.floor(rand() * 7)
    for (let i = 0; i < count; i++) {
      branch.leaves.push({
        offsetAngle: rand() * Math.PI * 2,
        offsetR: 0.15 + rand() * 0.55,
        size: 5 + rand() * 13,
        color: LEAF_COLORS[Math.floor(rand() * LEAF_COLORS.length)],
        windPhase: rand() * Math.PI * 2,
        windAmp: 1.2 + rand() * 2.5,
      })
    }
  }

  return branch
}

function drawBranch(ctx, b, px, py, parentAngle, t) {
  const wind = Math.sin(t * 0.55 + b.windPhase) * b.windAmp
  const angle = parentAngle + b.relAngle + wind

  const ex = px + Math.cos(angle) * b.length
  const ey = py + Math.sin(angle) * b.length

  const alpha = b.depth > 5 ? 0.92 : 0.78
  ctx.beginPath()
  ctx.moveTo(px, py)
  ctx.lineTo(ex, ey)
  ctx.lineWidth = Math.max(0.4, b.depth * 1.35 - 0.6)
  ctx.lineCap = 'round'
  ctx.strokeStyle = `rgba(16, 8, 3, ${alpha})`
  ctx.stroke()

  if (b.leaves.length > 0) {
    for (const leaf of b.leaves) {
      const lw = Math.sin(t * 1.6 + leaf.windPhase) * leaf.windAmp
      const lx = ex + Math.cos(leaf.offsetAngle) * b.length * leaf.offsetR + lw
      const ly = ey + Math.sin(leaf.offsetAngle) * b.length * leaf.offsetR

      ctx.beginPath()
      ctx.arc(lx, ly, leaf.size, 0, Math.PI * 2)
      ctx.fillStyle = leaf.color
      ctx.globalAlpha = 0.72
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  for (const child of b.children) {
    drawBranch(ctx, child, ex, ey, angle, t)
  }
}

function buildScene(w, h) {
  const treeConfigs = [
    { x: w * 0.08,  angle: -Math.PI / 2 - 0.18, len: h * 0.44, depth: 9, seed: 11 },
    { x: w * 0.28,  angle: -Math.PI / 2 - 0.06, len: h * 0.48, depth: 9, seed: 23 },
    { x: w * 0.52,  angle: -Math.PI / 2 + 0.04, len: h * 0.46, depth: 9, seed: 37 },
    { x: w * 0.74,  angle: -Math.PI / 2 + 0.10, len: h * 0.45, depth: 9, seed: 59 },
    { x: w * 0.93,  angle: -Math.PI / 2 + 0.22, len: h * 0.42, depth: 9, seed: 71 },
  ]

  return treeConfigs.map(cfg => ({
    x: cfg.x,
    y: h,
    angle: cfg.angle,
    root: buildBranch(0, cfg.len, cfg.depth, rng(cfg.seed)),
  }))
}

function drawBackground(ctx, w, h) {
  // Sky gradient: dark forest edges → pale sky through canopy center-top
  const grad = ctx.createRadialGradient(w * 0.5, h * 0.1, h * 0.05, w * 0.5, h * 0.3, h * 0.85)
  grad.addColorStop(0.0, '#b8ccd8')  // pale sky
  grad.addColorStop(0.25, '#7a9db0') // mid sky
  grad.addColorStop(0.55, '#2a4a35') // forest canopy
  grad.addColorStop(0.80, '#172a1c') // deep forest
  grad.addColorStop(1.0,  '#0a150c') // ground shadow
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  // Subtle warm glow at the sky center (golden hour)
  const glow = ctx.createRadialGradient(w * 0.5, h * 0.05, 0, w * 0.5, h * 0.05, h * 0.4)
  glow.addColorStop(0.0, 'rgba(220,190,130,0.22)')
  glow.addColorStop(1.0, 'rgba(220,190,130,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, w, h)
}

export default function TreeCanvas() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      sceneRef.current = buildScene(canvas.offsetWidth, canvas.offsetHeight)
    }

    resize()
    window.addEventListener('resize', resize)

    const render = (ts) => {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000

      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)
      drawBackground(ctx, w, h)

      if (sceneRef.current) {
        for (const tree of sceneRef.current) {
          if (tree.root) drawBranch(ctx, tree.root, tree.x, tree.y, tree.angle, t)
        }
      }

      // Bottom vignette (ground)
      const vign = ctx.createLinearGradient(0, h * 0.78, 0, h)
      vign.addColorStop(0, 'rgba(8,12,8,0)')
      vign.addColorStop(1, 'rgba(8,12,8,0.7)')
      ctx.fillStyle = vign
      ctx.fillRect(0, 0, w, h)

      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
