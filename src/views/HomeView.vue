<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import GameMenu from '@/components/home/HomeMenu.vue'
import TitleMenu from '@/components/home/TitleHomeMenu.vue'

const isKeyPressed = ref(false) // Variable pour suivre si une touche est enfoncée
const isMouseClicked = ref(false)
// Fonction pour gérer l'événement de pression de touche
const handleKeyPress = () => {
  isKeyPressed.value = true
}

const handleMouseClick = () => {
  isMouseClicked.value = true
}

onMounted(() => {
  // Écouter l'événement de pression de touche sur le document
  window.addEventListener('keydown', handleKeyPress)
  window.addEventListener('click', handleMouseClick)
})
const isActionTaken = computed(() => isKeyPressed.value || isMouseClicked.value)
</script>

<template>
  <div
    id="web"
    :class="{
      'background-class-when-taken': isActionTaken,
      'background-class-when-not-taken': !isActionTaken
    }"
  >
    <TitleMenu />
    <!-- Affiche le composant GameMenu si une touche est enfoncée -->
    <GameMenu v-if="isActionTaken" />
    <!-- Affiche un message tant que l'utilisateur n'a pas appuyé sur une touche -->
    <div class="absolute top-3/4 text-center w-full" v-else>
      <p
        class="text-7xl"
        :class="{ 'text-green-500': !isActionTaken, 'hover:text-blue-500': !isActionTaken }"
      >
        Appuyez sur une touche pour commencer.
      </p>
    </div>
  </div>
</template>
<style scoped>
.background-class-when-taken {
  background: url('../assets/img/luffy.jpeg');
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}

.background-class-when-not-taken {
  background: url('../assets/img/wallpaper.jpg'); /* Chemin vers l'image de fond lorsque l'action n'est pas prise */
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
</style>
