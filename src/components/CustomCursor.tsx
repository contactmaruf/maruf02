import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaQuery.matches || reducedMotionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check element under cursor for special data-cursor attributes or tags
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view') {
        setCursorType('view');
      } else if (
        cursorAttr === 'hover' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorType('hover');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth spring/lerp loop for buttery cursor follower
    const loop = () => {
      const ease = 0.22;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  // Determine sizing and styles based on cursorType
  const isView = cursorType === 'view';
  const isHover = cursorType === 'hover';
  const isText = cursorType === 'text';

  const width = isView ? 76 : isHover ? 44 : isText ? 4 : 28;
  const height = isView ? 34 : isHover ? 44 : isText ? 24 : 28;

  return (
    <div
      className="custom-cursor-follower flex items-center justify-center font-mono text-[10px] tracking-wider uppercase font-semibold"
      style={{
        transform: `translate3d(${position.x - width / 2}px, ${position.y - height / 2}px, 0)`,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: isText ? '2px' : isView ? '9999px' : '9999px',
        backgroundColor: isView
          ? '#E53935'
          : isHover
          ? 'rgba(229, 57, 53, 0.08)'
          : isText
          ? '#E53935'
          : 'transparent',
        border: isView
          ? 'none'
          : isHover
          ? '1.5px solid #E53935'
          : isText
          ? 'none'
          : '1.5px solid rgba(229, 57, 53, 0.85)',
        color: '#FFFFFF',
        boxShadow: isView ? '0 4px 14px rgba(229, 57, 53, 0.35)' : 'none',
      }}
    >
      {isView && <span>VIEW</span>}
    </div>
  );
}
