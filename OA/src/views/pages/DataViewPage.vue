<template>
	<div class="ViewPro content">
		<div class="sreach">
			<input type="text" v-model="searchTerm" placeholder="查询 微信/手机号/项目">
		</div>
		<table v-if="getAxiosData.length > 0">
			<thead>
				<tr>
					<th>微信</th>
					<th>手机号</th>
					<th>项目</th>
					<th>价格</th>
					<th>额度</th>
					<th>哈希值</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, key) in filteredData" :key="key">
					<td>{{ data.wechat }}</td>
					<td>{{ data.phone }}</td>
					<td>{{ data.project }}</td>
					<td>{{ data.price }} USDT</td>
					<td>{{ data.quota }} USDT</td>
					<td>{{ data.hash }}</td>
				</tr>
			</tbody>
		</table>

		<div v-else>
			Loading....
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { GetAxios } from '@/unilt/GetAxiosUntli';

const axiosApi = new GetAxios()
const { getAxiosData } = axiosApi.viewUser()

const searchTerm = ref('');

const filteredData = computed(() => {
	return getAxiosData.value.filter(data => {
		console.log(data.wechat.toLowerCase())

		return (
			data.wechat.toLowerCase()
		)
	})
	// 	return getAxiosData.value.filter(data => {
	// 	return (
	// 		data.wechat.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
	// 		data.phone.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
	// 		data.project.toLowerCase().includes(searchTerm.value.toLowerCase())
	// 	);
	// });

});

</script>

<style lang="less" scoped>
.ViewPro {
	overflow: auto;
}

table {
	width: 100%;
	margin: 0 auto;
	text-align: center;

	thead {
		background: #717171;
		color: white;
	}

	tbody {
		background: #f3f3f3;

		tr {
			&:hover {
				background: #f0f0f0;
			}
		}
	}

	th,
	td {
		width: 130px;
		line-height: 40px;
	}
}


.sreach {
	margin: 50px auto;
	width: 400px;
	border-bottom: 1px solid #2a2a2a;
	font-size: 0;

	input {
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		font-size: 16px;
	}
}
</style>