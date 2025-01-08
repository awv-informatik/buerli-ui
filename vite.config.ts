import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const root = process.platform === 'win32' ? resolve('/') : '/'
const external = (id: string) => !id.startsWith('.') && !id.startsWith(root)

export default defineConfig({
  plugins: [react(), dts({ include: ['lib'], tsconfigPath: './tsconfig.app.json' })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      formats: ['es', 'cjs'],
      name: 'buerli-ui',
      fileName: 'buerli-ui',
    },
    rollupOptions: {
      external,
    },
  },
})
