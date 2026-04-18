/**
 * LogoMark — identidad visual de Luis Arnau
 *
 * Concepto: una "L" geométrica (ingeniería, precisión) con una hoja
 * creciendo del tronco (naturaleza, crecimiento). El ángulo recto
 * de la L y la curva orgánica de la hoja en tensión visual.
 */
export function LogoMark({ size = 36, inverted = false }) {
  const bg = inverted ? '#f8f7f4' : '#0a0a0a'
  const fg = inverted ? '#0a0a0a' : '#f8f7f4'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Luis Arnau"
    >
      {/* Fondo cuadrado con esquinas suaves — distinto del círculo de oi0.es */}
      <rect width="36" height="36" rx="7" fill={bg} />

      {/* Tronco vertical de la L */}
      <line
        x1="12" y1="8"
        x2="12" y2="26"
        stroke={fg}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Base horizontal de la L */}
      <line
        x1="12" y1="26"
        x2="24" y2="26"
        stroke={fg}
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Hoja: nace del punto medio del tronco, curva orgánica hacia la derecha */}
      <path
        d="M12 15 C12 10 22 10 20 16 C19 19 12 19 12 15 Z"
        fill={fg}
        opacity="0.82"
      />
    </svg>
  )
}

/** Versión inline para usar en hero (oscuro, inverted=true) o Work/Contact */
export default LogoMark
