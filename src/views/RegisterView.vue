<template>
  <div id="web">
    <CardForm page="register" />
  </div>
</template>
<script setup lang="ts">
import CardForm from '../components/form/CardForm.vue'
</script>
<style scoped>
#web {
  width: 100%;
  height: 100vh;
  background: url('../assets/img/wallpaper/3guys.jpeg');
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
</style>