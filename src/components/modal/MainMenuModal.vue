<!-- Modal.vue -->
<template>
  <div class=" relative inset-0 flex items-center justify-center h-max">
    <div class="modal w-11/12 h-5/6 bg-gray-400">
      <div class="modal-content p-4 rounded-lg shadow-lg relative">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-xl font-bold">{{ title }}</h1>
        </div>
        <div v-if="title === 'Game'">Contenu pour Game</div>
        <div v-if="title === 'Personnages'">Contenu pour Personnages</div>
        <div v-if="title === 'Crew'">Contenu pour Crew</div>
        <div v-if="title === 'Statistiques'">Contenu pour Stats</div>  
        <div v-if="title === 'Logout'">Contenu pour Logout</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String 
  },
  methods: {}
}
</script>
