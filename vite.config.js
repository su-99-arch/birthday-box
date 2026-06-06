import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // 🔥 必须放在第一位！先让 Tailwind 扫描并生成样式
    react(),
  ],
})