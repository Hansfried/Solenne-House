import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-olive-900">The Solenne Experience</h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-olive-300 rounded"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed mb-6 text-olive-800">
              For our very first Solenne House retreat, we're choosing a unique villa in Tenerife handpicked for its calm, spacious energy and connection to nature.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-olive-800">
              Each retreat takes place in a different location, but always with the same promise: carefully curated spaces, warmth, and understated luxury.
            </p>
            <p className="text-lg leading-relaxed text-olive-800">
              Think: sea breeze, mountain views, slow mornings in the sun, shared meals under the stars – and a place that feels like a reset.
            </p>
            <div className="mt-8 flex items-center">
              <Icon icon="lucide:map-pin" className="text-olive-700 mr-2" width={18} />
              <p className="text-olive-700 italic">The exact location will be revealed to selected guests before the retreat.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <img 
              src="https://img.heroui.chat/image/places?w=800&h=1000&u=solenne2" 
              alt="Solenne House Villa" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-olive-900/10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};