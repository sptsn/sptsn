<template>
  <nav class="mx-auto sticky top-0 z-50">
    <div class="bg-white flex flex-wrap items-center justify-center px-10 overflow-hidden border-b border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2">
      <ul class="flex justify-center list-reset m-0 w-full md:w-auto">
        <li v-for="item in navLinks" :key="item.path">
          <NuxtLink :to="item.path" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import menu from "../data/menu";

  export default {
    data() {
      return {
        navLinks: menu,
      };
    }
  }
</script>

<style>
.router-link-active {
  @apply text-indigo-600;
}
</style>