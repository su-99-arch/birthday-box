import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const events = [
  { year: "2014", title: "出生 👶", image: "/photos/baby.jpg", text: "2014年，一个小天使悄然降临，奕辰来到了这个精彩无限的世界！" },
  { year: "2018", title: "幼儿园 🎈", image: "/photos/kindergarten.jpg", text: "那时候的你，最迷恋热血动画片，脑子里总有十万个为什么，是全家的开心果。" },
  { year: "2020", title: "小学生 🎒", image: "/photos/school.jpg", text: "光荣地戴上了红领巾，背起大书包跨入校门，正式开启属于你的知识探险之路。" },
  { year: "2023", title: "爱上运动 ⚽", image: "/photos/football.jpg", text: "绿茵场和球网上空开始留下你飞奔留下的汗水，体育技能全面觉醒！" },
  { year: "2026", title: "十二岁 🎂", image: "/photos/birthday12.jpg", text: "Lv.12 成就完美解锁！个子拔高了，肩膀结实了，迎来了热烈璀璨的少年纪元！" }
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl w-full space-y-12 z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-skyTheme to-grassTheme">第二部分：时光走廊</h2>
          <p className="text-slate-400 text-sm mt-3">横向轻轨滑动，点击节点唤醒被封存的闪光记忆</p>
        </div>

        {/* 时间轴滚动轴线 */}
        <div className="relative flex justify-between items-center py-12 before:absolute before:h-1 before:w-full before:bg-slate-800 before:top-1/2 before:left-0 before:-translate-y-1/2">
          {events.map((event, idx) => (
            <motion.button
              key={event.year}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setSelectedEvent(event)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-bold font-mono flex items-center justify-center transition-all duration-300 group-hover:bg-skyTheme group-hover:text-slate-950 group-hover:scale-110 group-hover:border-skyTheme shadow-xl">
                {event.year.slice(-2)}
              </div>
              <span className="text-xs font-semibold mt-3 text-slate-400 group-hover:text-skyTheme transition-colors">{event.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </div>

        <div className="text-center text-sm text-slate-500 animate-pulse">
          💡 点击上方对应年份的徽章，可查看当年的成长历史简批
        </div>
      </div>

      {/* 弹窗模态框 */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/10 p-6 rounded-3xl max-w-md w-full shadow-2xl space-y-4"
            >
              <div className="relative aspect-video w-full rounded-2xl bg-slate-800 overflow-hidden border border-white/5">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-4xl bg-gradient-to-tr from-slate-800 to-slate-900 select-none">
                  🖼️
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-skyTheme font-mono">{selectedEvent.year} · {selectedEvent.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedEvent.text}</p>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                收起信纸
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}