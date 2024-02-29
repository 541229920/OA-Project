<template>
	<div v-if="getProData.length > 0">
		<div v-for="(item, index) in getProData" :key="index">
			<p><span>{{ item.project }}</span> | <span>{{ item.rule }}</span> </p>
		</div>
	</div>
	<div v-else>
		等待网络请求中....
	</div>
</template>

<script lang="ts" setup>
import { GetAxios } from '@/unilt/GetAxiosUntli';
const axiosApi = new GetAxios()

const { getProData } = axiosApi.viewPro()
console.log(getProData)
</script>

<style scoped lang="less">

span{
	display: inline-block;
	width: 200px;
}
	</style>@/unilt/GetAxiosEvent