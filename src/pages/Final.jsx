import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { Gift, Heart, Sparkles, PartyPopper } from "lucide-react";

export default function Final() {
  const [opened, setOpened] = useState(false);

  const openSurprise = () => {
    setOpened(true);

    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 65,
        origin: { x: 0 },
        shapes: ["circle"],
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 65,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  return (
    <section className="final-page">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="before"
            className="final-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.div
              className="final-gift"
              animate={{
                y: [0, -12, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Gift size={70} />
            </motion.div>

            <span className="final-eyebrow">
              ONE LAST LITTLE THING
            </span>

            <h1>
              Before You
              <em> Go...</em>
            </h1>

            <p>
              There is one last little surprise
              waiting just for you.
            </p>

            <button
              className="final-button"
              onClick={openSurprise}
            >
              <Gift size={19} />
              Open Your Surprise
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="after"
            className="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="celebration-sparkles">
              <Sparkles />
              <Heart fill="currentColor" />
              <Sparkles />
            </div>

            <motion.div
              className="party-icon"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
            >
              <PartyPopper size={48} />
            </motion.div>

            <span>THE DREAM IS COMPLETE</span>

            <h1>
              HAPPY
              <strong>BIRTHDAY</strong>
            </h1>

            <p className="celebration-message">
              Keep this little dream somewhere safe.
              <br />
              Because some memories deserve to stay forever.
            </p>

            <div className="final-hearts">
              ♡ ✦ ♡ ✦ ♡
            </div>

            <p className="made-with">
              made with little moments & lots of love
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}