import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiReact, SiNodedotjs, SiPython, SiAmazonwebservices, SiJavascript } from "react-icons/si";

const techIcons = [
  { icon: SiReact, name: "React", color: "text-cyan-400", position: "top-20 left-10", delay: 0 },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-400", position: "top-40 right-20", delay: 2 },
  { icon: SiPython, name: "Python", color: "text-yellow-400", position: "bottom-40 left-20", delay: 4 },
  { icon: SiAmazonwebservices, name: "AWS", color: "text-orange-400", position: "bottom-20 right-10", delay: 1 },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden tech-grid">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute ${tech.position} opacity-60`}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay,
            }}
          >
            <tech.icon className={`text-4xl ${tech.color}`} />
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Advancing{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Software
            </span>
            <br />
            and Digital{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We transform ideas into powerful digital solutions. From cutting-edge web applications to scalable mobile platforms, we deliver innovation that drives your business forward.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get A Quote
            </Button>
            <Button 
              variant="outline"
              className="glass-effect text-white border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </motion.div>
          
          {/* Tech Stack Icons */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <SiJavascript className="text-2xl text-yellow-400" />
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiReact className="text-2xl text-cyan-400" />
              <span className="text-sm">React</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiNodedotjs className="text-2xl text-green-400" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <SiAmazonwebservices className="text-2xl text-orange-400" />
              <span className="text-sm">AWS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
