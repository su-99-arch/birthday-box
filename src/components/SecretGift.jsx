import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

export default function SecretGift() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const verify = () => {
    // 默认解密金钥匙：20140606 或 20140618 等，可在此自定义
    if (password === "20140606") {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">第七部分：生日彩蛋</h2>
          <p className="text-slate-400 text-sm mt-3">提示：输入属于冒险者的8位出生年月日密码解锁数字金库</p>
        </div>

        <GlassCard className="text-center p-8 border border-purple-500/10 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
          {!isUnlocked ? (
            <div className="space-y-5 max-w-sm mx-auto">
              <div className="flex gap-3">
                <input
                  type="password"
                  maxLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码解锁..."
                  className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-center font-mono tracking-widest text-slate-200 focus:outline-none focus:border-purple-400 transition-all text-base"
                />
                <button
                  onClick={verify}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl text-sm transition-transform active:scale-95"
                >
                  破译
                </button>
              </div>
              {error && <p className="text-xs text-red-400 font-mono animate-pulse">❌ 金钥匙频率匹配失败，再仔细数数日期？</p>}
            </div>
          ) : (
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6">
              <div className="text-5xl">🎁</div>
              <h3 className="text-xl font-extrabold text-emerald-400">核心保险库成功开启！</h3>
              
              {/* 多媒体插槽 */}
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="aspect-video w-full rounded-2xl bg-slate-950 border border-white/5 overflow-hidden flex flex-col items-center justify-center relative">
                  <video controls src="/videos/family.mp4" className="w-full h-full object-cover" />
                  {/* 若无视频，自动降级为文案显示 */}
                  <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-slate-500 text-xs pointer-events-none p-4">
                    <span>🎬 家族祝福短片视频插槽</span>
                    <span className="text-[10px] mt-1 text-slate-600">(将视频重命名为 family.mp4 放入 public/videos 目录下即可显示)</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center relative">
                  <audio controls src="/audio/blessing.mp3" className="w-full" />
                  <div className="text-[10px] text-slate-600 mt-2">
                    🎵 背景独白原声带插槽 (音频放于 public/audio/blessing.mp3)
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </GlassCard>
      </div>
    </section>
  );
}