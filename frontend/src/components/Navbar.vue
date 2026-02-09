<template>
  <div :class="containerClass">
   <!-- Blur Overlay -->
   <Transition name="fade">
     <div 
       v-if="isOpen" 
       @click="toggleMenu"
       class="fixed inset-0 bg-black/30 backdrop-blur-sm z-45"
     ></div>
   </Transition>

   <nav class="flex justify-between items-center relative z-50">
    <div >
      <img :src="logo" alt="Logo" class="w-15 h-15">
    </div>
    
    <section class="md:flex items-center bg-jb-dirtywhite py-2 px-2 rounded-lg relative hidden ">
      <div id="container-menu" ref="containerMenu" @mouseenter="openMenu()" @mouseleave="closeMenu()" 
      class="relative">
          <ul class="flex flex-row items-center gap-4 font-aeonik font-light text-xs uppercase" ref="desktopMenuItems">
            <li class="cursor-pointer  menu-item">Home</li>
            <li class="cursor-pointer menu-item">About</li>
            <li class="cursor-pointer menu-item">Services</li>
            <li class="cursor-pointer menu-item">Portfolio</li>
          </ul>
      </div>
      <div class="mx-2 cursor-pointer" ref="containerSection" @mouseenter="openMenu()" @mouseleave="closeMenu()">
        <Icon icon="mdi:menu" class="text-gray-600"/>
      </div>
    
      <button class="text-white uppercase bg-jb-red px-4 py-4 rounded-md font-aeonik font-light text-xs">
      Contact
    </button>
    </section>
    
    <section class="md:hidden relative" >
      <!-- Visible bar with icon and button -->
      <div class="flex items-center gap-2 py-2 px-2 bg-jb-dirtywhite z-50 transition-all duration-300 ease-in-out" :class="isOpen ? 'rounded-t-lg ' : 'rounded-lg'" >
        <div @click="toggleMenu" class="cursor-pointer px-2">
          <Icon
            :icon="isOpen ? 'mdi:close' : 'mdi:menu'" 
            class="text-gray-600"
          />
        </div>
        
        <button class="text-white uppercase bg-jb-red px-2 py-4 rounded-md font-aeonik font-light text-[10px] ml-auto">
          Contact
        </button>
      </div>

      <!-- DROPDOWN MENU -->
      <div
        ref="mobileMenu"
        class="absolute top-full left-0 right-0 w-full bg-jb-dirtywhite overflow-hidden z-50 rounded-b-lg"  
      >
        <ul
          ref="mobileMenuItems"
          class="flex flex-col items-center gap-4 font-aeonik font-light text-xs uppercase p-4"
        >
          <li class="cursor-pointer menu-item">Home</li>
          <li class="cursor-pointer menu-item">About</li>
          <li class="cursor-pointer menu-item">Services</li>
          <li class="cursor-pointer menu-item">Portfolio</li>
        </ul>
      </div>
    </section>

 


   </nav>
  </div>
</template>

<script setup lang="ts">
import logo from '../../public/jblogonobg.png'
import { Icon } from '@iconify/vue';
import gsap from 'gsap';
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const containerMenu = ref<HTMLElement | null>(null)
const containerSection = ref<HTMLElement | null>(null)
const mobileMenu = ref<HTMLElement | null>(null)
const desktopMenuItems = ref<HTMLElement | null>(null)
const mobileMenuItems = ref<HTMLElement | null>(null)

let tl: gsap.core.Timeline | null = null;
let mobileTl: gsap.core.Timeline | null = null;

const splitTextToLetters = (container: HTMLElement) => {
  const items = container.querySelectorAll('.menu-item');
  items.forEach((item) => {
    const text = item.textContent || '';
    item.innerHTML = text
      .split('')
      .map((char) => `<span class="letter">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');
  });
  return container.querySelectorAll('.letter');
};

const initAnimation = () => {
  if (!containerMenu.value || !desktopMenuItems.value) return;

  const letters = splitTextToLetters(desktopMenuItems.value);
  
  gsap.set(containerMenu.value, {
    width: 0,
    opacity: 0,
    overflow: "hidden",
    paddingLeft: 0,
  });

  gsap.set(letters, {
    opacity: 0,
    y: -10,
  });

  tl = gsap.timeline({ paused: true })
    .to(containerMenu.value, {
      width: "auto",
      opacity: 1,
      paddingLeft: 10,
      duration: 0.7,
      ease: "power1.inOut"
    })
    .to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: {
        each: 0.03,
        from: "random"
      },
      ease: "power2.out"
    }, "-=0.3");
};

const initMobileAnimation = () => {
  if (!mobileMenu.value || !mobileMenuItems.value) return;
  
  // Set initial states
  gsap.set(mobileMenu.value, {
    height: 0,
    opacity: 0,
    overflow: "hidden",
  });

  const letters = splitTextToLetters(mobileMenuItems.value);

  gsap.set(letters, {
    opacity: 0,
    y: -10,
  });

  mobileTl = gsap.timeline({ paused: true })
    .to(mobileMenu.value, {
      height: "auto",
      opacity: 1,
      duration: 0.6,
      ease: "power1.inOut"
    })
    .to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: {
        each: 0.03,
        from: "random"
      },
      ease: "power2.out"
    }, "-=0.3");
};

onMounted(() => {
  initAnimation();
  initMobileAnimation();
});

onUnmounted(() => {
  if (tl) tl.kill();
  if (mobileTl) mobileTl.kill();
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  
  if (mobileTl) {
    if (isOpen.value) {
      mobileTl.play();
    } else {
      mobileTl.reverse();
    }
  }
}

const openMenu = () => {
  if (tl) {
    tl.play();
  }
  gsap.to(containerSection.value, {
    opacity: 0,
    duration: 1,
    ease: "power1.inOut"
  });
}

const closeMenu = () => {
  if (tl) {
    tl.reverse();
  }
  gsap.to(containerSection.value, {
    opacity: 1,
    duration: 1,
    ease: "power1.inOut"
  });
}

const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
 


</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.letter {
  display: inline-block;
}
</style>