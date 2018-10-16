import Vue from 'vue';
import App from './App.vue';
import MagicTable from './components/MagicTable.vue';

Vue.config.productionTip = false;

Vue.component('MagicTable', MagicTable);

new Vue({
  render: h => h(App),
}).$mount('#app');
