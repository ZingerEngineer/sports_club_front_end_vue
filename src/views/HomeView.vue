<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="welcome-card-wrapper bg-lime-500 h-96 w-full flex flex-row">
      <div class="left-side-title w-2/6">
        <h1 class="text-4xl text-white font-bold">
          Welcome to our sports club!
        </h1>
        <p class="font-semibold text-white">Together we succeed</p>
      </div>
      <div class="w-4/6">
        <img
          class="right-side-image"
          src="@/assets/landing-page-bg.jpg"
          alt="landing-page-background"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue' // @ is an alias to /src
</script>

<style scoped>
.landing-page-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
