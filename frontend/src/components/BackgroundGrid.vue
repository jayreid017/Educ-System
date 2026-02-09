<template>
  <div class="fixed inset-0 pointer-events-none z-0 grid-background"></div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.grid-background {
  /* Using a subtle jb-red color (approx hex #A52446 with 0.05 opacity) */
  background-image: 
    linear-gradient(to right, rgba(165, 36, 70, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(165, 36, 70, 0.03) 1px, transparent 1px);
  /* Perfect 100px by 100px squares */
  background-size: 100px 100px;
}
</style>
