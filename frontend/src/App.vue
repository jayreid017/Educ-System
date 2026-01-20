<template>
  <div class="bg-gray-800 min-h-screen">
    <Navbar />
    <div class="bg-gray-800">
      <div :class="containerClass">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'

const route = useRoute()

// Apply global page margin/padding unless a route opts out (e.g., full-bleed hero)
const containerClass = computed(() =>
  route.meta.padded === false ? '' : 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
)
</script>