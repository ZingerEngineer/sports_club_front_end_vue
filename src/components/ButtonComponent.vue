<template>
  <div
    v-if="type === 'div'"
    class="button-wrapper m-2 px-4 py-2 flex flex-row items-center justify-center rounded-md border-solid border-2 border-purple-200 bg-purple-500 hover:bg-purple-400 transio"
  >
    <font-awesome-icon
      class="text-white m-2"
      :icon="icon"
    />
    <div class="title-div text-white font-bold">{{ title }}</div>
  </div>
  <a
    v-else-if="type === 'anchor'"
    class="button-wrapper m-2 px-4 py-2 flex flex-row items-center justify-center rounded-md border-solid border-2 border-purple-200 bg-purple-500 hover:bg-purple-400 transio"
  >
    <font-awesome-icon
      class="text-white m-2"
      :icon="icon"
    />
    <div class="title-div text-white font-bold">{{ title }}</div>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  type: String,
  icon: Array,
  title: String
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
