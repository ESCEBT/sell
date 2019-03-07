// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 引入所有的styl文件
import './common/stylus/index.styl';
import VueResource from 'vue-resource';
Vue.config.productionTip = false;

Vue.use(VueResource);
// 下面的这个注释是为了避免eslink的规则检查，因为eslink中
// 对象的new声明都要赋值，但vue不需要，所以规避
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
