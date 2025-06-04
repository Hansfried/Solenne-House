import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 lg:px-12 absolute top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive-900 font-serif text-3xl md:text-3xl w-auto"
        >
          Solenne House
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            as="a"
            href="#apply"
            variant="flat"
            className="font-serif text-sm md:text-base bg-[#e2cba8]/80 text-brown-900 backdrop-blur-sm"
            endContent={<Icon icon="lucide:arrow-right" width={16} />}
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </header>
  );
};