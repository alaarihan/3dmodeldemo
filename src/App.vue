<template>
  <div id="obj-model">
    <model-obj :src="obj" :mtl="mtl"></model-obj>
  </div>
</template>

<script>
import { ModelObj } from "vue-3d-model";
export default {
  name: "ObjModel",
  components: { ModelObj },
  props: {
    obj: {
      type: String,
      default() {
        return ''
      }
    },
    mtl: {
      type: String,
      default() {
        return ''
      }
    }
  }
};
</script>
<style scoped>
  #obj-model{
    cursor: move;
  }
</style>