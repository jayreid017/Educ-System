<template>
  <section class="relative mt-12 md:mt-16 py-16 sm:py-20 md:py-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <h2 class="text-sky-200 font-mono tracking-widest text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
          WHAT IS BUILDFLOW FOR?
        </h2>
        <h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono mb-6 sm:mb-8">
          Your Complete Learning Solution
        </h3>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        
        <!-- Web Development Card -->
        <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 flex items-center justify-center">
            <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h4 class="text-white text-lg sm:text-xl md:text-2xl font-bold font-mono mb-3 sm:mb-4">
            Web Development
          </h4>
          <p class="text-gray-300 text-sm sm:text-base font-mono leading-relaxed">
            Learn modern web technologies with step-by-step guides, from HTML basics to advanced frameworks.
          </p>
        </div>

        <!-- Programming Fundamentals Card -->
        <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 flex items-center justify-center">
            <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h4 class="text-white text-lg sm:text-xl md:text-2xl font-bold font-mono mb-3 sm:mb-4">
            Programming
          </h4>
          <p class="text-gray-300 text-sm sm:text-base font-mono leading-relaxed">
            Master programming fundamentals with interactive lessons, coding exercises, and practical examples.
          </p>
        </div>

        <!-- Academic Resources Card -->
        <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 flex items-center justify-center">
            <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h4 class="text-white text-lg sm:text-xl md:text-2xl font-bold font-mono mb-3 sm:mb-4">
            Academic Resources
          </h4>
          <p class="text-gray-300 text-sm sm:text-base font-mono leading-relaxed">
            Access structured learning materials, study guides, and educational content for academic success.
          </p>
        </div>

        <!-- Interactive Activities Card -->
        <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 flex items-center justify-center">
            <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h4 class="text-white text-lg sm:text-xl md:text-2xl font-bold font-mono mb-3 sm:mb-4">
            Activities
          </h4>
          <p class="text-gray-300 text-sm sm:text-base font-mono leading-relaxed">
            Engage with hands-on activities and practical exercises to reinforce your learning.
          </p>
        </div>

        <!-- Quizzes & Assessments Card -->
        <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 flex items-center justify-center">
            <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h4 class="text-white text-lg sm:text-xl md:text-2xl font-bold font-mono mb-3 sm:mb-4">
            Quizzes & Exams
          </h4>
          <p class="text-gray-300 text-sm sm:text-base font-mono leading-relaxed">
            Test your knowledge with interactive quizzes and comprehensive examinations to track your progress.
          </p>
        </div>

        <!-- Structured Learning Card -->
        <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/10 transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-6 flex items-center justify-center">
            <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h4 class="text-white text-lg sm:text-xl md:text-2xl font-bold font-mono mb-3 sm:mb-4">
            Structured Learning
          </h4>
          <p class="text-gray-300 text-sm sm:text-base font-mono leading-relaxed">
            Follow clear, organized learning paths designed to take you from beginner to advanced level.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No imports needed
</script>
