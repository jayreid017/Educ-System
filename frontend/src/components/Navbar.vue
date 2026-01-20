<template>
  <div>
    <!-- Navbar with BuildFlow Logo and Close Button -->
    <nav class="fixed top-4 sm:top-6 left-0 right-0 z-50 flex items-center justify-between p-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
      <!-- BuildFlow Logo -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-sm bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/40">
          <span class="text-black font-extrabold text-xs tracking-widest">BF</span>
        </div>
        <div class="text-white">
          <div class="font-semibold text-sm tracking-[0.25em] uppercase">BUILDFLOW</div>
          <div class="text-[0.65rem] tracking-[0.3em] text-gray-300 uppercase">LEARNING PLATFORM</div>
        </div>
      </div>

      <!-- Close Button (visible when menu is open) -->
      <button
        v-if="isOpen"
        @click="toggleMenu"
        class="text-white text-sm tracking-widest uppercase hover:text-gray-400 transition-colors flex items-center gap-2"
        aria-label="Close menu"
      >
        Close
        <svg
          class="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 6L18 18M18 6L6 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </nav>

    <!-- Full-Screen Overlay -->
    <div
      :class="[
        'fixed top-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-700 ease-in-out z-30',
        isOpen ? 'w-screen h-screen opacity-100 pointer-events-auto' : 'w-0 h-0 opacity-0 pointer-events-none'
      ]"
      style="transform-origin: top right"
    >
      <!-- Menu Items - Left Aligned -->
      <div class="w-full h-full flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-44 gap-4">
        <router-link
          v-for="(item, index) in menuItems"
          :key="item.name"
          :to="item.to"
          @click="toggleMenu"
          :class="[
            'text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide transition-all duration-500 hover:text-gray-400',
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          ]"
          :style="{ transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms' }"
        >
          {{ item.name }}
        </router-link>
      </div>

      <!-- Bottom Quick Links -->
      <div
        :class="[
          'absolute bottom-8 left-6 sm:left-10 md:left-16 lg:left-24 xl:left-32 2xl:left-44 flex items-center gap-4 text-white text-xs tracking-widest transition-all duration-500',
          isOpen ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
        ]"
        :style="{ transitionDelay: isOpen ? '600ms' : '0ms' }"
      >
        <span>Quick Links</span>
        <span>›</span>
        <a href="#" class="hover:text-gray-400 transition-colors">A to Z index</a>
        <a href="#" class="hover:text-gray-400 transition-colors">Find a person</a>
        <a href="#" class="hover:text-gray-400 transition-colors">Events</a>
        <a href="#" class="hover:text-gray-400 transition-colors">Media Relations</a>
        <a href="#" class="hover:text-gray-400 transition-colors">Alumni</a>
        <a href="#" class="hover:text-gray-400 transition-colors">Give Now</a>
        <a href="#" class="hover:text-gray-400 transition-colors">Emergency</a>
      </div>
    </div>

    <!-- Hamburger Button (visible when menu is closed) -->
    <button
      v-if="!isOpen"
      @click="toggleMenu"
      class="fixed top-4 sm:top-6 right-6 sm:right-10 md:right-16 lg:right-24 xl:right-32 2xl:right-44 z-50 w-14 h-14 inline-flex items-center justify-center rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-lg transition-colors duration-200 focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg
        class="w-10 h-10 text-white"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const menuItems = [
  { name: 'Academics', to: '/academics' },
  { name: 'Campus', to: '/campus' },
  { name: 'In Focus', to: '/focus' },
  { name: 'Visit', to: '/visit' },
  { name: 'About', to: '/about' },
  { name: 'News', to: '/news' }
];
</script>