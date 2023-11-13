<script lang="ts" setup>
import {withoutTrailingSlash} from 'ufo'
const route = useRoute();

const { data, pending, error } = await useAsyncData(route.path, async () => {
  return queryContent(route.path).findOne();
});

useSeo({
  title: data.value?.title,
  description: data.value?.description
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.value?.title || 'Learn Nuxt Course',
        "image": [
          "https://learnnuxt.co/images/social_learn_nuxt-min.webp",
        ],
        "author": [{
            "@type": "Person",
            "name": "Eckhardt Dreyer",
            "url": "https://eckhardt.dreyer.com.na"
          }]
      }),
    }
  ]
})

const { data: paginationData, pending: paginationPending } = await useAsyncData(`${route.path}-surround`, async () => {
  return await queryContent('/free')
    .only(['_path', 'title'])
    .findSurround(withoutTrailingSlash(route.path))
});
</script>

<template>
  <main>
    <div
      v-if="pending"
      class="text-lg text-center"
    >
      Loading...
    </div>
    <div v-else-if="error">
      Error 🛑 - {{ error.message }}
    </div>
    <ContentRenderer
      v-else-if="data"
      :key="data._id"
      :value="data"
    >
      <ContentRendererMarkdown :value="data" />

      <div
        v-if="!pending && !paginationPending && data && paginationData && paginationData.length >= 1"
        class="flex align-center justify-between gap-5 mt-20"
      >
        <nuxt-link
          v-if="paginationData?.[0]"
          :to="paginationData[0]._path"
          class="border p-3 px-4 min-w-[150px] rounded-lg no-underline"
        >
          &larr; previous
          <br>
          <span class="text-slate-400 text-sm">
            {{ paginationData[0].title }}
          </span>
        </nuxt-link>
          
        <nuxt-link
          v-if="paginationData?.[1]"
          :to="paginationData[1]._path"
          class="border p-3 px-4 min-w-[150px] rounded-lg no-underline ml-auto"
        >
          Next &rarr;
          <br>
          <span class="text-slate-400 text-sm">
            {{ paginationData[1].title }}
          </span>
        </nuxt-link>
      </div>
    </ContentRenderer>

    
  </main>
</template>
