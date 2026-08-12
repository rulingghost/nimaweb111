import { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract number and suffix (e.g., "500+" -> num=500, suffix="+", "12,500+" -> num=12500, suffix="+", "%99.8" -> num=99.8, prefix="%")
  const numericMatch = value.match(/[\d,.]+/);
  const rawNumString = numericMatch ? numericMatch[0].replace(/,/g, '') : '0';
  const targetNum = parseFloat(rawNumString) || 0;
  const isFloat = rawNumString.includes('.');

  const prefix = value.startsWith('%') || value.startsWith('$') ? value[0] : '';
  const suffix = value.replace(/^[%\$]/, '').replace(/[\d,.]+/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = targetNum * easeProgress;

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetNum, duration, hasAnimated]);

  const formattedNum = isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formattedNum}{suffix}
    </span>
  );
}
