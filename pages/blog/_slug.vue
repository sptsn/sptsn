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
      // const url = `http://localhost:8080/articles/${params.slug}`
      const url = `https://sptsn.ru/api/articles/${params.slug}`
      console.log(url)
      const article = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          "Access-Control-Allow-Methods": "OPTIONS"
        },
      })
      .then(res => res.json())
      .then(res => res['results'][0])
      .catch(err => this.error = err);

      console.log(article)
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