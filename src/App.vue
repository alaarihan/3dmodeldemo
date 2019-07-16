<template>
  <div id="obj-model" @click="stopped = true">
    {{stopped}}
    <model-obj :src="obj" :mtl="mtl" :rotation="rotation" @on-load="onLoad"></model-obj>
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
  },
   data: () => ({
    stopped: false,
    rotation: {
        x: 0,
        y: -Math.PI / 2,
        z: 0
    }
  }),
  methods: {
      onLoad () {
          this.rotate();
      },
      rotate () {
        if(this.stopped) return
          this.rotation.y += 0.01;
          requestAnimationFrame( this.rotate );
      }
  }
};
</script>
<style scoped>
  #obj-model{
    cursor: move;
  }
</style>