<template>
  <div class="hello">
    <model-obj src="T3Nano.obj" mtl="T3Nano.mtl"></model-obj>
  </div>
</template>

<script>
import { ModelObj } from "vue-3d-model";
export default {
  name: "threeDModel",
  components: { ModelObj },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
