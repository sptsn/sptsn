<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8">
        <AuthorIntro />
        <Expertise />
        <TimeLine />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorCard from '../components/AuthorCard.vue';
import AuthorIntro from '../components/AuthorIntro.vue';
import Expertise from '../components/Expertise.vue';
import TimeLine from '../components/TimeLine.vue';

export default {
    name: "IndexPage",
    components: { AuthorCard, AuthorIntro, Expertise, TimeLine }
}
</script>
