<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: source.slug } }">
    <article class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none p-5 mb-5 rounded-md">
      <div class="flex flex-row">
        <div class="basis-4/5">
          <h3 class="mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">
              {{ source.title }}
          </h3>
        </div>
        <div class="basis-1/5 h-8 bg-indigo-500 text-white py-1 px-2 rounded-md font-semibold text-center">
          {{ formatDate(source.date) }}
        </div>
      </div>

      <div class="prose prose-slate dark:prose-dark">
        <template v-if="this.highlight">
          <pre class="language-html" v-html="highlight.content[0]"></pre>
        </template>

        <p class="text-gray-500" v-else>
          {{ source.description }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>

<script>
  export default {
    props: ['article'],
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en", options);
      },
    },
    data() {
      return {
        source: this.article._source,
        highlight: this.article.highlight,
      };
    },
  }
</script>

<style>
article:hover {
  background-color: rgb(241 245 249);
  cursor: pointer;
}
</style>