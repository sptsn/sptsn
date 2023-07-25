<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4">
        <template v-for="item in items">
          <a
            class="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            :href="item.href"
          >
            <span class="sr-only">{{ item.title }}</span>
            <img class="w-8 h-8" :src="item.src" />
          </a>
        </template>
      </div>

      <div class="flex mb-6 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <a href="/">{{ siteMetaInfo.author }}'s blog</a>
      </div>

      <a href="https://www.buymeacoffee.com/sptsn" target="_blank">
        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 217px !important"/>
      </a>
    </div>
  </footer>
</template>

<script>
  import siteMetaInfo from "@/data/sitemetainfo";

  export default {
    data() {
      return {
        siteMetaInfo,
        items: [
          {
            href: siteMetaInfo.github,
            title: 'github',
            src: '/github.png',
          },
          {
            href: siteMetaInfo.linkedin,
            title: 'linkedin',
            src: '/linkedin.png'
          },
          {
            href: `mailto:${siteMetaInfo.email}`,
            title: 'email',
            src: '/email.png'
          },
          {
            href: siteMetaInfo.instagram,
            title: 'instagram',
            src: '/instagram.png'
          },
          {
            href: siteMetaInfo.telegram,
            title: 'telegram',
            src: '/telegram.png'
          },
          {
            href: siteMetaInfo.vk,
            title: 'vk',
            src: '/vk.png'
          },
        ]
      };
    }
  }
</script>