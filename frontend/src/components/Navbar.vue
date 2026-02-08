<template>
  <div :class="containerClass">
   <nav class="flex justify-between items-center">
    <img :src="logo" alt="Logo" class="w-15 h-15">
    
    <button class=" text-white uppercase bg-jb-red px-4 py-2 rounded-sm ">
      Contact
    </button>
   </nav>
  </div>
</template>

<script setup lang="ts">
import logo from '../../public/jblogonobg.png'

const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
</script>