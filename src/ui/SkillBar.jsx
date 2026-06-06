import { motion } from "framer-motion";

export default function SkillBar({ name, value }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-semibold tracking-wide">
        <span className="text-white">{name}</span>
        <span className="text-skyTheme font-mono">Lv.{value === 100 ? 'MAX' : Math.floor(value / 10)}</span>
      </div>
      <div className="w-full bg-slate-900/60 h-3 rounded-full overflow-hidden border border-white/5 shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-skyTheme to-grassTheme rounded-full"
        />
      </div>
    </div>
  );
}