import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

export const GuestsSection: React.FC = () => {
  return (
    <section className="section-spacing bg-cream-100 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-olive-900">Who Joins Solenne House</h2>
          <p className="text-lg max-w-3xl mx-auto text-olive-800">
            Each retreat features a curated selection of experts, guides and creative minds who join us for this edition only.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-olive-300 rounded"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border border-cream-300 bg-cream-50 h-full">
              <CardBody className="p-8">
                <h3 className="font-serif text-2xl mb-4 text-olive-900">Our Experts & Guides</h3>
                <p className="text-olive-800 leading-relaxed mb-4">
                  You'll get access to real professionals – sometimes even well-known names – who share what truly matters.
                </p>
                <p className="text-olive-800 leading-relaxed mb-4">
                  From wellness practitioners to creative visionaries, our experts are carefully selected for their authentic approach and ability to facilitate meaningful experiences.
                </p>
                <p className="text-olive-800 leading-relaxed">
                  You'll receive all details about the team after booking or by request.
                </p>
                <p className="text-olive-700 italic mt-4">
                  Because no two Solenne Houses are ever the same.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border border-cream-300 bg-cream-50 h-full">
              <CardBody className="p-8">
                <h3 className="font-serif text-2xl mb-4 text-olive-900">Fellow Guests</h3>
                <p className="text-olive-800 leading-relaxed mb-4">
                  Solenne House brings together a diverse group of individuals united by their curiosity, openness, and desire for meaningful connection.
                </p>
                <p className="text-olive-800 leading-relaxed mb-4">
                  Our application process ensures a balanced group dynamic where everyone contributes to the collective experience.
                </p>
                <p className="text-olive-800 leading-relaxed">
                  Past participants have included entrepreneurs, artists, professionals, healers, and seekers – all bringing their unique perspectives to the shared space.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};