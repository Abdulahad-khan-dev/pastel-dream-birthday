import { motion } from "motion/react";
import { Camera, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Polaroid from "../components/Polaroid";

const memories = [
  {
    image: "/images/memory-1.jpg",
    caption: "A little moment worth keeping forever.",
    rotation: -5,
  },
  {
    image: "/images/memory-2.jpg",
    caption: "One smile. A thousand memories.",
    rotation: 4,
  },
  {
    image: "/images/memory-3.jpg",
    caption: "Some days deserve to be remembered.",
    rotation: -3,
  },
  {
    image: "/images/memory-4.jpg",
    caption: "And this one is definitely one of them.",
    rotation: 5,
  },
];

export default function Memories() {
  return (
    <section className="page-section memories-page">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="heading-icon">
          <Camera size={20} />
        </div>

        <span>MEMORY LANE</span>

        <h2>
          Little Moments,
          <em> Big Memories.</em>
        </h2>

        <p>
          Because some ordinary moments become our
          favorite memories without us even noticing.
        </p>
      </motion.div>

      <div className="polaroid-grid">
        {memories.map((memory, index) => (
          <Polaroid
            key={index}
            {...memory}
            index={index}
          />
        ))}
      </div>

      <motion.div
        className="next-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Sparkles size={17} />
        <span>There is something sweeter waiting...</span>
        <ChevronDown size={18} />
      </motion.div>

      <Link to="/cake" className="soft-link">
        Continue to the cake →
      </Link>
    </section>
  );
}