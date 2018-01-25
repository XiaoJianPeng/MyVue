<template>
	<div id="news">
		<h3>这是新闻页</h3>
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
				news:['asda','2222adsaa2222','Cse','ttt']
			}
		}
	}
</script>