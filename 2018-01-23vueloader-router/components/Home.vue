<template>
	<h3>当前是主页</h3>
	<ul>
		<li>用户</li>
		<li>注册</li>
	</ul>
	<div class="box">
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