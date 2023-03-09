import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
