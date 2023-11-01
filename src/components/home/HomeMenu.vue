<template>
    <div class="container-button">
      <router-link to="/register">
        <button class="game-button orange">Register</button>
      </router-link>
      <router-link to="/login">
        <button class="game-button green">Login</button>
      </router-link>
    </div>
  </template>
  <style scoped>
  .container-button {
    position: absolute;
    bottom: 0;
    left: 45%;
  }
  </style>