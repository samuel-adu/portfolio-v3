import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-[var(--spacing-m)] scroll-m-[var(--spacing-l)]"
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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id similique
        illum ut molestias, culpa, eos, facere laboriosam iusto ab expedita
        optio quasi modi at tenetur animi amet possimus porro incidunt.
      </p>
    </motion.section>
  );
}
