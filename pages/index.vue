<script lang="ts" setup>
definePageMeta({
  layout: 'marketing'
})

const features = [
  {
    title: '⚡️ Interactive challenges',
    body: 'Throughout the course you will get intermittent StackBlitz projects with assignments to complete to test your knowledge. This keeps you engaged and solidifies your learning.'
  },
  {
    title: '🛠️ 5+ full project builds',
    body: 'After getting through the basic theory, there are multiple full project builds using various technologies, Nuxt modules and cover a wide scope of application features.'
  },
  {
    title: '🕥 Lifetime updates',
    body: 'The Learn Nuxt project will be maintained indefinitely and continuously updated with fresh information. This may be new Nuxt features, more advanced topics or another project.'
  }
];
</script>

<template>
  <main>
    <div class="container mx-auto px-[18px]">
      <section class="mt-[9%] max-w-4xl mx-auto text-center">
        <!-- <h1 class="absolute text-5xl sm:text-7xl font-bold font-['Roboto_Condensed_override'] leading-tight mb-10">
          Learn <span class="text-colorful">modern Nuxt</span> from beginner to advanced
        </h1> -->
        <h1 class=" text-5xl sm:text-7xl font-bold leading-tight mb-10">
          Learn <span class="text-colorful">modern Nuxt</span> from beginner to advanced
        </h1>
        <p class=" leading-normal text-lg font-medium mb-10">
          This course / reference dives deep into Nuxt, starting at the beginning.
          It is continuously updated and jam packed with theory, tutorials,
          examples and interactive projects. Whether you read it front to back or
          just use it as a reference, it's sure to improve your Nuxt skills.
        </p>
        <nuxt-link
          class="max-w-xs btn-colorful mx-auto mb-5"
          @click="$router.push('/free/introduction/setting-up-your-computer')"
        >
          Start learning &rarr;
        </nuxt-link>
      </section>

      <section class="my-28 max-w-7xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3 px-10">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="border-2 border-[var(--gradient-color-2)] rounded-lg p-10 hover:border-[var(--gradient-color-1)] transition-colors cursor-pointer duration-700"
        >
          <h1 class="mb-8 text-xl font-bold">
            {{ feature.title }}
          </h1>
          <p>
            {{ feature.body }}
          </p>
        </div>

        <p>
          View the <nuxt-link
            class="text-[var(--gradient-color-1)]"
            to="/outline"
          >
            course outline &rarr;
          </nuxt-link>
        </p>
      </section>

      <section class="my-20">
        <h1 class="text-3xl md:text-5xl font-bold text-center">
          Free and Open 
        </h1>

        <p class="mt-10 font-medium text-center tracking-wider">
          Since November  12, 2023. Learn Nuxt is a free and open source site.
          Making it possible for Nuxt'ers all around the world to share valuable content with a simple GitHub Pull Request.
          This decision was made because Nuxt already provides such a great amount of information through their own work, 
          making this a paid site did not feel like the way to go.
        </p>

        <div class="text-center mt-10">
          <nuxt-link
            to="https://github.com/Eckhardt-D/learnnuxt.git"
            class="mx-auto"
          >
            GitHub Repo &rarr;
          </nuxt-link>
        </div>

      </section>

      <section class="my-10 mb-16">
        <h1 class="text-5xl md:text-7xl text-center font-bold">
          Get started <span class="text-colorful">today</span>
        </h1>
        <button
          class="btn-colorful mx-auto mt-10"
          @click="$router.push('/free/introduction/setting-up-your-computer')"
        >
          Start learning &rarr;
        </button>
      </section>
    </div>
  </main>
</template>
