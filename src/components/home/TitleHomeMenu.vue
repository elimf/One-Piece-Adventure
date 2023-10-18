<template>
    <div class="wavy">
      <span style="--i: 1">O</span>
      <span style="--i: 2">n</span>
      <span style="--i: 3">e</span>
      <span style="--i: 4;  margin: 2rem"></span>
      <span style="--i: 5">P</span>
      <span style="--i: 6">i</span>
      <span style="--i: 7">e </span>
      <span style="--i: 8">c</span>
      <span style="--i: 9">e</span>
      <span style="--i: 10;  margin: 2rem"></span>
      <span style="--i: 11">A</span>
      <span style="--i: 12">d</span>
      <span style="--i: 13">v</span>
      <span style="--i: 14">e</span>
      <span style="--i: 15">n</span>
      <span style="--i: 16">t</span>
      <span style="--i: 17">u</span>
      <span style="--i: 18">r</span>  
      <span style="--i: 19">e</span>
    </div>
  </template>
  <style scoped>
  .wavy {
    position: absolute;
    top: 10%;
    left: 15%;
  }
  .wavy span {
    position: relative;
    display: inline-block;
    font-size: calc(5vw + 1vw);
    text-transform: uppercase;
    animation: animate 1.5s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
    background: linear-gradient(5deg, #795548, #4caf50a8);
    -webkit-background-clip: text;
    color: transparent;
  }
  @keyframes animate {
    0%,
    100% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
    }
    40% {
      transform: translateY(0px);
    }
  }
  </style>