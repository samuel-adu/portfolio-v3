import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-[var(--space-l)] scroll-m-[var(--space-l)] about-section text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="section-heading">About</h2>
      <p className="section-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et
        animi fugiat totam ducimus reiciendis, alias illo minus nihil blanditiis
        minima laudantium ea temporibus deserunt! Fugiat praesentium possimus
        expedita? Molestiae.
      </p>
    </motion.section>
  );
}
