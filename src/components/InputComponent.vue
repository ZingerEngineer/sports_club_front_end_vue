<template>
  <div>
    <label
      :for="name"
      class="block text-sm font-medium leading-6 text-white"
      >{{ label }}</label
    >
    <div class="relative mt-1 rounded-md shadow-sm">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      ></div>
      <input
        :type="type"
        :name="name"
        :id="name"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputComponent',
  props: {
    label: String,
    placeholder: String,
    type: String,
    name: String
  }
})
</script>

<style scoped="true"></style>
