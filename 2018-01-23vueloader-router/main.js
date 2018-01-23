import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import RouterConfig from './router.config.js'


Vue.use(VueRouter);
//配置路由
const router=new VueRouter();
//路由关联
router.map(RouterConfig);
//默认调整
router.redirect({
    '/':'/home'
});

//启动路由
router.start(App,'#app');