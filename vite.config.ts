/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import { unheadVueComposablesImports } from '@unhead/vue';
import vue from '@vitejs/plugin-vue';
import autoimport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    tailwindcss(),
    pages(),
    autoimport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        unheadVueComposablesImports,
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
    components(),
  ],
  test: {
    browser: {
      provider: 'playwright',
      enabled: true,
      instances: [{
        browser: 'chromium',
      }],
    },
  },
});
