import { readdirSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

const SOURCE_PATH = '.mitosis/vue2';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: readdirSync(SOURCE_PATH).map((file) => `${SOURCE_PATH}/${file}`),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'vue2',
  },
});
