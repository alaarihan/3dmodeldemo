import Vue from "vue";
import App from "./App.vue";

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.config.productionTip = false;

Vue.customElement('vue-obj-model', App)