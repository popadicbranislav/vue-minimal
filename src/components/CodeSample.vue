<script setup lang="ts">
import { Icon } from '@iconify/vue';

const code = ref('npx degit git@github.com:popadicbranislav/vue-minimal.git my-vue-app');
const isCopied = ref(false);

const codeEl = ref();
const isHovered = useElementHover(codeEl);

function copy() {
  navigator.clipboard.writeText(code.value);
  isCopied.value = true;

  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}
</script>

<template>
  <code ref="codeEl" class="relative bg-neutral-800 text-neutral-400 rounded-md text-sm p-4">
    <span>
      {{ code }}
    </span>

    <button
      v-show="isHovered || isCopied"
      class="absolute top-2 right-2 opacity-50 hover:opacity-100 hover:bg-neutral-700 p-2 ml-4 rounded cursor-pointer flex items-center gap-2" :class="{
        'bg-neutral-700': isCopied || isHovered,
        'opacity-100': isCopied,
      }" @click="copy"
    >
      <span class="text-sm empty:hidden">
        {{ isCopied ? 'Copied' : '' }}
      </span>
      <Icon :icon="isCopied ? 'mdi:clipboard-check-outline' : 'mdi:clipboard-outline'" class="text-xl" />
    </button>
  </code>
</template>
