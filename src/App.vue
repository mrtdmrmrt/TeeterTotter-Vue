<template>
  <div id="app" class="font-bold">
    <Header />
    <GameArea />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import GameArea from './components/GameArea.vue';
export default {
  name: "App",
  components: {
    Header,
    GameArea
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
html * {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
