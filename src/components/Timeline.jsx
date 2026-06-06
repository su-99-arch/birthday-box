import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";

// 可以无限扩充这个数组，添加几十张照片
const events = [
  { year: "2014", title: "出生 👶", image: "/photos/出生.jpg", text: "2014年的夏天，一个小天使悄然降临，鲍奕辰来到了这个精彩无限的世界！" },
  { year: "2015", title: "一岁 👣", image: "/photos/一岁.jpg", text: "一岁啦！牙还没长齐，也不影响我哈哈大笑。" },
  { year: "2016", title: "推车 👶", image: "/photos/推车.jpg", text: "还不会走路，只能坐车车啦！" },
  { year: "2017", title: "雪花棒 🍪", image: "/photos/雪花棒.jpg", text: "手里拿着美味的雪花棒，没错，我从小就爱吃雪花棒！" },
  { year: "2017", title: "吃香蕉 🍌", image: "/photos/香蕉.jpg", text: "吃香蕉的时候不可以拍照！" },
  { year: "2018", title: "比耶 ✌", image: "/photos/比耶.jpg", text: "面对镜头大方比个耶，那时候的你总有问不完的为什么，是全家的开心果。" },
  { year: "2018", title: "小海龟 🐢", image: "/photos/小海龟.jpg", text: "在碧桂园邂逅慢吞吞的小海龟，那就来张合影吧。" },
  { year: "2018", title: "国庆 🚩", image: "/photos/国庆.jpg", text: "国庆啦！和爸爸一起来一张，祝祖国母亲生日快乐！" },
  { year: "2019", title: "哭哭 😭", image: "/photos/哭哭.jpg", text: "金豆豆说掉就掉，虽然哭得一把鼻涕一把泪，但怎么还是这么萌、这么搞笑呢！" },
  { year: "2020", title: "棒棒糖 🍭", image: "/photos/棒棒糖.jpg", text: "吃到了美味的棒棒糖，甜到心坎里，人类幼崽的快乐就是这么简单！" },
  { year: "2021", title: "嘻嘻 🤭", image: "/photos/嘻嘻.jpg", text: "捂着小嘴偷偷乐，不知道当时圆滚滚的小脑袋里，又在憋着什么整蛊的小坏主意？" },
  { year: "2021", title: "盖房子 🏠", image: "/photos/盖房子.jpg", text: "盖房子的砖到啦！亲手堆砌属于自己的秘密城堡，建筑学天赋拉满。" },
  { year: "2021", title: "抓大鹅 🐔", image: "/photos/抓大鹅.jpg", text: "乡村大冒险！跟姑姑家里战斗力爆表的大鹅斗智斗勇，看看到底是谁统治全场？" },
  { year: "2021", title: "贴春联 🏮", image: "/photos/贴春联.jpg", text: "踩着小板凳，有模有样地帮家里贴春联，红红火火准备迎接新一年的好运！" },
  { year: "2022", title: "忘带钥匙了 🚪", image: "/photos/翻墙.jpg", text: "名场面诞生！忘带钥匙被锁在门外，在线表演可怜无助，只能尝试‘翻墙破门’啦！" },
  { year: "2023", title: "下雪啦 ❄️", image: "/photos/下雪.jpg", text: "千呼万唤的漫天大雪终于来啦！在雪地里尽情撒欢、打雪仗，快乐直接超级加倍！" },
  { year: "2023", title: "做蛋糕 🎂", image: "/photos/做蛋糕.jpg", text: "化身天才烘焙师，虽然弄得满脸都是小奶油，但亲手做的蛋糕吃起来加倍香！" },
  { year: "2023", title: "写作业 📚", image: "/photos/写作业.jpg", text: "暑假快乐的另一面，是在姑姑家一笔一画消灭作业的踏实。不仅玩得痛快，学起来也有模有样，不知不觉真的长成沉稳的大孩子了。" },
  { year: "2023", title: "骑马 🏇", image: "/photos/骑马.jpg", text: "英姿飒爽的小骑士！稳稳跨上马背，策马奔腾，追风少年的帅气值瞬间拉满！" },
  { year: "2023", title: "大熊猫 🐼", image: "/photos/大熊猫.jpg", text: "终于和国宝大熊猫同框啦！近距离围观国宝啃竹子，整个人都要被萌化了。" },
  { year: "2023", title: "四姑娘山 🏔️", image: "/photos/四姑娘山.jpg", text: "顶天立地！成功战胜高海拔的挑战，站在神圣的雪山脚下，征服人生第一座高峰！" },
  { year: "2023", title: "康定 🌪️", image: "/photos/康定.jpg", text: "康定的大风简直是‘狂风绝息斩’！虽然被吹得发型凌乱，但少年的脚步绝不后退。" },
  { year: "2024", title: "挖红薯 🍠", image: "/photos/挖红薯.jpg", text: "撸起袖子下地劳动，一锄头下去收获大红薯，体会大丰收和泥土的纯粹芬芳！" },
  { year: "2024", title: "放牛 🐂", image: "/photos/放牛.jpg", text: "田园风光的深度体验者，牵着牛儿在草地上散步，解锁乡村隐世高人的隐藏成就。" },
  { year: "2024", title: "大富翁 🎰", image: "/photos/大富翁.jpg", text: "家庭智商桌游对决！扔骰子买地产，今晚的财富密码全被大富翁奕辰掌控了！" },
  { year: "2025", title: "冰糖葫芦 🍡", image: "/photos/恩施.jpg", text: "咬下一口红彤彤、嘎嘣脆的冰糖葫芦，不管口感如何，自制的糖葫芦就是不一样。" },
  { year: "2025", title: "台球 🎱", image: "/photos/台球.jpg", text: "架杆、瞄准、大力出击！在台球桌前冷静沉着，一杆进洞的姿势简直帅炸了！" },
  { year: "2025", title: "泡面 🍜", image: "/photos/泡面.jpg", text: "春节兄弟姐妹欢聚一堂，最适合分食泡面啦。" },
  { year: "2025", title: "恩施之旅 🗺️", image: "/photos/恩施.jpg", text: "步履不停！打卡奇幻的恩施大峡谷，用双脚丈量祖国的壮丽山河，见识更广阔的世界。" },
  { year: "2026", title: "晋升哥哥 👦", image: "/photos/哥哥.jpg", text: "家里多了一个抢玩具的‘赛博神兽’，但我可是顶天立地的哥哥，以后我罩着他！" },
  { year: "2026", title: "襄阳古城一游 🏯", image: "/photos/襄城.jpg", text: "漫步在青砖黛瓦的古道上，登临古城墙，仿佛一不小心穿越回了千年前的江湖！" },
  { year: "2026", title: "春节 🧨", image: "/photos/春节.jpg", text: "张灯结彩，爆竹声声！收红包收到手软，热热闹闹地和最爱的家人们一起守岁迎新。" },
  { year: "2026", title: "十二岁 🎂", image: "/photos/birthday12.jpg", text: "Lv.12 成就完美解锁！个子拔高了，肩膀结实了，正式迎来热烈璀璨的少年纪元！" }
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const carouselRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  // 动态计算拖拽边界，确保无论几十张图都能顺滑拖到底
  useEffect(() => {
    if (carouselRef.current) {
      setDragConstraints({
        right: 0,
        left: -carouselRef.current.scrollWidth + carouselRef.current.offsetWidth
      });
    }
  }, []);

  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 relative overflow-hidden">
      <div className="w-full space-y-8 z-10 flex flex-col h-full justify-center">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
  时光长廊</h2>
          <p className="text-slate-400 text-sm mt-3">👉 左右拖拽滑动时光轨道，点击老相片唤醒记忆</p>
        </div>

        {/* 拖拽画廊外壳 */}
        <motion.div 
          ref={carouselRef} 
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing relative px-10 py-32"
        >
          {/* 超长的中央轨道霓虹线 */}
          <div className="absolute top-1/2 left-0 w-[8000px] h-1 bg-gradient-to-r from-slate-800 via-skyTheme/40 to-slate-800 -translate-y-1/2 z-0"></div>

          <motion.div 
            drag="x" 
            dragConstraints={dragConstraints} 
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
            className="flex items-center gap-16 w-max relative z-10 px-[10vw]"
          >
            {events.map((event, idx) => {
              // 上下交替排列
              const isTop = idx % 2 === 0;
              // 给“拍立得”相片一些带趣味性的随机倾斜
              const randomRotation = (idx % 3 === 0) ? -5 : (idx % 2 === 0 ? 4 : -3);

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className={`relative flex flex-col items-center group w-32
                    ${isTop ? "flex-col" : "flex-col-reverse"}
                  `}
                >
                  {/* 连接节点与相片的虚线 */}
                  <div className="absolute top-1/2 left-1/2 w-px h-20 bg-dashed border-l border-dashed border-slate-600 -translate-x-1/2 -z-10"></div>

                  {/* 拍立得悬浮相片 */}
                  <div 
                    onClick={() => setSelectedEvent(event)}
                    className="bg-white p-2 pb-6 rounded-sm shadow-xl shadow-black/50 cursor-pointer hover:shadow-skyTheme/50 transition-all duration-300 transform hover:!rotate-0 group-hover:-translate-y-3 group-hover:scale-110 z-20"
                    style={{ 
                      transform: `rotate(${randomRotation}deg)`, 
                      marginTop: isTop ? '-100px' : '0', 
                      marginBottom: isTop ? '0' : '-100px' 
                    }}
                  >
                    <div className="w-28 h-28 bg-slate-800 overflow-hidden relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden absolute inset-0 flex items-center justify-center text-3xl bg-slate-200">
                        📸
                      </div>
                    </div>
                    {/* 相片上的手写年份 */}
                    <div className="text-center font-bold text-slate-800 mt-2 text-lg font-mono leading-none">
                      {event.year}
                    </div>
                  </div>

                  {/* 轨道上的发光节点 */}
                  <div className={`my-4 w-6 h-6 rounded-full bg-slate-900 border-[3px] border-slate-700 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-skyTheme group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-skyTheme transition-colors"></div>
                  </div>

                  {/* 悬浮标签 */}
                  <span className={`text-sm font-semibold text-slate-400 group-hover:text-skyTheme transition-colors absolute ${isTop ? '-bottom-12' : '-top-12'} whitespace-nowrap`}>
                    {event.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
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
              {/* 照片展示区：支持横竖各类比例的自适应模糊背景方案 */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-slate-950 overflow-hidden border border-white/5 flex items-center justify-center group">
                {/* 底层高斯模糊背景：填充边角空隙 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-125 transition-all duration-500 group-hover:opacity-60"
                  style={{ backgroundImage: `url(${selectedEvent.image})` }}
                ></div>
                
                {/* 顶层原图：等比例缩放完整显示 */}
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="relative z-10 h-full w-auto max-w-full object-contain rounded-md shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-4xl bg-gradient-to-tr from-slate-800 to-slate-900 select-none z-20">
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