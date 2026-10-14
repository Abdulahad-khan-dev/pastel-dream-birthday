import { motion } from "motion/react";

export default function Polaroid({
  image,
  caption,
  rotation = 0,
  index,
}) {
  return (
    <motion.div
      className="polaroid"
      initial={{
        opacity: 0,
        y: 40,
        rotate: rotation - 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: rotation,
      }}
      whileHover={{
        y: -12,
        rotate: 0,
        scale: 1.04,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
    >
      <div className="polaroid-image">
        <img src={image} alt={caption} />
      </div>

      <p>{caption}</p>

      <span className="polaroid-star">✦</span>
    </motion.div>
  );
}