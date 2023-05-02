<script lang="ts" setup>
import sdk from '@stackblitz/sdk'
const embed = ref<HTMLDivElement>();

const props = defineProps<{
  repo: string;
  file: string;
}>();

onMounted(() => {
  if (embed.value) {
    sdk.embedGithubProject(
      embed.value,
      props.repo,
      {
        forceEmbedLayout: true,
        openFile: props.file,
        height: 500,
      }
    );
  }
})
</script>

<template>
  <div
    ref="embed"
    class="embed"
  />
</template>

<style scoped>
.embed {
  width: 100%;
  aspect-ratio: 4/5;
  background-color: rgba(255,255,255,0.1);
  background-blend-mode: difference;
  border-radius: 1%;
}
</style>