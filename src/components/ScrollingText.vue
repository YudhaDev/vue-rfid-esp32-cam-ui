<template>
    <div class="scroll-container">
      <div class="scroll-text" :style="textStyle">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      speed: {
        type: Number,
        default: 50,
      },
    },
    computed: {
      textStyle() {
        return {
          animation: `scroll ${this.speed}s linear infinite`,
        };
      },
    },
  };
  </script>
  
  <style>
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .scroll-container {
    overflow: hidden;
    white-space: nowrap;
  }
  
  .scroll-text {
    display: inline-block;
    padding: 0 20px; /* Add some padding for the text to repeat */
  }
  </style>