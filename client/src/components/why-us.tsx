import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";

export default function WhyUs() {
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-cyan-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-white">TechFlow?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We combine technical expertise with creative innovation to deliver solutions that exceed expectations and drive real business results.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Abstract 3D tech visualization" 
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket className="text-2xl" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <Star className="text-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
