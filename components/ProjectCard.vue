<template>
  <div class="p-4 md:w-1/2 md" style="max-width: 544px">
    <div class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
      <div class="p-6">
        <div class="flex flex-row justify-between items-center">
          <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
            {{ this.item.title }}
          </h2>

          <div class="flex flex-row justify-between">
            <div class="mx-1">
              <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" :href="this.item.href">
                <span class="sr-only"></span>
                <img class="w-6 h-6" src="/external.png"/>
              </a>
            </div>
          </div>
        </div>

        <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
          {{ this.item.description }}
        </p>

        <div class="flex flex-row justify-between" v-if="this.item.tech1 || this.item.tech2 || this.item.tech3">
          <div class="text-gray-400 text-sm font-extralight">
            {{ this.item.tech1 }} • {{ this.item.tech2 }} • {{ this.item.tech3 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["item"],
  }
</script>