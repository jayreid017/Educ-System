<template>
  <section class="bg-black relative">
    <div 
      class="relative bg-cover bg-center bg-no-repeat min-h-[40rem] sm:min-h-[calc(105vh-60px)] w-full pt-6 sm:pt-8 flex items-center overflow-hidden pb-6 sm:pb-10 lg:pb-32"
      :style="{ backgroundImage: `url(${robotImage})` }"
    >
      <!-- Overlay for better text readability on mobile -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:from-black/70 md:via-black/30 md:to-transparent"></div>
      
      <!-- Content Container -->
      <section class="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
        <div class="flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          
          <!-- Welcome Text --> 
          <h5 class="text-white font-mono tracking-widest text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            WELCOME TO
          </h5>

          <!-- Platform Context -->
          <h5 class="text-gray-300 font-mono tracking-widest text-xs sm:text-sm md:text-base">
            A MULTI-PURPOSE LEARNING PLATFORM
          </h5>
          
          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-mono tracking-wide leading-tight">
            BuildFlow
          </h1>
          
          <!-- Description -->
          <div class="flex flex-col gap-4 border-l-2 border-sky-200 my-2 sm:my-3 md:my-4">
            <p class="text-sm sm:text-base lg:text-lg text-gray-300 md:text-gray-400 font-mono tracking-wide pl-4 sm:pl-5 md:pl-6 leading-relaxed max-w-prose">
              A beginner-friendly platform for web development, programming, and academic resources.
            </p>
          </div>
          
          <!-- CTA Button -->
          <div class="flex justify-start items-start mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <button class="text-white text-sm sm:text-base md:text-lg lg:text-xl font-mono tracking-widest uppercase border border-sky-100/50 px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 hover:shadow-lg hover:shadow-sky-200/30 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:scale-95 whitespace-nowrap">
              Get Started →
            </button>
          </div>
          
        </div>
      </section>
    </div>

    <section class="relative w-full px-4 sm:px-6 md:px-8 lg:px-0 pb-10 lg:pb-0">
      <div class="mx-auto max-w-7xl lg:absolute lg:bottom-[-100px] lg:right-8">
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-6">
          
          <!-- Education Card -->
          <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 px-5 py-5 sm:px-8 sm:py-7">
            <div class="p-6 sm:p-8 md:p-12">
              <h1 class="text-white text-sm sm:text-base md:text-lg font-mono tracking-widest uppercase mb-2">
                EDUCATION
              </h1>
              <p class="text-gray-300 text-xs sm:text-sm md:text-base font-mono max-w-xs">
                Web development guides, programming fundamentals, and academic resources
              </p>
            </div>
          </div>
          
          <!-- Innovation Card -->
          <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 px-5 py-5 sm:px-8 sm:py-7">
            <div class="p-6 sm:p-8 md:p-12">
              <h1 class="text-white text-sm sm:text-base md:text-lg font-mono tracking-widest uppercase mb-2">
                INNOVATION
              </h1>
              <p class="text-gray-300 text-xs sm:text-sm md:text-base font-mono max-w-xs">
                Interactive tools for lessons, activities, quizzes, and exams
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import robotImage from '../assets/robot.png'
</script>

<style scoped>
/* Additional mobile optimizations */
@media (max-width: 640px) {
  .bg-cover {
    background-position: 65% center;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .bg-cover {
    background-position: 70% center;
  }
}
</style>
