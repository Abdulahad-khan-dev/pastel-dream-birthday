
import { motion } from "motion/react";
import { Heart, Moon, Sparkles, Star, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const wishes = [
  {
    icon: Heart,
    title: "Happiness",
    text: "May your heart always find little reasons to smile.",
  },
  {
    icon: Star,
    title: "Beautiful Dreams",
    text: "May the dreams you whisper become the life you live.",
  },
  {
    icon: Moon,
    title: "Peace",
    text: "May you always have peaceful nights and softer mornings.",
  },
  {
    icon: Sun,
    title: "New Adventures",
    text: "May this year bring unexpected moments worth remembering.",
  },
];

export default function Wishes() {
  return (
    <section className="page-section wishes-page">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="heading-icon">
          <Sparkles size={20} />
        </div>

        <span>A SKY FULL OF WISHES</span>

        <h2>
          If Wishes Were
          <em> Little Stars...</em>
        </h2>

        <p>
          I'd fill the whole sky with them just for you.
        </p>
      </motion.div>

      <div className="wishes-grid">
        {wishes.map((wish, index) => {
          const Icon = wish.icon;

          return (
            <motion.div
              className="wish-card"
              key={wish.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="wish-icon">
                <Icon size={22} />
              </div>

              <h3>{wish.title}</h3>

              <p>{wish.text}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="big-wish">
        <motion.div
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.div>

        <h3>
          May this year give you more reasons
          <br />
          to smile than you ever expected.
        </h3>

        <p>
          And may every little wish find its way home. ♡
        </p>
      </div>

      <Link to="/final" className="dream-button">
        Open The Final Surprise
        <Sparkles size={18} />
      </Link>
    </section>
  );
}

