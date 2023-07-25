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

    <div class="mb-10">
      <input v-model="value" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search">
    </div>

    <span v-if="error" class="bg-red-100 text-red-800 mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
      {{ error }}
    </span>
    <template v-else>
      <Spinner v-if="loading" class="flex justify-center" />
      <template v-else-if="articles.length > 0">
        <p class="mb-5 text-lg leading-7 text-gray-500 dark:text-gray-400">Found {{ total }} result(s)</p>
        <BlogItem v-for="article in articles" :article="article" :key="generateKey()" />
      </template>
      <p v-else class="text-lg leading-7 text-gray-500 dark:text-gray-400">Nothing found</p>
    </template>
  </div>
</template>

<script>
  import _ from 'lodash';
  import Spinner from '@/components/shared/Spinner.vue';

  export default {
    components: {
      Spinner,
    },
    data({ $content, params }) {
      return {
        articles: [],
        value: null,
        loading: true,
        error: null,
        total: 0,
      };
    },
    created() {
      this.loadArticles();
    },
    watch: {
      value: _.debounce(function(newValue) {
        this.loading = true;
        this.loadArticles(newValue)
      }, 500)
    },
    methods: {
      generateKey(){
        return (Math.random() + 1).toString(36).substring(2);
      },
      async loadArticles(query = null) {
        let url = 'https://sptsn.ru/api/articles'
        // let url = 'http://localhost:8080/articles'
        if (query) {
          url += `?q=${query}`
        }
        const result = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type',
              "Access-Control-Allow-Methods": "OPTIONS"
            },
          })
          .then(res => res.json())
          .catch(err => this.error = err);
        this.articles = result.results;
        this.total = result.total;
        this.loading = false;
      },
    },
  }
</script>

<style>
.hlt1 {
  font-weight: 700;
  color: rgb(236 72 153)
}
</style>