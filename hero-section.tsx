import React from "react";
import { Button, Card } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.heroui.chat/image/places?w=2000&h=1200&u=solenne2" 
          alt="Solenne House Villa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/40 to-brown-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Card className="glass-effect bg-white/10 border-white/20 shadow-medium mx-auto max-w-4xl py-12 px-6 md:px-12">
            <div className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-8 relative">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white">
                Solenne House
              </h1>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              A Retreat for Connection & Renewal
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 leading-relaxed">
              Join us for three transformative days at our exclusive Tenerife villa. 
              A carefully curated experience of movement, inspiration, and connection.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#apply"
                size="lg"
                variant="flat"
                className="font-serif text-base shadow-medium bg-[#e2cba8]/90 text-brown-900 backdrop-blur-sm"
                endContent={<Icon icon="lucide:arrow-right" width={18} />}
              >
                Apply for Invitation
              </Button>
              <Button
                as="a"
                href="#experience"
                variant="flat"
                size="lg"
                className="font-serif text-base bg-transparent text-white border border-white/30 backdrop-blur-sm"
                endContent={<Icon icon="lucide:arrow-down" width={18} />}
              >
                Explore the Experience
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a href="#about" className="text-white animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm">
          <Icon icon="lucide:chevron-down" width={24} />
        </a>
      </motion.div>
    </section>
  );
};