import { motion } from "motion/react";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="welcome-page">
      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="welcome-decoration decoration-one">
          ✦
        </div>

        <div className="welcome-decoration decoration-two">
          ♡
        </div>

        <motion.div
          className="mini-badge"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles size={15} />
          A little dream made for you
        </motion.div>

        <motion.div
          className="hero-cake"
          animate={{
            y: [0, -8, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          🎂
        </motion.div>

        <p className="eyebrow">A VERY SPECIAL DAY</p>

        <h1>
          Happy
          <span> Birthday </span>
          Beautiful
        </h1>

        <p className="hero-description">
          Today isn't just another day.
          <br />
          It's a tiny celebration of the wonderful person you are.
        </p>

        <div className="hero-icons">
          <Heart size={18} fill="currentColor" />
          <Star size={15} />
          <Heart size={18} fill="currentColor" />
        </div>

        <Link to="/memories" className="dream-button">
          Enter Your Little Dream
          <ArrowRight size={18} />
        </Link>

        <p className="scroll-hint">
          made with little moments & lots of love ♡
        </p>
      </motion.div>
    </section>
  );
}