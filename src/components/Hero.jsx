import { motion } from "framer-motion";
import StarBackground from "../ui/StarBackground";

export default function Hero() {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-sky-600 via-sky-500 to-grassTheme">
      <StarBackground />
      
      {/* 漂浮球类装饰 */}
      <div className="absolute text-7xl opacity-20 animate-float-slow top-20 left-16 md:left-40 select-none">⚽</div>
      <div className="absolute text-6xl opacity-20 animate-float-reverse bottom-32 left-10 md:left-48 select-none">🚴</div>
      <div className="absolute text-6xl opacity-20 animate-float-slow top-32 right-16 md:right-52 select-none">🏸</div>

      <div className="text-center z-10 space-y-6 px-4">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/80 tracking-widest font-bold text-sm md:text-base"
        >
          🎂 HAPPY BIRTHDAY TO YICHEN
        </motion.p>
        
        <motion.h1
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
        >
          鲍奕辰
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 rounded-full font-bold text-lg text-white shadow-lg"
        >
          Lv.12 少年世界已解锁
        </motion.div>
        
        <div className="pt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("profile").scrollIntoView({ behavior: "smooth" })}
            className="bg-white font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-all text-lg flex items-center gap-2 mx-auto"
            /* 🔥 终极魔法：强制指定文字颜色为深夜暗蓝色，彻底拒绝任何 CSS 文件的干扰！ */
            style={{ color: '#0F172A' }}
          >
            进入生日盒 <span className="animate-pulse">→</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}