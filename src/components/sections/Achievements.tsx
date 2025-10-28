import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS } from "@/constants/portfolio";

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Achievements & Certificates
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto space-y-6"
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants}>
              <Card className="hover:border-primary/50 transition-all duration-300 group">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-muted/50 flex items-center justify-center p-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted border border-border">
                      <img
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-card/80">
                        <Award className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      <CardDescription className="text-base">
                        {achievement.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-end">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full md:w-auto"
                      >
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
