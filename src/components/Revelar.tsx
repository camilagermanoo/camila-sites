import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'

type Props = {
  children: ReactNode
  atraso?: number
  como?: ElementType
  className?: string
}

export function Revelar({
  children,
  atraso = 0,
  como: Elemento = 'div',
  className = '',
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visivel, setVisivel] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const elemento = ref.current
    if (!elemento || visivel) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observador.observe(elemento)
    return () => observador.disconnect()
  }, [visivel])

  return (
    <Elemento
      ref={ref}
      className={`revelar ${visivel ? 'revelado' : ''} ${className}`}
      style={{ '--atraso': `${atraso}ms` } as CSSProperties}
    >
      {children}
    </Elemento>
  )
}
