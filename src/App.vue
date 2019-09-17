<template>
  <div id="app">
    <transition name="view">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
     
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.view-enter {
  opacity: 0;
}
.view-enter-to {
  opacity: 1;
}
.view-enter-active {
  transition: opacity 1s ease-in-out;
}
</style>
