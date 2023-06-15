<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
    <p class="text-center font-bold my-5 text-indigo-500">
      {{ formatDate(article.date) }}
    </p>
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>

    <!-- <nuxt-content class="prose min-w-full p-10 mx-auto" :document="article" /> -->
    <p class="mb-5" v-html="article.content">
    </p>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const elasticUrl = "https://sptsn.ru/elastic/articles/_search?pretty"
      const data = {
        query: {
          match: {
            slug: params.slug
          }
        }
      }
      const parameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }
      const article = await fetch(elasticUrl, parameters)
        .then(res => res.json())
        .then(res => res.hits.hits.map(x => x._source))
        .then(res => res[0]);

      console.log('slug:', params.slug)
      console.log('article:', article)


      // const article = await $content("", params.slug).fetch();
      return {
        article,
      };
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en", options);
      },
    },
  }
</script>