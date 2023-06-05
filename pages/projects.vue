<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Projects
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've build or been a part of.
      </p>
    </div>

    <multiselect
      @input="onSelection"
      v-model="value"
      :options="techTags"
      :multiple="true"
      :hideSelected="true"
      :selectLabel="''"
    />

    <main class="relative mb-auto">
      <div class="container py-12">
        <div class="flex flex-wrap -m-4">
          <ProjectCard v-for="(item, index) in projectsData" :item="item" :selectedTags="value" :key="index" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import projectsDataInitial from '@/data/projects';
  import Multiselect from 'vue-multiselect'

  const techTags = projectsDataInitial
    .map(x => x.tech)
    .flat()
    .filter((currentValue, index, arr) => (arr.indexOf(currentValue) === index))

  export default {
    components: { Multiselect },
    data() {
      return {
        value: [],
        projectsData: projectsDataInitial,
        techTags,
      };
    },
    methods: {
      onSelection() {
        if (this.value.length == 0) {
          this.projectsData = projectsDataInitial;
          return;
        }

        this.projectsData = projectsDataInitial.filter(project => project.tech.filter(x => this.value.includes(x)).length > 0);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
[type='text']:focus {
  --tw-ring-color: none;
}
.multiselect__option--highlight {
  color: rgba(30, 64, 175, 1);
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity));
  font-weight: 500;
}
.multiselect__tag {
  color: white;
  background-color: rgba(96, 165, 250, 1);;
}
.multiselect__tag-icon:hover {
  background-color: #F98080;
}
.multiselect__content-wrapper {
  box-shadow: 0px 1px 2px #0000006b;
}
</style>