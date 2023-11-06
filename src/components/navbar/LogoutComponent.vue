<template>
  <div>
    <button class="text-4xl game-button red" @click="confirmLogout">Logout</button>
    <div v-if="showConfirmation" class="confirmation flex flex-col justify-center">
      <p class="text-black text-center text-5xl">Voulez-vous vraiment vous déconnecter ?</p>
      <div class="flex justify-around">
        <button class="text-black text-4xl game-button red" @click="logout">Oui</button>
        <button class="text-black text-4xl game-button green" @click="cancelLogout">Non</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AuthUtils } from '@/utils/auth.utils'
export default {
  data() {
    const authUtils = new AuthUtils()
    return {
      authUtils,
      showConfirmation: false
    }
  },
  methods: {
    confirmLogout() {
      this.showConfirmation = true
    },
    logout() {
      this.authUtils.logout()
      this.showConfirmation = false
    },
    cancelLogout() {
      this.showConfirmation = false
    }
  }
}
</script>

<style>
.confirmation {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
