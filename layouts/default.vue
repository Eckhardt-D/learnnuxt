<script lang="ts" setup>
useSeo();
</script>

<template>
  <main>
    <Navigation />
    <div class="flex">

      <aside class="hidden md:block w-[270px] flex-shrink-0 p-5">
        <h2 class="text-xl font-bold mb-8">
          Learn Nuxt
        </h2>
        <ContentNavigation
          v-slot="{ navigation }"
          :query="query"
        >
          <MenuList
            :navigation="navigation[0].children"
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