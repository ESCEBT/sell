import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods.vue';
import saller from '../components/saller/saller.vue';
import ratings from '../components/ratings/ratings.vue';
Vue.use(Router);

export default new Router({
  // 设置active激活态的class名为active
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/saller',
      name: 'saller',
      component: saller
    },
    {
      path: '*',
      redirect: '/goods'
    }
  ]
});
