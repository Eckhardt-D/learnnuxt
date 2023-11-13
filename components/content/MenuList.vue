<script lang="ts" setup>
withDefaults(defineProps<{
  navigation: Array<any>,
  depth?: number,
}>(), {
  depth: 1
})
</script>

<template>
  <ul>
    <li
      v-for="link of navigation"
      :key="link._path"
      class="my-2 text-md"
    >
      <NuxtLink
        :to="depth === 1 ? (link.children?.length ? link.children[0]._path : '#') : link._path"
        class="hover:text-[var(--gradient-color-1)]"
        :class="depth > 1 && $route.path === link._path && 'text-[var(--gradient-color-1)]'"
      >
        {{ link.title }}
      </NuxtLink>

      
      <MenuList
        v-if="link.children?.length"
        :style="{ marginLeft: `${depth * 10}px` }"
        :depth="depth + 1"
        :navigation="link.children"
      />
    </li>
  </ul>
</template>
