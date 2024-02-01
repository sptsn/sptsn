<template>
  <div class="p-4 md:w-1/2 md">
    <div class="project-card h-full p-4 overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
      <div class="flex flex-row justify-between">
        <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
          {{ item.title }}
        </h2>

        <a class="external-link text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" :href="item.href">
          <span class="sr-only"></span>
          <img class="w-6 h-6" src="/external.png"/>
        </a>
      </div>

      <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
        {{ item.description }}
      </p>

      <div class="text-gray-400 text-sm font-extralight">
        <span v-for="(tech, index) in item.tech" @click="addTag(tech)" :class="[selectedTags.includes(tech) ? 'bg-blue-400 text-white' : 'bg-blue-100 text-blue-800']" class="project-card text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["item", "selectedTags", "addTag"],
  }
</script>

<style>
  a.external-link:hover {
    filter: brightness(105%);
  }

  div.project-card:hover {
    background-color: rgb(241 245 249);
  }

  span.project-card {
    cursor: pointer;
  }
  span.project-card:hover {
    filter: brightness(105%);
  }
</style>