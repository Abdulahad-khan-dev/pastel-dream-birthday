import { motion } from "motion/react";

const clouds = [
  { top: "8%", left: "-5%", size: 240, delay: 0 },
  { top: "28%", left: "72%", size: 300, delay: 2 },
  { top: "65%", left: "5%", size: 280, delay: 4 },
  { top: "78%", left: "72%", size: 220, delay: 1 },
];

export default function DreamBackground() {
  return (
    <div className="dream-background">
      <div className="gradient-orb orb-one" />
      <div className="gradient-orb orb-two" />
      <div className="gradient-orb orb-three" />

      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className="dream-cloud"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.size,
            height: cloud.size * 0.38,
          }}
          animate={{
            x: [0, 35, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 9 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: cloud.delay,
          }}
        />
      ))}
    </div>
  );
}