<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :stroke-width="strokeWidth"
    :stroke="color" 
    class="w-6 h-6"
  >
    <path :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" d="M6 18L18 6M6 6l12 12" />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: 'currentColor', // Couleur par défaut
    },
    strokeWidth: {
      type: String,
      default: '1.5', // Largeur de trait par défaut
    },
    strokeLinecap: {
      type: String,
      default: 'round', // Style de terminaison de trait par défaut
    },
    strokeLinejoin: {
      type: String,
      default: 'round', // Style de jointure de trait par défaut
    },
  },
};
</script>
