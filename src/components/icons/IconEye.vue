<template>
  <svg
    class="w-6 h-6 "
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
  >
    <g :stroke="color" :stroke-linecap="strokeLinecap" :stroke-linejoin="strokeLinejoin" :stroke-width="strokeWidth">
      <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
    </g>
  </svg>
</template>
<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: 'currentColor',
    },
    strokeWidth: {
      type: String,
      default: '1.5',
    },
    strokeLinecap: {
      type: String,
      default: 'round',
    },
    strokeLinejoin: {
      type: String,
      default: 'round',
    },
  },
};
</script>
