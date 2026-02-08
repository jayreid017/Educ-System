<template>
  <section class="relative min-h-screen  md:mt-1 py-6 sm:py-8 md:py-10 overflow-hidden">
    
    <!-- Spotlight Background -->
    <div class="spotlight-container">
      <div class="spotlight spotlight-1"></div>
      <div class="spotlight spotlight-2"></div>
      <div class="spotlight spotlight-3"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
      
      <!-- Header Section -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20">
        <h5 class="text-sky-200 font-mono tracking-widest text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
          ABOUT US
        </h5>
        
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono mb-6 sm:mb-8 leading-tight">
          Empowering Learning<br />Through Technology
        </h1>
        
        <p class="text-sm sm:text-base md:text-lg text-gray-400 font-mono max-w-3xl mx-auto leading-relaxed">
          A student-focused learning platform for web development, programming, and academic resources.
        </p>
      </div>

      <!-- Values Card -->
      <div class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-100/20 rounded-3xl p-8 sm:p-12 md:p-16 mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          <!-- Accessibility -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p class="text-white font-mono text-xs sm:text-sm md:text-base">Accessible</p>
          </div>

          <!-- Structured -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <p class="text-white font-mono text-xs sm:text-sm md:text-base">Structured</p>
          </div>

          <!-- Practical -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <p class="text-white font-mono text-xs sm:text-sm md:text-base">Practical</p>
          </div>

          <!-- Innovative -->
          <div class="text-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <svg class="w-full h-full text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0z" />
              </svg>
            </div>
            <p class="text-white font-mono text-xs sm:text-sm md:text-base">Innovative</p>
          </div>

        </div>
      </div>

      <!-- Vision & Mission -->
      <div class="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
        
        <!-- Vision -->
        <div class="text-center md:text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-mono mb-4">
            Vision
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-400 font-mono leading-relaxed">
            To be a trusted platform that helps students develop technical skills through accessible, structured content.
          </p>
        </div>

        <!-- Mission -->
        <div class="text-center md:text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-mono mb-4">
            Mission
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-400 font-mono leading-relaxed">
            To provide clear guides, practical lessons, and resources that enhance understanding and support continuous learning.
          </p>
        </div>

      </div>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <button class="text-white text-sm sm:text-base md:text-lg font-mono tracking-widest uppercase border border-sky-100/50 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 hover:shadow-lg hover:shadow-sky-200/30 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:scale-95 whitespace-nowrap rounded-lg">
          Explore the Platform
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// No imports needed
</script>

<style scoped>
.spotlight-container {
  position: absolute;
  inset: 0;
  background: #000;
  overflow: hidden;
}

.spotlight {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
  animation: float 8s ease-in-out infinite;
}

.spotlight-1 {
  top: 10%;
  left: 15%;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 30%, transparent 70%);
  animation-delay: 0s;
}

.spotlight-2 {
  top: 15%;
  right: 10%;
  background: radial-gradient(circle, rgba(200,220,255,0.25) 0%, rgba(150,180,255,0.12) 30%, transparent 70%);
  animation-delay: -3s;
}

.spotlight-3 {
  bottom: 10%;
  left: 20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255,240,200,0.2) 0%, rgba(255,220,150,0.1) 30%, transparent 70%);
  animation-delay: -6s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-15px, 20px) scale(0.95);
  }
  75% {
    transform: translate(25px, 15px) scale(1.05);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}
</style>