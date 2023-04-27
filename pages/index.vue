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

const testimonials = [
  {
    name: 'Linda',
    avatar: '/testimonials/linda.png',
    comment: 'I have been using Vue for a while and understand it pretty well, I have been looking at how to get into Nuxt. I\'m not disappointed that I chose this website, I have learned a ton.'
  },
  {
    name: 'Abel',
    avatar: '/testimonials/abel.png',
    comment: 'I recently finished a great vanilla JavaScript course and decided to make Nuxt my first framework-based skill in JS. I am not through the course yet but so far so good!'
  },
  {
    name: 'Claire',
    avatar: '/testimonials/claire.png',
    comment: 'I\'m relatively new to web development, but I am a fast learner especially if the teaching is concise. I was relieved about how fluent I could understand this content.'
  }
]
</script>

<template>
  <main>
    <div class="container mx-auto px-[18px]">
      <section class="mt-[9%] max-w-4xl mx-auto text-center">
        <h1 class="text-5xl sm:text-7xl font-bold leading-tight mb-10">
          Learn <span class="text-colorful">modern Nuxt</span> from beginner to advanced
        </h1>
        <p class=" leading-normal text-lg font-medium mb-10">
          This course / reference dives deep into Nuxt, starting at the beginning. 
          It is continuously updated and jam packed with theory, tutorials, 
          examples and interactive projects. Whether you read it front to back or 
          just use it as a reference, it's sure to improve your Nuxt skills.
        </p>
        <button
          class="btn-colorful mx-auto"
          @click="$router.push('/start')"
        >
          Start learning &rarr;
        </button>
      </section>

      <section class="my-24 max-w-7xl grid gap-10 grid-cols-1 lg:grid-cols-3 px-10">
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
      </section>

      <section class="my-20">
        <h1 class="text-3xl md:text-5xl font-bold text-center">
          What others are saying
        </h1>

        <div class="w-full flex items-center justify-center flex-wrap gap-14 my-14">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="my-5"
          >
            <div class="flex items-center justify-center gap-5 w-80 max-h-60 overflow-hidden">
              <img
                width="64"
                height="64"
                :src="testimonial.avatar"
                :alt="testimonial.name + '\'s avatar'"
                class="rounded-full"
              >
              <p>
                {{ testimonial.comment }}
                - <span class="font-bold">{{ testimonial.name }}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-14 mb-20 text-center">
        <p>
          Are you busy with the course and wouldn't mind taking a second to leave a testimonial? <a
            class="text-[var(--gradient-color-1)] und
          "
            href="#"
          >Follow this link</a> to do so.
        </p>
      </section>

      <section class="my-10 mb-16">
        <h1 class="text-5xl md:text-7xl text-center font-bold">
          Get started <span class="text-colorful">today</span>
        </h1>
        <button
          class="btn-colorful mx-auto mt-10"
          @click="$router.push('/start')"
        >
          Start learning &rarr;
        </button>
      </section>
    </div>
  </main>
</template>
