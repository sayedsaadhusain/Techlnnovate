import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Node.js, Python, cloud platforms (AWS, Azure), mobile development (React Native, Flutter), and database solutions (PostgreSQL, MongoDB). Our team stays current with the latest industry trends and best practices.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance optimization, bug fixes, and feature enhancements. We also provide 24/7 monitoring for critical applications.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with regular client communication. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. You'll receive regular updates and have opportunities to provide feedback throughout each phase.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We maintain high quality through code reviews, automated testing, continuous integration, and regular client feedback sessions. Our team follows industry best practices and coding standards to ensure scalable, maintainable solutions.",
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements during our initial consultation.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get answers to common questions about our services and process
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 px-8"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
