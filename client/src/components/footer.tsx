import { Code, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">TechFlow</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advancing software and digital innovation through cutting-edge technology solutions and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  Cloud Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  DevOps
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("team")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button className="hover:text-blue-500 transition-colors text-left">
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="hover:text-blue-500 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">✉</span>
                <span>hello@techflow.dev</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 mr-3">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2023 TechFlow. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="hover:text-blue-500 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-500 transition-colors">Terms of Service</button>
              <button className="hover:text-blue-500 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
