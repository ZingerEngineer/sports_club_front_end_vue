<template>
  <div
    class="home-wrapper w-full h-full flex flex-col items-center justify-center"
  >
    <ButtonComponent
      class=""
      title="Sign in with google"
      :icon="['fab', 'google']"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    ButtonComponent
  }
})
</script>
