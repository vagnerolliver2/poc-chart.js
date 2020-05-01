import Vue from 'vue';
// import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

// export const { bootstrap } = vueLifecycles;
// export const { mount } = vueLifecycles;
// export const { unmount } = vueLifecycles;
