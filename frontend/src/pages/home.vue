<template>
  <BackgroundGrid/>
 <section :class="containerClass">
  <div class="w-full h-[calc(60vh-4rem)] flex flex-col items-left justify-center ">
    <h1 class=" font-extrabold uppercase font-karantina text-jb-red text-8xl text-shadow-canvas">code is my</h1>
    <h1 class=" font-extrabold uppercase font-karantina text-jb-red text-8xl text-shadow-canvas">canvas</h1>
  </div>
  <div class="flex">
    <div class="w-1/2">
      <h1>Web Developer • Digital Creator</h1>
    </div>
    <div class="w-1/2 flex flex-col items-center justify-center">
      <h1 class=" font-aeonik q text-2xl ">I'M 
        </h1> 
        <h1 class="w-full">JAY LASARTE BACURIN</h1>
    
    </div>

  </div>
 </section>
</template>

<script setup lang="ts">
import BackgroundGrid from '../components/BackgroundGrid.vue' 

const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
</script>

<style scoped>
.text-shadow-canvas {
  /* Multi-layered shadow to create a 3D extruded effect */
  text-shadow: 
    0px 1px 0px rgba(165, 36, 70, 0.2),
    0px 2px 0px rgba(165, 36, 70, 0.2),
    0px 3px 0px rgba(165, 36, 70, 0.2),
    0px 4px 0px rgba(165, 36, 70, 0.2),
    0px 5px 0px rgba(165, 36, 70, 0.2),
    0px 6px 12px rgba(165, 36, 70, 0.15);
}
</style>
