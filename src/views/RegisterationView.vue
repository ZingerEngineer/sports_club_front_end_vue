<template>
  <div class="registeration-wrapper flex flex-row items-center justify-center">
    <form onsubmit="handleSubmit">
      <InputComponent
        label="First name"
        name="firstNameInput"
        type="text"
        placeholder="John"
      />
      <InputComponent
        label="Last name"
        name="lastNameInput"
        type="text"
        placeholder="Doe"
      />
      <InputComponent
        label="Email"
        name="emailInput"
        type="text"
        placeholder="johndoe@example.com"
      />
      <InputComponent
        label="Phone"
        name="phoneNumberInput"
        type="text"
        placeholder="phone number..."
      />
      <InputComponent
        label="Password"
        name="passwordInput"
        type="password"
        placeholder="..."
      />
      <InputComponent
        label="Confirm password"
        name="confirmPasswordInput"
        type="password"
        placeholder="..."
      />
      <InputComponent
        label="Phone"
        name="phoneInput"
        type="text"
        placeholder="phone number..."
      />

      <label
        for="gender"
        class="sr-only"
        >Gender</label
      >
      <select
        placeholder="select"
        id="gender"
        name="gender"
        class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      >
        <option>Male</option>
        <option>Female</option>
      </select>
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
