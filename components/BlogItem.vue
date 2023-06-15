<template>
  <article class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none">
    <span class="mb-4">
      <h3 class="mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: source.slug } }">
          {{ source.title }}
        </NuxtLink>
      </h3>
      <time class="bg-indigo-500 text-white py-1 px-2 rounded-md" datetime="2022-02-24T12:00:00.000Z">
        {{ formatDate(source.date) }}
      </time>
    </span>

    <div class="mb-6 prose prose-slate dark:prose-dark">
      <template v-if="this.highlight">
        <pre class="language-html" v-html="highlight.content[0]"></pre>
      </template>

      <p v-else>
        {{ source.description }}
      </p>
    </div>
  </article>
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