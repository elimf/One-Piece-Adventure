<template>
  <aside
    class="absolute top-0 right-0 flex h-screen w-32 flex-col items-center border-r border-gray-200 bg-black"
  >
    <div class="flex h-[7.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
      <img src="/src/assets/img/fanion/one-piece.png" />
    </div>
    <nav class="flex flex-1 flex-col gap-y-4 pt-10">
      <a
        v-for="item in sidebarItems"
        :key="item.id"
        @click="showModal(item)"
        class="group relative rounded-xl p-2 text-blue-600 hover:bg-blue-500 cursor-pointer"
      >
        <img class="rounded-xl w-12" :src="item.imgSrc" />
        <div class="absolute inset-y-0 right-24 hidden items-center group-hover:flex">
          <div
            class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg text-2xl tracking-wide"
          >
            <div class="absolute inset-0 -right-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white text-2xl"></div>
            </div>
            {{ item.tooltip }}
          </div>
        </div>
      </a>
    </nav>
    <div class="flex flex-col items-center gap-y-4 py-10">
      <div class="relative">
        <button @click="dropdownEvent" class="mt-2 rounded-full bg-gray-100">
          <img
            class="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/35387401?v=4"
            alt=""
          />
        </button>
        <div
          v-if="open"
          class="absolute z-10 mt-2 w-56 bg-white rounded-lg shadow-lg bottom-8 right-12"
        >
          <!-- Contenu du dropdown -->
          <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-2xl">Privacy Policy</a>
          <a class="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-2xl"> Settings</a>
          <a
            @click="logout, dropdownEvent"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-2xl"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </aside>
  <Modal v-if="isModalOpen" @close="closeModal" />
</template>
<script lang="ts">
import Modal from '@/components/game/MenuGame.vue'
import { AuthUtils } from '@/utils/auth.utils'
export default {
  components: {
    Modal
  },
  data() {
    return {
      authUtils: new AuthUtils(),
      open: false,
      isModalOpen: false,
      sidebarItems: [
        {
          id: 1,
          imgSrc: '/src/assets/img/fanion/beard.jpeg',
          tooltip: 'Layouts',
          color: 'blue'
        },
        {
          id: 2,
          imgSrc: '/src/assets/img/fanion/shanks.jpeg',
          tooltip: 'Color Scheme',
          color: 'gray'
        },
        {
          id: 3,
          imgSrc: '/src/assets/img/fanion/luffy01.jpeg',
          tooltip: 'Layouts',
          color: 'blue'
        },
        {
          id: 4,
          imgSrc: '/src/assets/img/fanion/kaido.jpeg',
          tooltip: 'Kaido',
          color: 'gray'
        },
        {
          id: 5,
          imgSrc: '/src/assets/img/fanion/baggy.jpeg',
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
    },
    dropdownEvent() {
      console.log(this.open)
      this.open = !this.open
    },
    logout() {
      this.authUtils.logout()
    }
  }
}
</script>
