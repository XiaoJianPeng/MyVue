<template>
	<div id="news">
		<h3>我是新闻页</h3>
		<ul>
			<li v-for="(val,index) in news">
				{{val}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'news',
		data(){
			return {
				news:['aaa','bb','cc' ]
			}
		}
	}
</script>
