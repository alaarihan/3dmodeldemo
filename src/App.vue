<template>
  <div id="app">
    <threeDModel/>
  </div>
</template>

<script>
import threeDModel from "./components/threeDModel";

export default {
  name: "App",
  components: {
    threeDModel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
