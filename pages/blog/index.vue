<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-12 space-y-2 md:space-y-5">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Blog
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the articles I've posted here.
      </p>
    </div>

    <div class="space-y-16 mx-auto max-w-7xl">
      <BlogItem v-for="(article, index) in articles" :article="article" :key="index" />
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content("")
        .only([
          "title",
          "description",
          "img",
          "slug",
          "tag",
          "author",
          "date",
          "draft",
        ])
        .sortBy("date", "asc")
        .fetch();

      return {
        articles,
      };
    },
  }
</script>