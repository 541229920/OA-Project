<template>
	<div class="EntryForm content">
		<div class="formData">
			<form @submit.prevent="handleSubmit">
				<p><span>微信</span><input v-model="FormData.wechat" type="text"></p>
				<p><span>手机号</span><input v-model="FormData.photo" type="number" maxlength="11"></p>
				<p><span>价格</span><input v-model="FormData.price" type="text"></p>
				<p><span>额度</span><input v-model="FormData.quota" type="number"></p>
				<p><span>哈希值</span><input v-model="FormData.hash" type="text" maxlength="64"></p>
				<p><span>项目</span>

					<select v-model="FormData.project">
						<option v-for="(itme, index) in ProduckData" :value="itme.value">{{ itme.name }}</option>
					</select>

				</p>
				<p>
					<span></span><button class="view">浏览</button>
				</p>

			</form>
			<div>
				<hr>
				<table>
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
						<tr>
							<td>{{ ViewData?.wechat }}</td>
							<td>{{ ViewData?.photo }}</td>
							<td>{{ ViewData?.project }}</td>
							<td>{{ ViewData?.price }} USDT</td>
							<td>{{ ViewData?.quota }} USDT</td>
							<td>{{ ViewData?.hash }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="subStyle">
			<button class="submit" @click="SubmitForm()">提交</button>
		</div>
	</div>

	<message v-if="componentInfoObj.showMsg" :msg-send='componentInfoObj.sendMsg' />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ProduckData from '@/unilt/produck.json'
import message from '@/components/comp_message.vue'
import { PostAxios } from '@/unilt/PostAxiosUntli';

interface FormData {
	wechat: String | null,
	photo: String | null,
	price: Number | null,
	quota: Number | null,
	hash: String | null,
	project: String | null
}

interface ComponentInfoObj {
	sendMsg: string,
	showMsg: boolean
}

const postAxios = new PostAxios()
const ViewData = ref<FormData>()
const FormData = ref<FormData>({
	wechat: null,
	photo: null,
	price: null,
	quota: null,
	hash: null,
	project: null
})
const componentInfoObj = ref<ComponentInfoObj>({
	sendMsg: '',
	showMsg: false
})

const handleSubmit = (event: { preventDefault: () => void; }) => {
	event.preventDefault()
	ViewData.value = { ...FormData.value }
}

const SubmitForm = async () => {
	if (postAxios.validStateRetu(ViewData.value)) {
		postAxios.PostUser(ViewData.value)
		if(postAxios.PostUser(ViewData.value)){
			showMsgEvent('添加完成')
		}else{
			showMsgEvent('添加失败')
		}
	}
}
const showMsgEvent = (msg:string) => {
	componentInfoObj.value.showMsg = true
	componentInfoObj.value.sendMsg = msg
	setTimeout(() => {
		componentInfoObj.value.showMsg = false
	}, 1000)
}

</script>

<style lang="less" scoped>
.EntryForm {
	height: 80vh;
}

.formData {
	margin: 0 auto;
	padding: 40px 0;

	form {
		width: 300px;
		margin: 0 auto;

		input {
			border: 1px solid #c0c0c0;
		}

		.view {
			background: #c0c0c0;

			&:hover {
				background: #2182dd;
				color: white;
			}
		}

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}

	input,
	select {
		padding: 5px 10px;
	}

	span {
		text-align: left;
		width: 60px;
		display: inline-block;
	}
}

table {
	width: 100%;
	margin: 0 auto;
	text-align: center;


	th {
		width: 120px;
	}
}

.subStyle {
	width: 100%;
	text-align: center;
	padding: 20px 0;

	button {
		margin: 0 20px;
	}

	.submit {
		text-align: center;
		margin: 0 auto;
		background: rgb(4, 122, 55);
		color: white;

		&:hover {
			background: #06b600;
			color: #000;
		}
	}

	.submit_Clear {
		background: rgb(139, 46, 46);
		color: #ffffff;

		&:hover {
			background: #ff4010;
			color: #000000;
		}
	}
}

button {
	padding: 10px 30px;
	cursor: pointer;
	border-radius: 5px;
	border: none;
	transition: 0.4s;
}
</style>