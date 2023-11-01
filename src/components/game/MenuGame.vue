<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="modal w-11/12 h-5/6 bg-gray-400">
      <div class="modal-content p-4 rounded-lg shadow-lg relative">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-xl font-bold">Menu</h1>
          <button @click="closeModal" class="text-gray-600 hover:text-gray-700">
            <IconDelete color="red" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconDelete from '@/components/icons/IconDelete.vue'
export default {
  components: {
    IconDelete,
  },
  methods: {
    closeModal() {
      // Émettre un événement pour fermer le modal
      this.$emit('close')
    }
  }
}
</script>
