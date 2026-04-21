import type { CSSProperties, ReactNode } from 'react'

/*
  Card — Generic container for carousel slide content.

  A minimal wrapper with border-radius and padding.
  The visual style (glass, solid, gradient, etc.) is defined
  by the user in brand.md and applied by Claude during Step 05.

  This component handles layout only. Style it via the `style` prop.
*/

export interface LiquidGlassProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  radius?: number
  width?: number
  height?: number
  p?: string
  px?: number
  py?: number
  center?: boolean
  inline?: boolean
}

export function LiquidGlass({
  children,
  className,
  style,
  radius = 32,
  width,
  height,
  p,
  px,
  py,
  center = false,
  inline = false,
}: LiquidGlassProps) {
  const paddingStyle = p
    ? p
    : (px !== undefined || py !== undefined)
      ? `${py ?? 0}px ${px ?? 0}px`
      : undefined

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        borderRadius: radius,
        overflow: 'hidden',
        display: inline ? 'inline-block' : undefined,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        ...style,
      }}
    >
      <div style={{
        position: 'relative',
        padding: paddingStyle,
        ...(center ? {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        } : {}),
        ...(width && height && center ? { width, height } : {}),
      }}>
        {children}
      </div>
    </div>
  )
}
