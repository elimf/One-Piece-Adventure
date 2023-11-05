<template>
  <NavbarComponent @navbarItemClick="updateModalTitle" />

  <Modal :title="modalTitle" />
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



