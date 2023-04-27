<script lang="ts" setup>
definePageMeta({
  layout: "marketing"
})

const outline = [
  {
    title: "Introduction",
    children: [
      {
        title: "Setting up your computer"
      },
      {
        title: "Starting a new Nuxt project"
      },
      {
        title: "Starting a Nuxt project from a template"
      },
      {
        title: "nuxi command deep dive"
      },
      {
        title: "Auto imports"
      },
      {
        title: "Runtime Config and .env"
      }
    ]
  },
  {
    title: "Architecting your app",
    children: [
      {
        title: "nuxt.config.ts"
      },
      {
        title: "Rendering modes"
      },
      {
        title: "Route-based rendering modes"
      },
      {
        title: "Project structure"
      },
    ]
  },
  {
    title: "app.vue / component structures",
    children: [
      {
        title: "Single page use-cases"
      },
      {
        title: "A note on vue file structure"
      },
      {
        title: "The Nuxt <script> tag and its forms"
      }
    ]
  },
  {
    title: "Project - your first Nuxt landing page",
    children: [
      {
        title: "Setting up for a static landing page"
      },
      {
        title: "Intro to modules - adding your first module"
      },
      {
        title: "Building the hero section"
      },
      {
        title: "Building the features section"
      },
      {
        title: "Building a testimonials section"
      },
      {
        title: "Building a contact section"
      },
      {
        title: "Simple deployment with Vercel"
      }
    ]
  },
  {
    title: "Lifecycle of an app",
    children: [
      {
        title: "Introduction"
      },
      {
        title: "using onMounted for client-side work"
      },
    ]
  },
  {
    title: "Reactivity and data modelling",
    children: [
      {
        title: "Reactive data"
      },
      {
        title: "Looping data"
      },
      {
        title: "Binding data to inputs"
      },
      {
        title: "Interactive challenge - updating the contact form"
      },
      {
        title: "Intro to composables - global state"
      },
      {
        title: "3rd party state library - Pinia"
      },
      {
        title: "Watchers - watch and watchEffect"
      },
      {
        title: "Props - data for components"
      },
      {
        title: "Events - communicating data from components to parents"
      },
      {
        title: "Slots - making components customizable"
      }
    ]
  },
  {
    title: "Requests to the server",
    children: [
      {
        title: "A note on rendering modes and server availability"
      },
      {
        title: "Creating server endpoints"
      },
      {
        title: "Nuxt event handlers"
      },
      {
        title: "Must know functions to use in event handlers"
      },
      {
        title: "Creating server request contexts"
      },
      {
        title: "Validating user supplied data with Zod"
      },
      {
        title: "intro to useFetch, $fetch"
      },
      {
        title: "Handling errors from the server"
      },
      {
        title: "Project 1 update - sending contact form data with NodeMailer"
      },
    ]
  },
  {
    title: "Data fetching",
    children: [
      {
        title: "useAsyncData, useLazyAsyncData composables"
      },
      {
        title: "useFetch, useLazyFetch composables"
      },
      {
        title: "Optimizing data fetching with picks and transforms"
      },
      {
        title: "Handling the UI for lazy fetching and pending states"
      },
      {
        title: "Handling fetching, async process errors"
      },
      {
        title: "Triggering refetches"
      }
    ]
  },
  {
    title: "Middlewares in Nuxt",
    children: [
      {
        title: "Writing Nuxt router middlewares",
      },
      {
        title: "Using Nuxt router middlewares"
      },
      {
        title: "Writing Nuxt server middlewares"
      },
      {
        title: "Using server middlewares & best-practices"
      }
    ]
  },
  {
    title: "Project 2A - A basic CRUD app with fake auth",
    children: [
      {
        title: "Getting started"
      },
      {
        title: "Building the User entity on the server"
      },
      {
        title: "Building the Post entity on the server"
      },
      {
        title: "Adding the REST routes for create, read, update and deleting Posts"
      },
      {
        title: "Adding a middleware with fake authentication",
      },
      {
        title: "Testing the server endpoints"
      },
      {
        title: "Fake login page"
      },
      {
        title: "Post list page"
      },
      {
        title: "Single Post page"
      },
      {
        title: "Post add page"
      },
      {
        title: "Post edit page"
      },
      {
        title: "Nuxt client middleware to check auth"
      },
      {
        title: "Updating server middleware to read request headers"
      }
    ]
  },
  {
    title: "Nuxt plugins",
    children: [
      {
        title: "Introduction, structure and syntax"
      },
      {
        title: "Using Vue components / libraries built by others"
      },
      {
        title: "The <ClientOnly> component"
      },
      {
        title: "Adding app-wide functionalith with 'provide'"
      },
      {
        title: "Interactive example - a date formatter"
      },
    ]
  },
  {
    title: "A deeper look into composables",
    children: [
      {
        title: "Writing and using composables"
      },
      {
        title: "Building a Alert component with a composable"
      },
      {
        title: "Interactive example - automatically hide the alert"
      }
    ]
  },
  {
    title: "Project 2B - Adding GitHub auth to our Posts app",
    children: [
      {
        title: "Installing required dependencies"
      },
      {
        title: "Encapsulating user logic in a composable"
      },
      {
        title: "Building the sign in flow"
      },
      {
        title: "Building the redirect endpoint"
      },
      {
        title: "Updating middlewares to use tokens"
      },
      {
        title: "Interactive example - middleware to redirect already authenticated users from login page"
      }
    ]
  },
  {
    title: "Data persistence",
    children: [
      {
        title: "Introduction, why Sqlite?"
      },
      {
        title: "Setting up Prisma"
      },
      {
        title: "Adding Prisma schemas"
      },
      {
        title: "Running migrations"
      },
      {
        title: "Generating the client"
      },
      {
        title: "Using the client, safely"
      },
      {
        title: "Updating Project 2 Post and User entities"
      },
      {
        title: "Notes on databases with Serverless"
      }
    ]
  },
  {
    title: "Project 3 - Simple chat application with Firebase",
    children: [
      {
        title: "What is Firebase? Why are we using it?"
      },
      {
        title: "Project setup - Nuxt"
      },
      {
        title: "Project setup - Firebase"
      },
      {
        title: "Building the chat interface"
      },
      {
        title: "Using Firebase auth to identify users"
      },
      {
        title: "Firestore query to fetch messages"
      },
      {
        title: "Firestore query to write messages"
      },
      {
        title: "Making the app real-time"
      },
      {
        title: "A note on securing the app"
      },
      {
        title: "How to deploy Nuxt to Firebase"
      }
    ]
  },
  {
    title: "Preparing your app for production",
    children: [
      {
        title: "Self-hosted solutions with PM2"
      },
      {
        title: "Optimizing for Firebase"
      },
      {
        title: "Image optimizations"
      },
      {
        title: "Font optimizations for CLS"
      },
      {
        title: "Scripts and CSS"
      }
    ]
  },
  {
    title: "Advanced topic - Modules",
    children: [
      {
        title: "Extending Nuxt apps vs. modules"
      },
      {
        title: "Creating modules with nuxi"
      },
      {
        title: "Defining options"
      },
      {
        title: "Adding components"
      },
      {
        title: "Hooking into the build"
      },
      {
        title: "Adding plugins"
      },
      {
        title: "Injecting composables"
      },
      {
        title: "Generating types"
      },
      {
        title: "Adding server routes"
      },
      {
        title: "Adding files to Nitro bundle"
      },
      {
        title: "Project 4 - Your first Nuxt module - Logger"
      },
    ]
  },
  {
    title: "And much more..."
  }
]
</script>
<template>
  <div class="max-w-6xl mx-auto px-4">
    <section class="mt-10">
      <h1 class="text-5xl md:text-7xl font-bold">
        <span class="text-colorful">Learn Nuxt</span> course outline
      </h1>
    </section>
    <section class="mt-10">
      <ul class="text-3xl font-bold">
        <li
          v-for="chapter in outline"
          :key="chapter.title"
          class="my-10"
        >
          {{ chapter.title }}
          <ul class="text-xl font-normal">
            <li
              v-for="section in chapter.children"
              :key="section.title"
              class="my-3"
            >
              {{ section.title }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
