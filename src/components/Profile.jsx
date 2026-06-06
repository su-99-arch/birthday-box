import GlassCard from "../ui/GlassCard";
import SkillBar from "../ui/SkillBar";

const skills = [
  ["⚽ 足球竞技", 75],
  ["🏸 羽毛球技", 80],
  ["🚴 户外骑行", 65],
  ["📚 知识探险", 85],
  ["😄 快乐常驻", 100]
];

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen w-screen bg-gradient-to-b from-grassTheme to-nightTheme flex flex-col justify-center items-center py-20 px-4">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white">成长档案</h2>
          <p className="text-white/60 text-sm mt-3">系统检测到当前冒险者属性面板已刷新</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 人物主卡 */}
          <GlassCard className="flex flex-col justify-between">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-20 h-20 bg-gradient-to-tr from-skyTheme to-grassTheme rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-black/20 select-none">👦</div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-wide">鲍奕辰</h3>
                <p className="text-sm text-skyTheme font-medium mt-0.5">当前职业：少年冒险家</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-white/10 pt-4 text-slate-200 text-sm">
              <p><span className="text-slate-400 font-medium">专属称号：</span> 👑 阳光小少年</p>
              <p><span className="text-slate-400 font-medium">当前生命值：</span> 100% (元气满满)</p>
              <p><span className="text-slate-400 font-medium">核心被动：</span> 永葆对世界的热爱与好奇心</p>
            </div>
          </GlassCard>

          {/* 属性展示 */}
          <GlassCard className="space-y-5">
            <h4 className="font-bold text-lg text-emerald-400 flex items-center gap-2 border-b border-white/10 pb-2">⚡ 角色核心技能值</h4>
            <div className="space-y-4">
              {skills.map(([name, value]) => (
                <SkillBar key={name} name={name} value={value} />
              ))}
            </div>
          </GlassCard>
        </div>

        {/* 任务清单 */}
        <GlassCard className="border border-dashed border-white/20 bg-white/5">
          <h4 className="font-bold text-white mb-4 flex items-center gap-2">🎯 阶段性主线任务线</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3 bg-slate-950/40 p-4 rounded-xl border border-white/5 text-emerald-400 font-semibold">☑️ 完美蜕变至英姿飒爽的12岁</div>
            <div className="flex items-center gap-3 bg-slate-950/40 p-4 rounded-xl border border-white/5 text-slate-400">⏳ 解锁13岁的未知地图碎片</div>
            <div className="flex items-center gap-3 bg-slate-950/40 p-4 rounded-xl border border-white/5 text-slate-400">🌍 骑行拓展视野，探索大千世界</div>
            <div className="flex items-center gap-3 bg-slate-950/40 p-4 rounded-xl border border-white/5 text-slate-400">✨ 保持初心，成为更棒的自己</div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}