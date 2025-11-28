import { useEffect, useRef, useState } from "react";
import "../styles/ring-cursor.css"

const isTouch = () =>
  typeof window !== "undefined" &&
  matchMedia("(hover: none), (pointer: coarse)").matches;

export default function RingCursor({
  size = 30,            // outer ring diameter (px)
  innerSize = 6,        // inner dot diameter (px)
  ease = 0.75,          // follow easing (0-1, lower = slower)
  interactiveScale = 1.3,
}) {
  // Do nothing on touch devices
  if (isTouch()) return null;

  const outerRef = useRef(null);
  const innerRef = useRef(null);

  // Target and current positions for easing
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    const onOver = (e) => {
      const el = e.target.closest("a, input, button, [role='button'], [data-cursor='interactive']");
      setInteractive(Boolean(el));
    };
    const onOut = (e) => {
      // if moving to another element, onOver will re-run, but this is a safe fallback
      if (!e.relatedTarget) setInteractive(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    // delegate hover detection
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    let raf;
    const tick = () => {
      // lerp current toward target
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;

      const xOuter = current.current.x - size / 2;
      const yOuter = current.current.y - size / 2;
      const xInner = current.current.x - innerSize / 2;
      const yInner = current.current.y - innerSize / 2;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${xOuter}px, ${yOuter}px, 0) scale(${interactive ? interactiveScale : 1})`;
        outerRef.current.style.opacity = visible ? "1" : "0";
      }
      if (innerRef.current) {
        const pressScale = down ? 0.66 : 1;
        innerRef.current.style.transform = `translate3d(${xInner}px, ${yInner}px, 0) scale(${pressScale})`;
        innerRef.current.style.opacity = visible ? "1" : "0.7";
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ease, size, innerSize, interactive, visible, down, interactiveScale]);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="ring-cursor-outer"
        aria-hidden="true"
        style={{ width: size, height: size }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="ring-cursor-inner"
        aria-hidden="true"
        style={{ width: innerSize, height: innerSize }}
      />
    </>
  );
}
