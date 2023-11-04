<template>
  <nav class="bg-amber-400 flex justify-center">
    <ul  class="navbar-menu">
      <li v-for="item in sidebarItems" :key="item.id" @click="showModal(item)"
      >
      <a class="group relative rounded-xl p-2 text-blue-600 hover:bg-blue-500 cursor-pointer">{{ item.tooltip }} </a>
    </li>
      <!-- <li><a>Game</a></li>
      <li><a>Personnages</a></li>
      <li><a>Crew</a></li>
      <li><a>Statistiques </a></li>
      <li><a>Logout </a></li> -->
    </ul>
  </nav>
  <div>
    <h1>Content here</h1>
    <Modal v-if="isModalOpen" @close="closeModal" />
  </div>
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
          tooltip: 'Layouts',
          color: 'blue'
        },
        {
          id: 2,
          tooltip: 'Color Scheme',
          color: 'gray'
        },
        {
          id: 3,
          tooltip: 'Layouts',
          color: 'blue'
        },
        {
          id: 4,
          tooltip: 'Kaido',
          color: 'gray'
        },
        {
          id: 5,
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
<style scoped>
.navbar-menu {
  list-style: none;
  float: right;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  display: inline;
  margin-left: 20px;
}

.navbar-menu li a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}

.navbar-menu li a:hover {
  text-decoration: underline;
}
</style>
