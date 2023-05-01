<script lang="ts" setup>
const route = useRoute();
const showPagination = ref(false);

const { data, pending, refresh, error } = await useAsyncData(async () => {
  return await queryContent(useRoute().path).findOne();
});

useSeo({
  title: data.value?.title,
  description: data.value?.description
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
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
      })
    }
  ]
})

const { data: paginationData, pending: paginationPending, refresh: refreshPagination } = await useAsyncData(async () => {
  return await queryContent('/free')
    .only(['_path', 'title'])
    .findSurround(route.path)
});

watch(() => data.value, () => {
  setTimeout(() => {
    showPagination.value = true
  }, 500)
})

onMounted(() => {
  watch(route, () => {
    if (data.value?._path !== useRoute().path) {
      showPagination.value = false;
      refresh();
      refreshPagination();
    }
  }, {deep: true, immediate: true})
})
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
        v-if="showPagination && !pending && !paginationPending && data && paginationData && paginationData.length >= 1"
        class="flex align-center justify-between gap-5 mt-20"
      >
        <nuxt-link
          v-if="paginationData?.[0]"
          :to="paginationData[0]._path"
          class="border p-3 px-4 min-w-[150px] rounded-lg no-underline"
        >
          &larr; previous
          <br>
          <span class="text-slate-600">
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
          <span class="text-slate-600">
            {{ paginationData[1].title }}
          </span>
        </nuxt-link>
      </div>

      <div
        v-if="showPagination && !pending && !paginationPending && data && paginationData && paginationData.length >= 1"
        class="mx-auto text-center my-20"
      >
        <p>✨ Thanks for checking out the free stuff! Browse through the <nuxt-link
          to="/outline"
          class="text-[var(--gradient-color-1)]"
        >
          outline
        </nuxt-link> to see if there might be something that interests you enough to sign up.</p>
      </div>
    </ContentRenderer>

    
  </main>
</template>
