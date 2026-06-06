import { TypeAnimation } from "react-type-animation";
import GlassCard from "../ui/GlassCard";

export default function SecretLetter() {
  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-3xl w-full space-y-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">秘密留言</h2>
        </div>

        <GlassCard className="bg-slate-950/40 border border-yellow-500/20 p-8 md:p-12 relative rounded-3xl shadow-[0_0_50px_rgba(234,179,8,0.05)]">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-skyTheme via-yellow-400 to-grassTheme"></div>
          
          <div className="text-yellow-100/90 font-mono text-base md:text-lg min-h-[320px] leading-loose whitespace-pre-line">
            <TypeAnimation
              sequence={[
                `亲爱的奕辰：\n\n转眼间你已经12岁了。\n\n小时候的你，总喜欢跑来跑去。\n现在的你，已经慢慢长成一个小男子汉。\n\n希望未来的你：\n保持热爱，\n保持善良，\n保持好奇心。\n\n世界很大，去看看吧。`,
                1000
              ]}
              speed={50}
              cursor={true}
              repeat={0}
            />
          </div>

          <div className="text-right border-t border-white/5 pt-6 mt-6">
            <p className="font-bold text-xl text-yellow-400 font-serif">—— 爱你的家人 👩‍💻</p>
            <p className="text-xs text-slate-500 font-mono mt-1">2026年盛夏 · 留</p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}