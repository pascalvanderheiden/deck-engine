import { useRef, useEffect, useState } from 'react'
import { useSlides } from '../context/SlideContext'

const DEV = typeof import.meta !== 'undefined' && import.meta.env?.DEV

export default function Slide({ index, className = '', children }) {
  const { current } = useSlides()
  const ref = useRef(null)
  const [overflow, setOverflow] = useState(false)

  let stateClass = ''
  if (index === current) stateClass = 'active'
  else if (index < current) stateClass = 'exit-left'

  useEffect(() => {
    if (!DEV || index !== current || !ref.current) return
    const el = ref.current
    const check = () => {
      // Only check flow-positioned children; ignore absolute/fixed decorations (orbs, accent-bar)
      const hasOverflow = Array.from(el.children).some(c => {
        const pos = getComputedStyle(c).position
        if (pos === 'absolute' || pos === 'fixed') return false
        return c.offsetTop + c.offsetHeight > el.clientHeight
      })
      setOverflow(hasOverflow)
    }
    check()
    const obs = new ResizeObserver(check)
    obs.observe(el)
    return () => obs.disconnect()
  }, [index, current])

  return (
    <div ref={ref} className={`slide ${stateClass} ${className}`} data-slide={index}>
      {children}
      {DEV && overflow && (
        <div className="slide-overflow-warn">
          ⚠ Content overflows slide — reduce content or use smaller elements
        </div>
      )}
    </div>
  )
}
