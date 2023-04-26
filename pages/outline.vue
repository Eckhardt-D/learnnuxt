<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
})

const outline = [
  {
    title: "Introduction",
    children: [
      {
        title: "Setting up your computer"
      },
      {
        title: "Starting a new Nuxt project"
      },
      {
        title: "Starting a Nuxt project from a template"
      },
      {
        title: "nuxi command deep dive"
      },
      {
        title: "Auto imports"
      }
    ]
  },
  {
    title: "Architecting your app",
    children: [
      {
        title: "nuxt.config.ts"
      },
      {
        title: "Rendering modes"
      },
      {
        title: "Route-based rendering modes"
      },
      {
        title: "Project structure"
      },
    ]
  },
  {
    title: "app.vue / component structures",
    children: [
      {
        title: "Single page use-cases"
      },
      {
        title: "A note on vue file structure"
      },
      {
        title: "The Nuxt <script> tag and its forms"
      }
    ]
  },
  {
    title: "Project - your first Nuxt landing page",
    children: []
  }
]
</script>
<template>
  <div class="max-w-6xl mx-auto px-4">
    <section class="mt-10">
      <h1 class="text-5xl md:text-7xl font-bold">
        <span class="text-colorful">Learn Nuxt</span> course outline
      </h1>
    </section>
    <section class="mt-10">
      <ul class="text-3xl font-bold">
        <li
          v-for="chapter in outline"
          :key="chapter.title"
          class="my-10"
        >
          {{ chapter.title }}
          <ul class="text-xl font-normal">
            <li
              v-for="section in chapter.children"
              :key="section.title"
              class="my-3"
            >
              {{ section.title }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
