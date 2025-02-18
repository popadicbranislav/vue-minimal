<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    class="h-screen flex flex-col gap-2 items-center justify-center"
  >
    <span class="text-lg font-bold">
      404 - Page not found
    </span>

    <span class="text-neutral-400">
      Path <code>{{ route.path }}</code> not found
    </span>

    <RouterLink to="/" class="underline mt-8 text-lg">
      Back to home page
    </RouterLink>
  </div>
</template>
