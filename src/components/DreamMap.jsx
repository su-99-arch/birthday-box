import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const islands = [
  { id: "soccer", name: "足球岛", emoji: "⚽", desc: "渴望冲入更宏大的绿茵战场，在战术博弈中踢出精彩的远射，结识并肩作战的好兄弟！" },
  { id: "badminton", name: "羽毛球岛", emoji: "🏸", desc: "追求极致精准的底线扣杀与快速变线，让身体和球拍在球场上轻盈起舞！" },
  { id: "cycling", name: "骑行岛", desc: "用车轮丈量祖国更远的地平线，翻过高山，直面逆风，享受纯粹的极速推背感！", emoji: "🚴" },
  { id: "dream", name: "梦想岛", emoji: "🚀", desc: "永远不给自己设限，保持对宇宙和代码世界的深度渴望，随时准备向着浩瀚的未来发射！" }
];

export default function DreamMap() {
  const [activeIsland, setActiveIsland] = useState(null);

  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-4xl w-full space-y-12 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">梦想地图</h2>
          <p className="text-slate-400 text-sm mt-3">点击对应坐标，探索埋藏在四个关键成长领域的梦想锚点</p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-10">
          {islands.map((island) => (
            <motion.button
              key={island.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveIsland(island)}
              className="p-8 bg-slate-900/60 rounded-3xl border border-white/5 hover:border-skyTheme/30 hover:bg-slate-800/30 transition-all text-center flex flex-col items-center justify-center gap-3 group shadow-xl"
            >
              <span className="text-5xl group-hover:scale-110 transition-transform duration-300 select-none">{island.emoji}</span>
              <span className="font-bold text-lg text-slate-200 group-hover:text-skyTheme transition-colors">{island.name}</span>
            </motion.button>
          ))}
        </div>

        {/* 地图内容叠加弹层 */}
        <AnimatePresence>
          {activeIsland && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-slate-950/90 rounded-3xl p-8 flex flex-col justify-center items-center text-center z-20 border border-white/10 shadow-2xl"
            >
              <span className="text-6xl mb-2 select-none animate-bounce">{activeIsland.emoji}</span>
              <h4 className="text-2xl font-black text-emerald-400">{activeIsland.name} · 梦想内核</h4>
              <p className="text-slate-300 max-w-md text-sm md:text-base leading-relaxed mt-4 font-mono">{activeIsland.desc}</p>
              <button
                onClick={() => setActiveIsland(null)}
                className="mt-8 px-6 py-2 bg-slate-800 text-slate-400 border border-white/5 rounded-xl text-xs font-semibold hover:text-white transition-colors"
              >
                收纳罗盘，返回地图 ↩
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}