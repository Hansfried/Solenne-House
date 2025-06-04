import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const scheduleData = {
  day1: [
    { time: "08:00 - 09:30", activity: "Morning Movement & Meditation", description: "Gentle yoga and breathwork to start the day" },
    { time: "10:00 - 11:30", activity: "Welcome Circle", description: "Introductions and setting intentions for the retreat" },
    { time: "12:00 - 14:00", activity: "Shared Lunch", description: "Fresh, locally-sourced Mediterranean cuisine" },
    { time: "15:00 - 17:00", activity: "Expert Workshop", description: "Guided session with our featured expert" },
    { time: "18:00 - 19:30", activity: "Free Time", description: "Relax, explore, or connect with other guests" },
    { time: "20:00 - 22:00", activity: "Welcome Dinner", description: "Candlelit dinner under the stars" }
  ],
  day2: [
    { time: "07:30 - 09:00", activity: "Morning Movement", description: "Energizing practice to awaken the body" },
    { time: "09:30 - 11:00", activity: "Creative Workshop", description: "Exploring personal expression through various mediums" },
    { time: "11:30 - 13:30", activity: "Shared Brunch", description: "Communal meal with fresh, seasonal ingredients" },
    { time: "14:00 - 16:00", activity: "Nature Excursion", description: "Guided exploration of the surrounding landscape" },
    { time: "17:00 - 18:30", activity: "Discussion Circle", description: "Facilitated conversation on meaningful topics" },
    { time: "19:30 - 22:00", activity: "Dinner & Evening Program", description: "Special dining experience with surprise guest" }
  ],
  day3: [
    { time: "08:00 - 09:30", activity: "Final Morning Practice", description: "Gentle movement and gratitude meditation" },
    { time: "10:00 - 11:30", activity: "Integration Workshop", description: "Tools for bringing the experience back home" },
    { time: "12:00 - 14:00", activity: "Farewell Lunch", description: "Last shared meal celebrating our time together" },
    { time: "14:30 - 16:00", activity: "Closing Circle", description: "Reflections and commitments moving forward" },
    { time: "16:00 - 17:00", activity: "Departures", description: "Fond farewells until next time" }
  ]
};

export const ScheduleSection: React.FC = () => {
  const [selected, setSelected] = React.useState("day1");

  return (
    <section id="schedule" className="section-spacing">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-olive-900">Three Days of Transformation</h2>
          <p className="text-lg max-w-3xl mx-auto text-olive-800">
            A thoughtfully designed schedule that balances structure with space for spontaneity and rest.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-olive-300 rounded"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs 
            aria-label="Schedule" 
            selectedKey={selected} 
            onSelectionChange={setSelected as any}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-4",
              cursor: "bg-olive-600",
              tab: "font-serif text-lg"
            }}
          >
            <Tab key="day1" title="Day One">
              <Card className="border border-cream-200">
                <CardBody className="p-6">
                  <div className="space-y-6">
                    {scheduleData.day1.map((item, index) => (
                      <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="md:w-1/4 font-medium text-olive-700">{item.time}</div>
                        <div className="md:w-3/4">
                          <h4 className="font-serif text-lg text-olive-900 mb-1">{item.activity}</h4>
                          <p className="text-olive-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="day2" title="Day Two">
              <Card className="border border-cream-200">
                <CardBody className="p-6">
                  <div className="space-y-6">
                    {scheduleData.day2.map((item, index) => (
                      <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="md:w-1/4 font-medium text-olive-700">{item.time}</div>
                        <div className="md:w-3/4">
                          <h4 className="font-serif text-lg text-olive-900 mb-1">{item.activity}</h4>
                          <p className="text-olive-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="day3" title="Day Three">
              <Card className="border border-cream-200">
                <CardBody className="p-6">
                  <div className="space-y-6">
                    {scheduleData.day3.map((item, index) => (
                      <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="md:w-1/4 font-medium text-olive-700">{item.time}</div>
                        <div className="md:w-3/4">
                          <h4 className="font-serif text-lg text-olive-900 mb-1">{item.activity}</h4>
                          <p className="text-olive-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};