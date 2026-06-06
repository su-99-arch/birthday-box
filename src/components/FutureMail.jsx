import { useState } from "react";
import GlassCard from "../ui/GlassCard";

export default function FutureMail() {
  const [letter, setLetter] = useState(() => localStorage.getItem("future-letter") || "");
  const [saved, setSaved] = useState(false);

  const saveLetter = () => {
    localStorage.setItem("future-letter", letter);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-skyTheme to-grassTheme">第五部分：未来信箱</h2>
          <p className="text-slate-400 text-sm mt-3">在此写下寄语，时光锁将自动将其封存，等18岁成年那天再次解封</p>
        </div>

        <GlassCard className="space-y-5">
          <div className="flex items-center gap-3 text-lg font-bold text-skyTheme">
            <span>📮 寄往 2032 年的夏日信笺</span>
          </div>
          
          <textarea
            rows={8}
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            placeholder="18岁的我：&#10;&#10;你好。&#10;现在我刚满12岁，我想对未来的自己说..."
            className="w-full bg-slate-950/80 border border-white/10 rounded-2xl p-5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-skyTheme focus:ring-2 focus:ring-skyTheme/20 transition-all font-mono leading-relaxed resize-none text-base"
          />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs text-slate-500 font-mono">🔒 本地沙盒固态加密存储技术，六年后重访依然有效</span>
            <button
              onClick={saveLetter}
              className="px-8 py-3 bg-skyTheme text-slate-950 font-black rounded-xl shadow-lg shadow-skyTheme/10 hover:bg-sky-400 active:scale-95 transition-all text-sm whitespace-nowrap"
            >
              {saved ? "✨ 固态封存完成！" : "🔒 压缩封存到未来"}
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}