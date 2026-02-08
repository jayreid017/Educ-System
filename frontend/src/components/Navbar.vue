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
        isOpen ? 'w-screen h-screen opacity-100 pointer-events-auto' : 'w-0 h-0 opacity-0 pointer-events-none font-mono'
      ]"
      style="transform-origin: top right"
    >
      <!-- Menu Items - Left Aligned -->
      <div class="w-full h-full flex flex-col items-start font-mono  justify-start pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-44 gap-4 sm:gap-5 md:gap-4 tracking-widest">
        <router-link
          v-for="(item, index) in menuItems"
          :key="item.name"
          :to="item.to"
          @click="toggleMenu"
          :class="[
            'text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-mono font-bold tracking-widest transition-all duration-500 hover:text-gray-400 py-2 sm:py-3 md:py-4',
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
          'absolute bottom-8 sm:bottom-12 md:bottom-16 left-6 sm:left-10 md:left-16 lg:left-24 xl:left-32 2xl:left-44 right-6 sm:right-10 md:right-16 lg:right-24 xl:right-32 2xl:right-44 flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm md:text-base tracking-widest transition-all duration-500',
          isOpen ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
        ]"
        :style="{ transitionDelay: isOpen ? '600ms' : '0ms' }"
      >
        <span class="text-sm sm:text-base md:text-lg">Quick Links</span>
        <span class="text-lg sm:text-xl">›</span>
        <a href="#" class="hover:text-gray-400 transition-colors text-sm sm:text-base">Web Development</a>
        <a href="#" class="hover:text-gray-400 transition-colors text-sm sm:text-base">Programming</a>
        <a href="#" class="hover:text-gray-400 transition-colors text-sm sm:text-base">Quizzes</a>
        <a href="#" class="hover:text-gray-400 transition-colors text-sm sm:text-base">Activities</a>
        <a href="#" class="hover:text-gray-400 transition-colors text-sm sm:text-base">Exams</a>
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
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Guides', to: '/guides' },
  { name: 'Courses', to: '/courses' },
  { name: 'Resources', to: '/resources' }
];
</script>