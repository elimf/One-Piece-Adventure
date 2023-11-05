<template>
  <nav class="bg-amber-400 flex justify-center h-4/5">
    <ul class="navbar-menu">
      <li v-for="item in navbarItems" :key="item.id" @click="showModal(item)">
        <a class="group relative p-2 text-2xl text-blue-600 hover-bg-orange-300 cursor-pointer">{{
          item.title
        }}</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { dataNavbar } from '@/data/navbar/navbarData.data'
import { type ItemNavbarTypes } from '@/types/navbar/itemNavbarTypes.types'

export default {
  components: {
  },
  data() {
    return {
      navbarItems: dataNavbar as ItemNavbarTypes[]
    }
  },
  methods: {
    showModal(item: ItemNavbarTypes) {
      this.$emit("navbarItemClick", item.title);
      console.log('showModal', item.title)
    }
  }
}
</script>
<style scoped>
.navbar-menu li {
  display: inline;
  margin-left: 20px;
}
</style>