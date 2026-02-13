import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Download } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";

const resumePath = encodeURI("/A P RASAL RAHMAN CV .pdf");

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-6"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-8"
        >
          You can reach me via the links below — email, GitHub, LinkedIn or WhatsApp/phone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <a
              href="mailto:rasalrahman361@gmail.com"
              className="inline-flex items-center gap-2 p-3 glass rounded-lg hover:border-primary/30 transition-colors text-muted-foreground hover:text-primary"
            >
              <Mail size={18} />
              <span>rasalrahman361@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rasal361"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-3 glass rounded-lg hover:border-primary/30 transition-colors text-muted-foreground hover:text-primary"
            >
              <Github size={18} />
              <span>rasal361</span>
            </a>

            <a
              href="https://www.linkedin.com/in/a-p-rasal-rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-3 glass rounded-lg hover:border-primary/30 transition-colors text-muted-foreground hover:text-primary"
            >
              <Linkedin size={18} />
              <span>a-p-rasal-rahman</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971563123066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-3 glass rounded-lg hover:border-primary/30 transition-colors text-muted-foreground hover:text-primary"
            >
              <Phone size={18} />
              <span>+971 56 312 3066 (WhatsApp)</span>
            </a>

            <a
              href="tel:+971563123066"
              className="inline-flex items-center gap-2 p-3 glass rounded-lg hover:border-primary/30 transition-colors text-muted-foreground hover:text-primary"
            >
              <Phone size={18} />
              <span>+971 56 312 3066</span>
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">View Resume <Download className="ml-2" /></Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Resume — A P Rasal Rahman</DialogTitle>
                <DialogDescription>Preview and download my CV.</DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <iframe
                  title="Resume PDF"
                  src={resumePath}
                  className="w-full h-[70vh] border border-border rounded"
                />
              </div>

              <DialogFooter className="mt-4">
                <a href={resumePath} download className="inline-flex">
                  <Button variant="outline">
                    Download PDF
                  </Button>
                </a>
                <DialogClose asChild>
                  <Button variant="ghost">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Contact;
