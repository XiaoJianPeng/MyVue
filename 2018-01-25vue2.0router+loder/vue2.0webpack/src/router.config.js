import Home from './Home.vue'
import News from './News.vue'

export default{
	routes:[
		{path:'/home', component:Home},
		{path:'/news', component:News},
		{path:'*', redirect:'/home'}
	]
}