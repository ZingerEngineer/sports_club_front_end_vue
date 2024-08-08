<template>
  <div
    class="registeration-wrapper h-full flex flex-row items-center justify-center"
  >
    <div
      class="lhs-form-wrapper h-full bg-slate-500/20 flex flex-col items-center justify-center w-[50%]"
    >
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
          class="mt-2 min-w-10 min-h-8 rounded-md border-1 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </form>
    </div>
    <div
      class="rhs-third-parties-wrapper w-[50%] flex flex-col items-center justify-center"
    >
      <ButtonComponent
        type="anchor"
        :href="getGoogleURL()"
        class="min-w-72"
        title="Sign in with google"
        :icon="['fab', 'google']"
      />
      <ButtonComponent
        class="min-w-72"
        type="anchor"
        :href="getFaceBookURL()"
        title="Sign in with facebook"
        :icon="['fab', 'facebook']"
      />
      <ButtonComponent
        class="min-w-72"
        type="anchor"
        :href="getGitHubURL()"
        title="Sign in with github"
        :icon="['fab', 'github']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue' // @ is an alias to /src
import InputComponent from '@/components/InputComponent.vue'
import { getGoogleURL } from '@/services/googleApis'
import { getFaceBookURL } from '@/services/facebookApi'
import { getGitHubURL } from '@/services/githubApi'
</script>
