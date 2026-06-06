import { motion } from "framer-motion";

// 这里可以放入所有你们的照片路径
// 你只需要把照片放到 public/photos 文件夹中，然后在这里添加或修改即可
const photos = [
  { id: 1, src: "/photos/duo1.jpg", alt: "合影 1" },
  { id: 2, src: "/photos/duo2.jpg", alt: "合影 2" },
  { id: 3, src: "/photos/duo3.jpg", alt: "合影 3" },
  { id: 4, src: "/photos/duo4.jpg", alt: "合影 4" },
  { id: 5, src: "/photos/duo5.jpg", alt: "合影 5" },
  { id: 6, src: "/photos/duo6.jpg", alt: "合影 6" },
  { id: 7, src: "/photos/duo7.jpg", alt: "合影 7" },
  { id: 8, src: "/photos/duo8.jpg", alt: "合影 8" },
  { id: 9, src: "/photos/duo9.jpg", alt: "合影 9" },
  { id: 10, src: "/photos/duo10.jpg", alt: "合影 10" },
  { id: 11, src: "/photos/duo11.jpg", alt: "合影 11" },
  { id: 12, src: "/photos/duo12.jpg", alt: "合影 12" },
  { id: 13, src: "/photos/duo13.jpg", alt: "合影 13" },
  { id: 14, src: "/photos/duo14.jpg", alt: "合影 14" },
  { id: 15, src: "/photos/duo15.jpg", alt: "合影 15" },
  { id: 16, src: "/photos/duo16.jpg", alt: "合影 16" },
  { id: 17, src: "/photos/duo17.jpg", alt: "合影 17" },
  { id: 18, src: "/photos/duo18.jpg", alt: "合影 18" },
  { id: 19, src: "/photos/duo19.jpg", alt: "合影 19" },
  { id: 20, src: "/photos/duo20.jpg", alt: "合影 20" },
  { id: 21, src: "/photos/duo21.jpg", alt: "合影 21" },
  { id: 22, src: "/photos/duo22.jpg", alt: "合影 22" },
  { id: 23, src: "/photos/duo23.jpg", alt: "合影 23" },
  { id: 24, src: "/photos/duo24.jpg", alt: "合影 24" },
  { id: 25, src: "/photos/duo25.jpg", alt: "合影 25" },
  { id: 26, src: "/photos/duo26.jpg", alt: "合影 26" },
  { id: 27, src: "/photos/duo27.jpg", alt: "合影 27" },
  { id: 28, src: "/photos/duo28.jpg", alt: "合影 28" },
];

export default function TwoOfUs() {
  return (
    <section className="min-h-screen w-screen bg-nightTheme flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      {/* 装饰性背景光晕 */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full space-y-16 z-10">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400"
          >
            形影不离的两人
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm"
          >
            那些一起笑、一起闹、一起长大的珍贵瞬间 ✨
          </motion.p>
        </div>

        {/* 网格照片墙设计 (按严格编号顺序排布) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl cursor-pointer aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* 如果照片找不到显示的提示兜底UI */}
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 text-center">
                <span className="text-4xl shadow-black drop-shadow-md mb-2">📷</span>
                <span className="text-xs font-semibold text-white break-all">缺少对应照片<br/>(/photos/duo{idx+1}.jpg)</span>
              </div>

              {/* 悬浮遮罩层，提升质感 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                <span className="text-white text-sm font-medium drop-shadow-lg">{photo.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}