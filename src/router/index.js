import Vue from 'vue'
import Router from 'vue-router'
import index from "@/components/index"

import page1 from "@/components/page1"
import page2 from "@/components/page2"
import { Store } from 'vuex';


Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title : "首页",
        needLogin:false,

      }
    },{
      path:"/page1",
      name : "page1",
      component:page1,
      meta:{
        title:"page1",
        needLogin:false,
      }
    },{
      path:"/page2",
      name : "page2",
      component:page2,
      meta:{
        title:"page2",
        needLogin:true,
      }
    }
  ]
})
router.beforeEach((to,from,next) => {
    document.title = to.meta.title;
    if(to.meta.needLogin){
      if(router.app.$options.store.state.loginModule.islogin){
          next();
      }else{
        // 如果没登陆那么跳转
        next('/');
      }
      
    }else{
      next();
    }
})





export default router;


