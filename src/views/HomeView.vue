<template>
  <div class="home">
    <ButtonComponent
      class=""
      title="Sign in with google"
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

