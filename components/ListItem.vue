<template>
  <li class="ant-list-item">
    <div class="ant-list-item-meta">
      <div class="ant-list-item-meta-avatar">
        <span class="ant-avatar ant-avatar-circle ant-avatar-image css-1me4733">
          <img :src=img>
        </span>
      </div>
      <div class="ant-list-item-meta-content">
        <h4 class="ant-list-item-meta-title">
          <a :href="link" target="_blank">{{ title }}</a>
        </h4>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {
        type: String,
        default: '',
    },
    link: {
        type: String,
        default: '',
    },
    img: {
        type: String,
        default: '',
    }
  }
}
</script>