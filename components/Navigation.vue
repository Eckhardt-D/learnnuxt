<script lang="ts" setup>
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline/index"
const menuOpen = ref(false);
</script>

<template>
  <header class="h-[120px] flex items-center justify-between px-[25px] sm:px-[60px]">
    <nuxt-link to="/">
      <img
        width="50"
        height="50"
        src="/icons/LearnNuxt.svg"
        alt="Learn Nuxt Icon"
      >
    </nuxt-link>
    <ul class="hidden md:flex items-center gap-10 ">
      <li v-if="$route.path !== '/'">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">
          About the author
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/outline">
          Course outline
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/pricing">
          Pricing
        </nuxt-link>
      </li>
    </ul>

    <Bars3Icon
      class="md:hidden w-6 h-6"
      @click="menuOpen = !menuOpen"
    />

    <div
      v-if="menuOpen"
      class="md:hidden bg-slate-800 fixed inset-0 z-10"
      role="mobilemenu"
    >
      <XMarkIcon
        class="w-6 h-6 absolute text-white top-12 right-6"
        @click="menuOpen = false"
      />
      <ul class="flex flex-col gap-10 items-center pt-20 p-5">
        <img
          width="50"
          height="50"
          src="/icons/LearnNuxt.svg"
          alt="Learn Nuxt Icon"
        >
        <li v-if="$route.path !== '/'">
          <nuxt-link
            to="/"
            @click="menuOpen = false"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/about"
            @click="menuOpen = false"
          >
            About the author
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/outline"
            @click="menuOpen = false"
          >
            Course outline
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/pricing"
            @click="menuOpen = false"
          >
            Pricing
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
