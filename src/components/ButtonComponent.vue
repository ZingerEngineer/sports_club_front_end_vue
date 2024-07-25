<template>
  <div
    class="button-wrapper px-2 py-3 flex flex-row items-center bg-purple-500"
  >
    <font-awesome-icon
      class="text-slate-800 m-2"
      :icon="['fab', 'google']"
    />
    <div class="title-div text-slate-800 font-bold">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonCompontent',
  props: {
    title: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
