<template>
  <div class="play-container flex flex justify-center align-center flex-col">
    <h1 class="text-2xl font-bold mb-4">Choose your adventure:</h1>
    <div class="buttons">
      <button class="play-button" @click="startStoryMode">Story Mode</button>
      <button class="play-button" @click="startOnlineMode">Online Mode</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    startStoryMode() {
      // Redirect user to history mode
      this.$router.push('/story-mode')
    },
    startOnlineMode() {
      // Redirect user to online mode
      this.$router.push('/online-mode')
    }
  }
}
</script>

<style>
.play-container {
  align-items: center;
}

.buttons {
  display: flex;
  gap: 20px;
}

.play-button {
  background-color: #3490dc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: #2779bd;
}
</style>
