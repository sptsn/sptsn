<template>
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <template v-for="item in timeLineData">
        <li class="mb-10 ml-6">
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" >
            <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src="/company.png" />
          </span>

          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white" >
            {{ item.title }}

            <span v-if="item.currenly" class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Currently
            </span>
          </h3>

          <time class="block text-gray-400 font-medium mb-2">
            {{ item.position }}
          </time>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {{ item.time }}
          </time>

          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {{ item.description }}
          </p>
        </li>
      </template>
    </ol>
  </div>
</template>

<script>
import timeLineData from '@/data/timeline';

export default {
  data() {
    return {
      timeLineData,
    };
  }
};
</script>

<style></style>
