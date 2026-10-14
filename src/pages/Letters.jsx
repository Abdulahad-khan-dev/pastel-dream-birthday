import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Mail, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
const letters = [
  {
    title: "Open When You Need A Smile",
    preview: "A tiny reminder...",
    content:
      "Never forget how much light you bring into the lives around you. Even on the quiet days, your smile has a way of making everything feel a little softer.",
  },
  {
    title: "A Little Birthday Note",
    preview: "Just for today...",
    content:
      "Today is about celebrating you — your little habits, your beautiful heart, your dreams, your laughter, and every tiny thing that makes you uniquely you.",
  },
  {
    title: "One Tiny Secret",
    preview: "Psst...",
    content:
      "If happiness had a favorite person, I think it would secretly choose you. Keep smiling, keep dreaming, and never stop being wonderfully yourself.",
  },
  {
    title: "For Your Beautiful Future",
    preview: "A wish for tomorrow...",
    content:
      "I hope your future is filled with peaceful mornings, unexpected adventures, genuine people, beautiful memories and countless reasons to say: life is good.",
  },
];

export default function Letters() {
  const [openLetter, setOpenLetter] = useState(null);

  return (
    <section className="page-section letters-page">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="heading-icon">
          <Mail size={20} />
        </div>

        <span>SECRET ENVELOPES</span>

        <h2>
          A Few Words
          <em> Just For You.</em>
        </h2>

        <p>
          Some wishes are better when they're opened slowly.
        </p>
      </motion.div>

      <div className="letters-grid">
        {letters.map((letter, index) => (
          <motion.button
            className="envelope-card"
            key={letter.title}
            onClick={() => setOpenLetter(letter)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -10,
              rotate: index % 2 ? 2 : -2,
            }}
          >
            <div className="envelope">
              <div className="envelope-flap" />
              <Heart
                className="envelope-heart"
                size={25}
                fill="currentColor"
              />
            </div>

            <h3>{letter.title}</h3>
            <p>{letter.preview}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openLetter && (
          <motion.div
            className="letter-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenLetter(null)}
          >
            <motion.div
              className="letter-modal"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-letter"
                onClick={() => setOpenLetter(null)}
              >
                <X size={18} />
              </button>

              <Sparkles size={22} />

              <h2>{openLetter.title}</h2>

              <div className="letter-line" />

              <p>{openLetter.content}</p>

              <div className="letter-signature">
                with lots of love ♡
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Link to="/wishes" className="wishes-page-button">
  ✨ Read Birthday Wishes
</Link>
    </section>
  );
}