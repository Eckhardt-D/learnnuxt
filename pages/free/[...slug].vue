<script lang="ts" setup>
const route = useRoute();

const { data, pending, error } = await useLazyAsyncData(async () => {
  return queryContent(useRoute().path).findOne();
});

const { data: paginationData, refresh } = await useLazyAsyncData(async () => {
  const res = await queryContent('/free')
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
      v-else
      :value="data"
    >
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>

    <div
      v-if="!pending && paginationData && paginationData.length > 1"
      class="flex align-center justify-between gap-5 mt-20"
    >
      <nuxt-link
        v-if="paginationData[0]"
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
        v-if="paginationData[1]"
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
      v-if="!pending"
      class="mx-auto text-center my-20"
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
