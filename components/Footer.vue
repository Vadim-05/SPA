<template>
	<div class="container-footer mx-auto pt-7">
		<div>Вадім Ізмайлович</div>
		<img class="size-img" src='/vadim.jpg'/>
	</div>
</template>
<style>
.size-img{
	width: 200px;
}
.container-footer{
	width: 300px;
	display: flex;
	align-items: center;
	flex-direction: column;
}
@media screen and (min-width: 1024px){
	.container-footer{
		flex-direction: row;
		justify-content: space-between;
		width: 900px;
	}
}
</style>