<template>
  <NuxtLink :to="url">
    <div class="blog-item flex flex-col p-5 mb-5 rounded-md">
      <div class="flex flex-row justify-between">
        <h3 class="mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">
          {{ article.title }}
        </h3>
        <div class="h-fit bg-indigo-500 text-white py-1 px-2 rounded-md font-semibold text-center">
          {{ formatDate(article.date) }}
        </div>
      </div>

      <pre v-if="article.highlight" class="language-html" v-html="article.highlight"></pre>

      <p v-else class="mb-4 text-gray-500">
        {{ article.description }}
      </p>

      <div v-if="article.tags" class="flex flex-row">
        <span v-for="tag in article.tags" class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          {{ tag }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
  import Badge from './shared/Badge.vue';

  export default {
    components: {
      Badge,
    },
    props: ['article'],
    data(){
      return {
        url: `/blog/${this.article.slug}`
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en", options);
      },
    },
  }
</script>

<style>
.blog-item:hover {
  background-color: rgb(241 245 249);
  cursor: pointer;
}
</style>