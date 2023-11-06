<template>
  <div class="fixed inset-0 flex items-center justify-center z-10 h-screen">
    <div class="modal w-11/12 h-4/6 bg-black relative opacity-70">
      <div class="modal-content p-4 rounded-lg shadow-lg relative bg-black">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-xl font-bold">{{ title }}</h1>
        </div>
        <div v-if="title === 'Game'"><GameComponent /></div>
        <div v-if="title === 'Personnages'"><CharacterComponent /></div>
        <div v-if="title === 'Crew'"><CrewComponent /></div>
        <div v-if="title === 'Statistiques'"><StatsComponent /></div>
        <div v-if="title === 'Logout'"><LogoutComponent /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GameComponent from '@/components/navbar/GameComponent.vue'
import CrewComponent from '@/components/navbar/CrewComponent.vue'
import StatsComponent from '@/components/navbar/StatsComponent.vue'
import LogoutComponent from '@/components/navbar/LogoutComponent.vue'
import CharacterComponent from '@/components/navbar/CharacterComponent.vue'
export default {
  components: {
    GameComponent,
    CrewComponent,
    StatsComponent,
    LogoutComponent,
    CharacterComponent
  },
  props: {
    title: String
  },
  methods: {}
}
</script>
