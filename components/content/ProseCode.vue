<script setup lang="ts">
import { DocumentDuplicateIcon } from "@heroicons/vue/24/solid"
withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: () => [] }
)
</script>

<template>
  <div class="leading-normal bg-slate-900 border border-opacity-10 py-5 px-7 rounded-lg shadow not-prose min-w-fit max-w-4xl">
    <div class="flex items-center justify-between">
      <p class="text-gray-400 font-bold">
        {{ filename || '' }}
      </p>
      <DocumentDuplicateIcon class="text-gray-400 w-6 h-5" />
    </div>
    <hr class="border-gray-800 my-5">
    <div class="py-3 text-sm leading-loose">

      <slot />
    </div>
  </div>
</template>
