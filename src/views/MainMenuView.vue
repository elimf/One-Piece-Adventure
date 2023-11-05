<template >
  <div id="web">
    <NavbarComponent @navbarItemClick="updateModalTitle" />
  <Modal :title="modalTitle" />
  </div>
  
</template>

<script lang="ts">
import Modal from '@/components/modal/MainMenuModal.vue'
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'

export default {
  components: {
    Modal,
    NavbarComponent
  },
  data() {
    return {
      modalTitle: "Game",
    }
  },
  methods: {
     updateModalTitle(title: string) {
      this.modalTitle = title;
    }
  }
}
</script>
<style scoped>
#web {
  width: 100%;
  height: 100vh;
  background: url('../assets/img/wallpaper/luffy-wallpaper.jpeg');
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
</style>


