<template>
	<div id="news">
		<h3>这是新闻页</h3>
		<ul>
			<li v-for="item in news">
				 {{ item.message }}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'news',
		data(){
			return {
				news:[
					{ message: 'Foo' },
					{ message: 'Bar' }
				]
			}
		}
	}
</script>