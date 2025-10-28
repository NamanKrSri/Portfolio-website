import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import robotMascot from "@/assets/robot-mascot.png";
import { LANDING_QUESTIONS } from "@/constants/portfolio";

interface LandingOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const LandingOverlay = ({ isOpen, onClose }: LandingOverlayProps) => {
  const handleQuestionClick = (targetSection: string, externalUrl?: string) => {
    if (externalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    onClose();
    // Delay scroll to allow overlay to close
    setTimeout(() => {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(8px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-background/50"
            onClick={onClose}
          />

          {/* Card content */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Robot mascot */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 15 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 z-20"
            >
              <motion.img
                src={robotMascot}
                alt="Robot Mascot"
                className="w-24 h-24 drop-shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <Card className="relative p-4 pt-16 glow-border">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg font-bold text-center mb-3 gradient-text"
              >
                I value your time and here is quick question you might have in your mind?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-2 mb-4"
              >
                {LANDING_QUESTIONS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <span className="text-xs md:text-sm">{item.question}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-2 shrink-0"
                      onClick={() => handleQuestionClick(item.targetSection, item.externalUrl)}
                    >
                      {item.externalUrl ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex justify-center"
              >
                <Button
                  size="default"
                  onClick={onClose}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
                >
                  Explore Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingOverlay;
