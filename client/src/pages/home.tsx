import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import WhyUs from "@/components/why-us";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Blog from "@/components/blog";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-primary">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Team />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}
