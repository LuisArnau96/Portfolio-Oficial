export function LogoMark({ inverted = false }) {
  const color = inverted ? '#0a0a0a' : '#f8f7f4'
  return (
    <span style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '-0.01em',
      color,
      lineHeight: 1,
    }}>
      Luis Arnau
    </span>
  )
}

export function LogoWordmark({ inverted = false }) {
  return <LogoMark inverted={inverted} />
}

export default LogoMark
