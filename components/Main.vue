<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <div class="ant-list ant-list-split css-1me4733">
          <div class="ant-spin-nested-loading css-1me4733">
            <div class="ant-spin-container">
              <ul class="ant-list-items">
                <ListItem title="@sptsn" link="https://github.com/sptsn" img="github.svg"/>
                <ListItem title="@sptsn" link="https://t.me/sptsn" img="telegram.svg"/>
                <ListItem title="@sptsn" link="https://instagram.com/sptsn" img="instagram.svg"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>