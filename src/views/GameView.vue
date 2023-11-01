<template>
  <div class="game-container">
    <button
      @click="showModal"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Button
    </button>
    <h1 class="one-piece-text ">Game</h1>
    <Modal v-if="isModalOpen" @close="closeModal" />
    <SideMenu />
  </div>
</template>
<script lang="ts">
import Modal from '@/components/game/MenuGame.vue'
import SideMenu from '@/components/game/SideMenu.vue'
export default {
  components: {
    Modal,
    SideMenu
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    showModal() {
      console.log('showModal')
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    }
  }
}
</script>

<style>
.one-piece-text {
  font-family: 'OnePieceFont', sans-serif;
  /* Autres styles de texte */
}
.game-container {
  width: 100%;
  height: 100vh;
  background-size: 100vw 100vh;
  background-image: url('https://giffiles.alphacoders.com/218/218685.gif');
}
</style>
