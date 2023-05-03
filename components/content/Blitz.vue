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
        height: 750,
        clickToLoad: true,
      }
    );
  }
})
</script>

<template>
  <div class="embed">
    <div
      ref="embed"
      class="embed"
    />
  </div>
</template>

<style scoped>
.embed {
  width: 100%;
  height: 750px;
  background-color: rgba(255,255,255,0.1);
  background-blend-mode: difference;
  border-radius: 1%;
}
</style>