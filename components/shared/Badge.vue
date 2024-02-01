<template>
  <span :class=klass>
    {{ value }}
  </span>
</template>

<script>
  export default{
    props: ['value', 'color',],
    data() {
      return {
        klass: `bg-${this.color}-100 text-${this.color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${this.color}-900 dark:text-${this.color}-300`
      }
    },
  }
</script>