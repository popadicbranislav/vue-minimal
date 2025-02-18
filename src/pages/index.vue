<template>
  <div class="h-screen flex flex-col">
    <main class="mt-[40vh] w-2xl mx-auto max-w-[90vw] flex flex-col items-start gap-4">
      <h1 class="text-3xl font-bold text-balance">
        Welcome to the minimal Vue 3 Vite starter
      </h1>

      <p class="text-lg font-thin text-balance">
        A simple Vue 3 Vite starter template with Vue&nbsp;Router, Tailwind&nbsp;CSS, file-based routing, and <RouterLink
          to="about" class="hover:underline text-emerald-500 hover:text-emerald-600 font-normal"
        >
          more.
        </RouterLink>
      </p>
    </main>

    <TheFooter class="mt-auto" />
  </div>
</template>
