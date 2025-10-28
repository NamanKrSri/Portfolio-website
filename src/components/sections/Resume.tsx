import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/portfolio";

const Resume = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 mb-6"
            >
              <FileText className="w-12 h-12 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Download My Resume
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get a detailed overview of my experience, skills, and accomplishments in a downloadable format.
            </p>
          </div>

          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            <a
              href={EXTERNAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
