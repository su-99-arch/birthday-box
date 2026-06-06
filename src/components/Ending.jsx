import { motion } from "framer-motion";

export default function Ending() {
  return (
    <section className="h-screen w-screen bg-nightTheme flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute text-8xl opacity-5 select-none pointer-events-none">🌟</div>
      
      <div className="max-w-xl w-full space-y-6 z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl text-amber-400 animate-pulse"
        >
          ⭐
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide leading-tight">
          12 岁不是终点，<br/>而是全新主线的开始
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto leading-relaxed font-mono">
          前方还有无数未知的高阶关卡和隐藏地图，等待你去帅气地探索与解锁。
        </p>
        
        <div className="text-slate-500 font-bold tracking-widest text-lg pt-4">
          —— 爱你的家人 ——
        </div>
        
        <div className="pt-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-10 py-4 bg-gradient-to-r from-skyTheme to-grassTheme text-slate-950 font-black rounded-full shadow-2xl hover:shadow-skyTheme/20 hover:scale-105 active:scale-95 transition-all text-sm tracking-wider uppercase"
          >
            重启归航，回望12岁 🚀
          </button>
        </div>
      </div>
    </section>
  );
}