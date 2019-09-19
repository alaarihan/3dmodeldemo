<template>
  <div id="obj-model" @mousedown="stopped = true">
    <loading :active.sync="isLoading" :is-full-page="false"></loading>
    <model-obj :src="obj" :mtl="mtl" :rotation="rotation" @on-load="onLoad"></model-obj>
  </div>
</template>

<script>
import { ModelObj } from "vue-3d-model";
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "ObjModel",
  components: { ModelObj, Loading },
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
    isLoading: true,
    rotation: {
        x: 0,
        y: -Math.PI / 2,
        z: 0
    }
  }),
  methods: {
      onLoad () {
          this.isLoading = false
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
    position: relative;
  }
</style>