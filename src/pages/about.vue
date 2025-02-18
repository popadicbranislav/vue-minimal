<script setup lang="ts">
const items = [
  { name: 'Vite', href: 'https://vite.dev/' },
  { name: 'Vue Router', href: 'https://router.vuejs.org/' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { name: 'Vitest', href: 'https://vitest.dev/' },
  { name: 'Iconify', href: 'https://iconify.design/' },
  { name: 'vite-plugin-pages', href: 'https://github.com/hannoeru/vite-plugin-pages' },
  { name: 'unplugin-auto-imports', href: 'https://github.com/unplugin/unplugin-auto-import' },
];
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex flex-col justify-center gap-20 w-2xl max-w-[90vw] mx-auto mt-[20vh] mb-20">
      <section>
        <h1 class="font-bold text-3xl mb-4">
          A Simple <a
            href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
            class="hover:underline hover:text-emerald-600 text-emerald-500"
          >
            Vue 3
          </a> Starter
        </h1>
        <p class="font-thin">
          This template is build by <a href="https://github.com/popadicbranislav" target="_blank" class="hover:underline font-mono">popadicbranislav </a> and it is supposed to be used as a starting point for your Vue 3 projects.
        </p>
      </section>

      <section>
        <h2
          id="features"
          class="text-2xl font-light relative hover:test"
        >
          <a href="#features">Features </a>
        </h2>

        <ul class="list-inside px-3 mt-4">
          <li v-for="item in items" :key="item.name">
            <a :href="item.href" target="_blank" rel="noopener noreferrer" class="hover:underline font-light">
              &rightarrow;&nbsp;{{ item.name }}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2
          id="get-started"
          class="text-2xl font-light relative"
        >
          <a href="#get-started">Get started</a>
        </h2>

        <div class="mt-4 flex flex-col gap-1 items-start self-stretch">
          <a
            href="https://github.com/new?template_name=vue-minimal&template_owner=popadicbranislav" target="_blank"
            class="text-normal bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-md hover:animate-pulse transition-all"
          >Use
            template</a>
          or
          <CodeSample class="self-stretch" />
        </div>
      </section>

      <RouterLink to="/" class="underline text-emerald-500 hover:text-emerald-600">
        Back to home page
      </RouterLink>
    </main>

    <TheFooter class="mt-auto" />
  </div>
</template>
