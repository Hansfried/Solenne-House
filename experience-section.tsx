import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const experiences = [
  {
    icon: "lucide:sunrise",
    title: "Movement",
    description: "Start each day with gentle movement practices designed to awaken the body and calm the mind."
  },
  {
    icon: "lucide:lightbulb",
    title: "Inspiration",
    description: "Engage with thought-provoking workshops and conversations led by experts and creative minds."
  },
  {
    icon: "lucide:utensils",
    title: "Nourishment",
    description: "Enjoy thoughtfully prepared meals using local ingredients, shared together in beautiful settings."
  },
  {
    icon: "lucide:users",
    title: "Connection",
    description: "Form meaningful relationships with like-minded individuals in an intimate, supportive environment."
  },
  {
    icon: "lucide:message-circle",
    title: "Bold Conversations",
    description: "Participate in facilitated discussions that challenge perspectives and inspire new thinking."
  },
  {
    icon: "lucide:wind",
    title: "Breathing Space",
    description: "Find moments of solitude and reflection amidst the carefully designed schedule."
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-spacing bg-cream-100 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-olive-900">What to Expect</h2>
          <p className="text-lg max-w-3xl mx-auto text-olive-800">
            We've sketched out a schedule that makes space for everything that matters: movement, inspiration, good food, connection, bold conversations, action and time to breathe.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-olive-300 rounded"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-cream-300 bg-cream-50 h-full">
                <CardBody className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="bg-cream-200 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon icon={item.icon} className="text-olive-700" width={20} />
                    </div>
                    <h3 className="font-serif text-xl mb-3 text-olive-900">{item.title}</h3>
                    <p className="text-olive-800 leading-relaxed">{item.description}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};