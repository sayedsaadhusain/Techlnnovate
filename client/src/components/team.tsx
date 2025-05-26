import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "John Smith",
    role: "Lead Developer",
    description: "Full-stack developer with 8+ years of experience in modern web technologies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    color: "text-blue-500",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Sarah Johnson",
    role: "UX Designer",
    description: "Creative designer specializing in user experience and interface design.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    color: "text-purple-500",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Michael Chen",
    role: "DevOps Engineer",
    description: "Infrastructure specialist focused on scalable cloud solutions and automation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    color: "text-cyan-500",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    description: "Experienced manager ensuring projects are delivered on time and within scope.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    color: "text-amber-500",
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Talented professionals dedicated to delivering exceptional results
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100 dark:border-gray-700">
                <CardContent className="p-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className={`${member.color} font-semibold mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
