<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Projects
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've built or been a part of.
      </p>
    </div>

    <multiselect
      v-model="value"
      :options="techTags"
      :multiple="true"
      :hideSelected="true"
      :selectLabel="''"
    />

    <main class="relative mb-auto">
      <div class="container py-12">
        <div class="flex flex-wrap -m-4">
          <ProjectCard :addTag="addTag" v-for="(item, index) in computedProjectsData" :item="item" :selectedTags="value" :key="index" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import projectsData from '@/data/projects';
  import Multiselect from 'vue-multiselect'

  const projectsDataInitial = projectsData.filter(x => x.draft != true)

  const techTags = projectsDataInitial
    .map(x => x.tech)
    .flat()
    .filter((currentValue, index, arr) => (arr.indexOf(currentValue) === index))

  export default {
    components: { Multiselect },
    data() {
      return {
        value: [],
        techTags,
      };
    },
    computed: {
      computedProjectsData() {
        if (this.value.length == 0) {
          return projectsDataInitial;
        }

        return projectsDataInitial.filter(project => project.tech.filter(x => this.value.includes(x)).length > 0);
      }
    },
    methods: {
      addTag(tag) {
        if (this.value.indexOf(tag) == -1) {
          this.value.push(tag)
        } else {
          this.value = this.value.filter(x => x != tag)
        }
      },
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