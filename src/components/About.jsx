import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiCamera, FiUsers, FiAward, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Make sure Link is imported

// Placeholder image of the photographer. Replace with an actual photo of Jude.
const photographerImage = "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Component for the animated number counter
function AnimatedStat({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 });
    return animation.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

const About = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { type: 'spring', duration: 1, delay: i * 0.2 },
        }),
    };

    const stats = [
        { icon: <FiCamera />, value: 500, label: "Projects Completed" },
        { icon: <FiUsers />, value: 150, label: "Happy Clients" },
        { icon: <FiAward />, value: 10, label: "Years of Experience" },
    ];
    
    return (
        // FIX: Added pt-20 to the main section to offset the fixed navbar
        <section id="about" className="pt-20 py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <motion.div 
                        className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <img 
                            src={photographerImage} 
                            alt="Jude, the photographer" 
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    >
                        <motion.h3 variants={sectionVariants} className="text-3xl font-semibold mb-4 text-neutral-100">
                            Jude | Photographer in Mumbai
                        </motion.h3>
                        
                        <motion.p variants={sectionVariants} className="text-neutral-300 mb-6">
                            Hi, I'm Jude, a passionate photographer based in the vibrant city of Bandra West. For me, photography isn't just about taking pictures; it's about telling stories, capturing raw emotions, and preserving fleeting moments in time. My goal is to create images that are not only beautiful but also authentic and meaningful.
                        </motion.p>
                        
                        <motion.p variants={sectionVariants} className="text-neutral-300 mb-8">
                            My style is a blend of candid photojournalism and fine-art portraiture. I believe in bringing out the best in every click by understanding my clients and making them feel comfortable in front of the lens. Whether it's a wedding, a corporate event, or a personal portrait, I strive for excellence and versatility in every shot.
                        </motion.p>

                        {/* Animated Stats */}
                        <motion.div variants={sectionVariants} className="flex flex-wrap justify-start gap-8 mb-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl text-white mb-2">{stat.icon}</div>
                                    <div className="text-3xl font-bold">
                                        <AnimatedStat value={stat.value} />+
                                    </div>
                                    <p className="text-neutral-400">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Call to Action Button */}
                        <motion.div variants={sectionVariants}>
                            <Link to="/contact" className="bg-white text-black font-bold py-3 px-6 rounded-lg text-md inline-flex items-center gap-2 hover:bg-neutral-200 transition-colors duration-300">
                                Let's Connect <FiArrowRight />
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
