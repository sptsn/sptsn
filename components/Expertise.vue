<template>
  <div class="mt-8">
    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white" >
      My skills:
    </h3>
    <div class="mt-2">
      <ul class="flex flex-wrap gap-3 items-center">
        <li class="flex items-center" v-for="item in liItems">
          <img class="h-10 w-10" :src=item />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  const items = ['ruby.svg', 'rails.svg', 'postgresql.svg', 'sql.svg', 'vuejs.svg', 'nuxt.svg', 'js.svg', 'docker.svg', 'kubernetes.svg', 'git.svg', 'graphql.svg', 'nginx.svg'];

  export default {
    data() {
      return {
        liItems: items.map(name => `/devicon/${name}?inline`)
      };
    },
  }
</script>