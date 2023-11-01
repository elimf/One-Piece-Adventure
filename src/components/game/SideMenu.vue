<template>
  <aside
    class="absolute top-0 right-0 flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-black"
  >
    <div class="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
      <img src="/src/assets/img/one-piece.png" />
    </div>
    <nav class="flex flex-1 flex-col gap-y-4 pt-10">
      <a
        v-for="item in sidebarItems"
        :key="item.id"
        @click="showModal(item)"
        class="group relative rounded-xl p-2 text-blue-600 hover:bg-blue-500 cursor-pointer"   
      >
        <img class="rounded-xl" :src="item.imgSrc" />
        <div class="absolute inset-y-0 right-12 hidden items-center group-hover:flex">
          <div
            class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg"
          >
            <div class="absolute inset-0 -right-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            {{ item.tooltip }}
          </div>
        </div>
      </a>
    </nav>
    <div class="flex flex-col items-center gap-y-4 py-10">
      <button class="mt-2 rounded-full bg-gray-100">
        <img
          class="h-10 w-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/35387401?v=4"
          alt=""
        />
      </button>
    </div>
  </aside>
  <Modal v-if="isModalOpen" @close="closeModal" />
</template>
<script lang="ts">
import Modal from '@/components/game/MenuGame.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalOpen: false,
      sidebarItems: [
        {
          id: 1,
          imgSrc: '/src/assets/img/beard.jpeg',
          tooltip: 'Layouts',
          color: 'blue'
        },
        {
          id: 2,
          imgSrc: '/src/assets/img/shanks.jpeg',
          tooltip: 'Color Scheme',
          color: 'gray'
        },
        {
          id: 3,
          imgSrc: '/src/assets/img/luffy01.jpeg',
          tooltip: 'Layouts',
          color: 'blue'
        },
        {
          id: 4,
          imgSrc: '/src/assets/img/kaido.jpeg',
          tooltip: 'Kaido',
          color: 'gray'
        },
        {
          id: 5,
          imgSrc: '/src/assets/img/baggy.jpeg',
          tooltip: 'Inventory',
          color: 'gray'
        }
      ]
    }
  },
  methods: {
    showModal(item: any) {
      console.log('showModal', item.tooltip)
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    }
  }
}
</script>
