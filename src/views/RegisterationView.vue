<template>
  <div class="registeration-wrapper flex flex-row items-center justify-center">
    <form onsubmit="handleSubmit">
      <InputComponent label="lolo" />
      <ButtonComponent
        title="lolo"
        :icon="['fab', 'google']"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue' // @ is an alias to /src
import InputComponent from '@/components/InputComponent.vue'
export default defineComponent({
  name: 'RegisterationView',
  components: {
    ButtonComponent,
    InputComponent
  }
})
</script>
