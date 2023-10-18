<template>
    <div class="container-button">
      <router-link to="/register">
        <button>Register</button>
      </router-link>
      <router-link to="/login">
        <button>Login</button>
      </router-link>
    </div>
  </template>
  <style scoped>
  .container-button {
    position: absolute;
    top: 45%;
    left: 40%;
  }
  button {
    margin: 10px 0px;
    background-color: #795548;
    padding: 10px 40px;
    border-radius: 5px;
    transition: all 500ms ease-in-out;
    color: grey;
    cursor: pointer;
  }
  button:hover {
    background-color: #4caf50a8;
    color: black;
  }
  </style>