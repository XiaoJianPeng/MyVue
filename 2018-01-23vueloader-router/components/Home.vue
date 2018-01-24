<template>
	<div class="box">
	<h3>当前是主页</h3>
	<ul>
		<li v-link="{path:'/home/login'}">登录</li>
		<li v-link="{path:'/home/reg'}">注册</li>
	</ul>	
		<router-view></router-view>
	</div>
</template>
<script>	
</script>
<style scope>
	.box{
		border:1px dashed #000;
	}
</style>