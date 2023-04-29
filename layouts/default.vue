<script lang="ts" setup>
useSeo();
const route = useRoute()
const _q = route.path.startsWith('learn') ? '/learn' : '/free';
const query = queryContent(_q)

const { data, refresh } = await useLazyAsyncData(async () => {
  const res = await queryContent(_q)
    .only(['_path', 'title'])
    .findSurround(route.path)

  return res
});

watch(route, () => {
  refresh();
}, {deep: true})
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

        
        
        <div
          v-if="data && data.length > 1"
          class="flex align-center justify-between gap-5 mt-20"
        >
          <nuxt-link
            v-if="data[0]"
            :to="data[0]._path"
            class="border p-3 px-4 min-w-[150px] rounded-lg no-underline"
          >
            &larr; previous
            <br>
            <span class="text-slate-600">
              {{ data[0].title }}
            </span>
          </nuxt-link>
          
          <nuxt-link
            v-if="data[1]"
            :to="data[1]._path"
            class="border p-3 px-4 min-w-[150px] rounded-lg no-underline ml-auto"
          >
            Next &rarr;
            <br>
            <span class="text-slate-600">
              {{ data[1].title }}
            </span>
          </nuxt-link>
        </div>
      </article>
    </div>

    <div
      v-if="route.path.startsWith('/free')"
      class="w-[350px] mx-auto text-center mb-20"
    >
      <p>✨ Thanks for checking out the free stuff! Browse through the <nuxt-link
        to="/outline"
        class="text-[var(--gradient-color-1)]"
      >
        outline
      </nuxt-link> to see if there might be something that interests you enough to sign up.</p>
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