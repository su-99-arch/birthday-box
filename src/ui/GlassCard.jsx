import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "out" }}
      className={`backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl p-6 md:p-8 rounded-3xl ${className}`}
    >
      {children}
    </motion.div>
  );
}