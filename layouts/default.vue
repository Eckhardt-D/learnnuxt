<script lang="ts" setup>
import { CircleStackIcon } from "@heroicons/vue/24/outline/index"
const route = useRoute()
const _q = route.path.startsWith('learn') ? '/learn' : '/free';
const query = queryContent(_q)
const tocOpen = ref(false);
useSeo();
</script>

<template>
  <main>
    <Navigation />
    <div class="md:flex">

      <aside class="hidden md:block w-[270px] flex-shrink-0 p-5">
        <h2 class="text-xl font-bold mb-8">
          Learn Nuxt
        </h2>
        <ContentNavigation
          v-slot="{ navigation }"
          :query="query"
        >
          <MenuList
            :navigation="navigation?.[0]?.children"
          />
        </ContentNavigation>

        <section
          v-if="$route.path.startsWith('/free')"
          class="text-xs mt-20"
        >
          Want more? <nuxt-link
            to="/pricing"
            class="text-[var(--gradient-color-1)]"
          >
            Subscribe &rarr;
          </nuxt-link>
        </section>
      </aside>

      <aside class="md:hidden w-[300px] flex-shrink-0 p-5">
        <button
          class="flex gap-2 items-center"
          @click="tocOpen = !tocOpen"
        >
          Table of contents
          <CircleStackIcon class="w-4 h-4" />
        </button>

        <div
          v-if="tocOpen"
          class="mt-5"
        >
          <ContentNavigation
            v-slot="{ navigation }"
            :query="query"
          >
            <MenuList
              :navigation="navigation?.[0]?.children"
              @click="tocOpen = false"
            />
          </ContentNavigation>

          <section
            v-if="$route.path.startsWith('/free')"
            class="text-xs mt-10"
          >
            Want more? <nuxt-link
              to="/pricing"
              class="text-[var(--gradient-color-1)]"
            >
              Subscribe &rarr;
            </nuxt-link>
          </section>

        </div>

      </aside>
      
      <article class="flex-grow my-5 px-[15px] max-w-4xl  prose lg:prose-xl prose-invert mb-20  overflow-hidden">
        <slot />
      </article>
    </div>
  </main>
</template>

<style>
body {
  background-color: #00131c;
  color: #fff;
  background-image: url(/image.webp);
  background-repeat: repeat-y;
  background-position: 50% 0;
}
</style>