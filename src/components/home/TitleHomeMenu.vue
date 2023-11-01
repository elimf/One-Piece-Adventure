<template>
  <div class="wavy text-9xl ">
    <span style="--i: 1">O</span>
    <span style="--i: 2">n</span>
    <span style="--i: 3">e</span>
    <span style="--i: 4; margin: 2rem"></span>
    <span style="--i: 5">P</span>
    <span style="--i: 6">i</span>
    <span style="--i: 7">e </span>
    <span style="--i: 8">c</span>
    <span style="--i: 9">e</span>
    <span style="--i: 10; margin: 2rem"></span>
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
  text-transform: uppercase;
  animation: animate 1.5s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--i));
  background: linear-gradient(5deg, #bbc59c, #4caf50a8);
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
.wavy {
  margin: 15px auto;
  text-align: center;
}
.wavy a {
  text-decoration: none;
  -webkit-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -moz-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -ms-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -o-transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-size: 75px;
  font-weight: 700;
  font-family: 'Exo 2';
  line-height: 0.8;
  color: #fbd62a;
  text-shadow:
    0 -1px 15px rgba(0, 0, 0, 0.9),
    0 1px 0 #7f6303,
    0 3px 0 #846703,
    0 5px 0 #896b03,
    0 7px 0 #8e6f03,
    0 9px 0 #937203,
    0 6px 50px rgba(252, 223, 92, 0.8);
}
.wavy span:first-line {
  font-size: 0.8em;
}
.wavy span:hover {
  -webkit-transform: perspective(8em) rotateX(11deg) scale(1.2);
  -moz-transform: perspective(8em) rotateX(11deg) scale(1.2);
  -ms-transform: perspective(8em) rotateX(11deg) scale(1.2);
  -o-transform: perspective(8em) rotateX(11deg) scale(1.2);
  transform: perspective(8em) rotateX(11deg) scale(1.2);
  text-shadow:
    0 -1px 15px black,
    0 1px 0 #7f6303,
    0 2px 0 #846703,
    0 0px 0 #896b03,
    0 1px 0 #8e6f03,
    0 2px 0 #937203,
    0 2px 30px rgba(252, 223, 92, 0.6);
}
</style>
