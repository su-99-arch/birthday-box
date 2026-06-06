import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

export default function LevelUp() {
  const [activated, setActivated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-3xl w-full">
        <GlassCard className="text-center p-10 relative overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">System Upgrade</span>
          <h2 className="text-4xl md:text-6xl font-black text-amber-400 mt-2 tracking-wide animate-pulse">🎉 LEVEL UP !</h2>
          
          <div className="flex justify-center items-center gap-8 my-10">
            <span className="text-2xl font-bold text-slate-500 line-through">11 岁</span>
            <span className="text-4xl text-skyTheme animate-bounce">➔</span>
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-skyTheme">12 岁</span>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>系统升级经验结算</span>
              <span className="text-emerald-400 font-bold">{activated ? "100%" : "99.9%"}</span>
            </div>
            <div className="w-full bg-slate-950 p-1 h-7 rounded-full border border-white/10 overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: "30%" }}
                whileInView={activated ? { width: "100%" } : { width: "99.9%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-skyTheme to-emerald-400"
              />
            </div>

            {!activated && (
              <button 
                onClick={() => setActivated(true)}
                className="text-xs text-skyTheme underline hover:text-sky-300 font-mono cursor-pointer"
              >
                [ 点击手动向系统注入最后一丝成长源能 ]
              </button>
            )}

            {activated && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="pt-6">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black rounded-2xl shadow-xl hover:shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all text-base"
                >
                  📥 领取 12 岁成长尊享礼包
                </button>
              </motion.div>
            )}
          </div>
        </GlassCard>
      </div>

      {/* 礼包弹窗 */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-slate-900 border border-amber-400/40 p-8 rounded-3xl max-w-sm w-full text-center space-y-5 shadow-2xl">
            <div className="text-5xl animate-bounce">🏆</div>
            <h3 className="text-2xl font-bold text-amber-400">新篇章特权解锁</h3>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 text-left text-sm font-mono text-slate-300 space-y-2">
              <p>💪 基础勇气属性 +10%</p>
              <p>🏃 绿茵体能骨骼耐力 +10%</p>
              <p>🧠 全维视界认知储备 +10%</p>
              <p className="text-emerald-400">✨ 终身免费附带无限快乐Buff</p>
            </div>
            <button onClick={() => setModalOpen(false)} className="w-full py-3 bg-gradient-to-r from-skyTheme to-emerald-500 text-slate-950 font-bold rounded-xl transition-transform hover:scale-[1.02]">
              合上礼包盒
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}