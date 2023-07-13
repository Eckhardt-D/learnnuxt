<script lang="ts" setup>
const { messages } = useSnackbar()
</script>

<template>
  <div class="w-xl fixed bottom-5 right-5">
    <div
      v-for="message in messages"
      :key="message.content"
      class="mb-3 p-5 px-7 bg-white rounded shadow"
      :class="(message.type === 'error' && 'text-red-500') || 'text-green-500'"
    >
      {{ message.content }}
    </div>
  </div>
</template>