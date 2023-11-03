<template>
  <div
    id="web"
    :class="{
      'background-class-when-taken': isActionTaken,
      'background-class-when-not-taken': !isActionTaken
    }"
  >
    <TitleMenu />
    <!-- Displays the GameMenu component if a key is pressed -->
    <GameMenu v-if="isActionTaken" />
    <!--  Displays a message until the user presses a key -->
    <div class="absolute top-3/4 text-center w-full" v-else>
      <p
        class="text-7xl"
        :class="{ 'text-green-500': !isActionTaken, 'hover:text-blue-500': !isActionTaken }"
      >
      Press a button to start.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import GameMenu from '@/components/home/HomeMenu.vue'
import TitleMenu from '@/components/home/TitleHomeMenu.vue'

// Variables 

const isKeyPressed = ref(false) 
const isMouseClicked = ref(false)
// Function to handle key press event
const handleKeyPress = () => {
  isKeyPressed.value = true
}

const handleMouseClick = () => {
  isMouseClicked.value = true
}

onMounted(() => {
  // Listen to the key press event on the document
  window.addEventListener('keydown', handleKeyPress)
  window.addEventListener('click', handleMouseClick)
})
const isActionTaken = computed(() => isKeyPressed.value || isMouseClicked.value)
</script>
<style scoped>
.background-class-when-taken {
  background: url('../assets/img/luffy.jpeg');
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}

.background-class-when-not-taken {
  background: url('../assets/img/wallpaper.jpg'); 
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
</style>
