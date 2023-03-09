import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    Vue(),

    UnoCSS(),

    Pages(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
  ],
})
