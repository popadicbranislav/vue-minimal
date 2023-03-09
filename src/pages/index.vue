<script setup lang="ts">
useHead({
  title: 'Vue > Home',
})
</script>

<template>
  <div
    class="h-screen flex items-center justify-center gap-2"
  >
    <span>
      hi
    </span>
    <span>
      |
    </span>
    <RouterLink to="error" class="underline">
      show error
    </RouterLink>
  </div>
</template>
