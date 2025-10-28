import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BLOGS } from "@/constants/portfolio";

const Blogs = () => {
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
    <section id="blogs" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Blogs
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {BLOGS.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Card className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{blog.publishedDate}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {blog.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex items-end">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read on Medium
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
