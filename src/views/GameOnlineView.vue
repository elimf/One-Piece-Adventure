<template>
  <div class="game-container">
    <SideMenu />
  </div>
</template>
<script lang="ts">
import SideMenu from '@/components/game/SideMenu.vue'
export default {
  components: {
    SideMenu
  },
  data() {
    return {}
  },
  methods: {}
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
