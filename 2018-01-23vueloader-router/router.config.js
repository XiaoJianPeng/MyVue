//路由规则配置
//引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'

export default{
    '/home':{
        component:Home
    },
    '/news':{
        component:News
    }
}