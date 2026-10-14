import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Flame, Sparkles, Wind } from "lucide-react";
import { Link } from "react-router-dom";
export default function CakePage() {
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    setBlown(true);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.55 },
      scalar: 0.9,
    });
  };

  return (
    <section className="page-section cake-page">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="heading-icon">
          <Flame size={20} />
        </div>

        <span>MAKE A WISH</span>

        <h2>
          One Little Cake,
          <em> One Big Wish.</em>
        </h2>

        <p>
          Close your eyes, make a wish and blow
          the candles away. ✨
        </p>
      </motion.div>

      <div className={`cake-stage ${blown ? "cake-blown" : ""}`}>
        <div className="cake-glow" />

        <div className="cake">
          <div className="candles">
            {[1, 2, 3].map((candle) => (
              <div className="candle" key={candle}>
                <AnimatePresence>
                  {!blown && (
                    <motion.div
                      className="flame"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: [1, 1.15, 0.9, 1],
                      }}
                      exit={{
                        scale: 0,
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="cake-top">
            <span>♡</span>
            <span>♡</span>
            <span>♡</span>
          </div>

          <div className="cake-body">
            <strong>HAPPY</strong>
            <strong>BIRTHDAY</strong>
          </div>

          <div className="cake-plate" />
        </div>

        {!blown && (
          <motion.button
            className="blow-button"
            onClick={blowCandles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Wind size={19} />
            Blow The Candles
          </motion.button>
        )}

        <AnimatePresence>
          {blown && (
            <motion.div
              className="wish-success"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Sparkles size={20} />

              <h3>Wish sent to the universe ✨</h3>

              <p>
                May this new chapter bring you
                more beautiful moments than you can imagine.
              </p>
            </motion.div>
            
          )}
        </AnimatePresence>
        <Link to="/letters" className="letters-page-button">
  💌 Open Birthday Letters
</Link>
      </div>
    </section>
  );
}