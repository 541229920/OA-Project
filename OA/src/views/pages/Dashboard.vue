<template>
	<div class="content">
		<div class="contentType headerText">
			<h2 class="hello">
				{{ 10 >= H >= 4 ? '早上好' : 14 >= H >= 10 ? '中午好' : 20 >= H >= 14 ? '晚上好' : '下午好' }}，尧二六🎉
			</h2>
			<div class="helloContent">
				<p>当前管理系统版本为 v 0.2.31 版本 </p>
				<p>更新内容：修复提交信息数据时卡顿问题，修复项目内容显示异常，修复看板基础功能显示异常，如使用时仍遇到问题，可联系管理员进行系统修复。
				</p>
			</div>
		</div>
		<div class="headerDash">
			<div class="dash">
				<svgUser /> 参与用户：{{ TotalUser }} 人
			</div>
			<div class="dash">
				<svgPro /> 项目数量：{{ ProLength }} 个
			</div>
			<div class="dash">
				<svgUsdt /> 捐赠额度：{{ TotalQuota }} USDT
			</div>
			<div class="dash">
				<svgStar /> 完成项目：{{ TotalQuota }} USDT
			</div>
		</div>

		<div class="contentType newView">
			<ul>
				<li v-for="item, index in [{ id: 1, content: 'xPanse Ventures 即将上市' }, { id: 1, content: 'Worldcoin管理层暗示“重大公告”即将到来' }, { id: 1, content: 'EigenLayer 已添加到项目留存库中' }, { id: 1, content: '机构押注再质押赛道！a16z 向 EigenLayer 注资一亿镁，币安宣布投资流动性再质押协议 Renzo' }, { id: 1, content: 'Coinbase阐述三大理由建议SEC批准灰度现货以太坊ETF' }]"
					:key="index">{{ index + 1 }}、{{ item.content }}</li>
			</ul>
		</div>

		<div class="contentType userList">
			?
		</div>

	</div>
</template>

<script setup lang="ts">
import svgUser from '@/assets/svgfiles/svg-User.vue'
import svgPro from '@/assets/svgfiles/svg-Project.vue'
import svgUsdt from '@/assets/svgfiles/svg-Usdt.vue'
import svgStar from '@/assets/svgfiles/svg-Star.vue'
import { GetAxios } from '@/unilt/GetAxiosUntli'
import { TimeUnilt } from '@/unilt/timeData'

const axiosApi = new GetAxios()
const getTime = new TimeUnilt()
const { TotalQuota, TotalUser } = axiosApi.viewUser()
const { ProLength } = axiosApi.viewPro()
const { H } = getTime.getHMS()
</script>

<style lang="less" scoped>
.contentType {
	padding: 20px 0;
}

.headerText {
	.hello {
		font-size: 25px;
		font-weight: 800;
	}

	.helloContent {
		padding: 20px 0;

		p {
			padding: 0;
			margin: 0;
			font-size: 14px;
		}
	}
}

.headerDash {
	border-bottom: 1px solid #f1f1f1;
	border-top: 1px solid #f1f1f1;
	padding: 40px 0;
	margin: 10px 0;
	display: flex;
	justify-content: space-between;

	.dash {
		font-weight: 500;
		display: flex;
		align-items: center;
	}
}

.newView {
	ul {
		max-height: 160px;
		overflow: auto;

		&::-webkit-scrollbar {
			width: 0;
		}

		li {
			height: calc(160px / 8);
			font-size: 14px;
			padding: 10px 0;
		}
	}
}
</style>@/unilt/GetAxiosEvent