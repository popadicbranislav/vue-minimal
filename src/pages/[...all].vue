<script setup lang="ts">
useHead({
  title: 'Oops!',
})
</script>

<template>
  <div
    class="h-screen flex flex-col items-center justify-center overflow-hidden"
  >
    <span class="text-red">
      error page
    </span>

    <RouterLink to="/" class="underline">
      go home
    </RouterLink>

    <span class="animate-hinge animate-delay-2000 animate-forwards text-red">
      something went wrong
    </span>
  </div>
</template>
