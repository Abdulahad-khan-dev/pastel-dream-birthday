import { motion } from "motion/react";

const hearts = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 7 + Math.random() * 7,
  size: 10 + Math.random() * 13,
}));

export default function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          style={{
            left: heart.left,
            fontSize: heart.size,
          }}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-15vh",
            opacity: [0, 0.8, 0.6, 0],
            x: [0, 15, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {heart.id % 3 === 0 ? "♡" : "✦"}
        </motion.span>
      ))}
    </div>
  );
}