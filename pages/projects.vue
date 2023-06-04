<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Projects
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've build or been a part of.
      </p>
    </div>

    <main class="relative mb-auto">
      <div class="container py-12">
        <div class="flex flex-wrap -m-4">
          <ProjectCard v-for="item in projectsData" :item="item" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import projectsData from '@/data/projects';

  export default {
    data() {
      return {
        projectsData,
      };
    }
  }
</script>