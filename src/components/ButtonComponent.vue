<template>
  <div
    class="button-wrapper max-w-60 px-4 py-2 flex flex-row items-center justify-center rounded-md border-solid border-2 border-purple-200 bg-purple-500"
  >
    <font-awesome-icon
      class="text-white m-2"
      :icon="icon"
    />
    <div class="title-div text-white font-bold">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonCompontent',
  props: {
    title: String,
    icon: {
      type: Array
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
