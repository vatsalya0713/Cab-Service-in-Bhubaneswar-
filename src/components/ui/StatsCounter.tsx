"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  className?: string;
}

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, value);
      setCount(Math.floor(current));
      if (current >= value) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function StatsCounter({ stats, className }: StatsCounterProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 ${className || ""}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
          className="text-center p-4 rounded-2xl bg-[#12161B]/10 backdrop-blur-sm border border-white/20"
        >
          <div className="text-2xl font-bold text-white mb-1">
            <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </div>
          <div className="text-xs text-white/70 font-medium leading-tight">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
