import React from "react";
import { Button, Input, Textarea, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const ApplicationSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    why: "",
    expectations: "",
    dietary: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="apply" className="section-spacing">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-olive-900">Apply for an Invitation</h2>
          <p className="text-lg max-w-3xl mx-auto text-olive-800">
            Our application process helps us create a balanced group of guests who will contribute to and benefit from the Solenne House experience.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-olive-300 rounded"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <Card className="border border-cream-300 bg-cream-50">
              <CardBody className="p-6">
                <h3 className="font-serif text-xl mb-4 text-olive-900">The Selection Process</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-cream-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-olive-900 font-medium">1</span>
                    </div>
                    <p className="text-olive-800">Submit your application through this form, telling us a bit about yourself and why you'd like to join.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cream-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-olive-900 font-medium">2</span>
                    </div>
                    <p className="text-olive-800">Our team will review all applications and select guests who we believe will contribute to and benefit from the experience.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cream-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-olive-900 font-medium">3</span>
                    </div>
                    <p className="text-olive-800">If selected, you'll receive an invitation with complete details about the retreat, including exact location and payment information.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-cream-200 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-olive-900 font-medium">4</span>
                    </div>
                    <p className="text-olive-800">Confirm your spot by completing the booking process within the specified timeframe.</p>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            {isSubmitted ? (
              <Card className="border border-cream-300 bg-cream-50 p-8 text-center">
                <CardBody>
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-6">
                      <Icon icon="lucide:check" className="text-olive-700" width={32} />
                    </div>
                    <h3 className="font-serif text-2xl mb-4 text-olive-900">Application Received</h3>
                    <p className="text-olive-800 max-w-md mx-auto mb-6">
                      Thank you for your interest in Solenne House. We've received your application and will be in touch within 7 days regarding next steps.
                    </p>
                    <Button
                      variant="flat"
                      className="font-serif bg-[#e2cba8]/90 text-brown-900"
                      onPress={() => setIsSubmitted(false)}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <Card className="border border-cream-300 bg-cream-50">
                <CardBody className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isRequired
                      />
                      
                      <Input
                        label="Email Address"
                        placeholder="Enter your email address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isRequired
                      />
                      
                      <Textarea
                        label="Why would you like to join Solenne House?"
                        placeholder="Tell us a bit about yourself and why you're interested in this retreat..."
                        name="why"
                        value={formData.why}
                        onChange={handleChange}
                        isRequired
                        minRows={3}
                      />
                      
                      <Textarea
                        label="What do you hope to gain from this experience?"
                        placeholder="Share your expectations and what you'd like to take away from the retreat..."
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleChange}
                        minRows={3}
                      />
                      
                      <Textarea
                        label="Any dietary restrictions or special requirements?"
                        placeholder="Please let us know of any dietary needs or accommodations..."
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        minRows={2}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="flat"
                        className="w-full font-serif bg-[#e2cba8]/90 text-brown-900"
                        size="lg"
                        isLoading={isSubmitting}
                      >
                        Submit Application
                      </Button>
                      <p className="text-center text-olive-700 text-sm mt-4">
                        By submitting, you agree to our privacy policy and application terms.
                      </p>
                    </div>
                  </form>
                </CardBody>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};