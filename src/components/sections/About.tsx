import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Code, Terminal, Instagram, Github, Link as LinkIcon } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
              <img
                src={profilePhoto}
                alt={PERSONAL_INFO.name}
                className="relative w-full rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </motion.div>

          {/* Right side - Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h3>
              <p className="text-muted-foreground">{PERSONAL_INFO.education}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground leading-relaxed text-lg"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3 flex-wrap">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    // href={SOCIAL_LINKS.facebook}
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    {/* <Facebook className="w-5 h-5" /> */}
                    <Github className="w-5 h-5" />

                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={SOCIAL_LINKS.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Threads"
                  >
                    <Terminal className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={SOCIAL_LINKS.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                  >
                    <Code className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
