import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, value: decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString() };
}

export function Counter({ to, suffix = "", prefix = "", decimals = 0 }: { to: number; suffix?: string; prefix?: string; decimals?: number }) {
  const { ref, value } = useCountUp(to, 1800, decimals);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{value}{suffix}
    </span>
  );
}
