<template>
    <ul>
        <li>
            <RouterLink class="routerlink" :style="{ width: Left }" to="/">
                <span>
                    <viewIcon v-show="!state" />
                </span>数据看板
            </RouterLink>
        </li>
        <li>
            <RouterLink class="routerlink" :style="{ width: Left }" to="/EntryForm">
                <span>
                    <entryIcon v-show="!state" />
                </span>录入信息
            </RouterLink>
        </li>
        <li>
            <RouterLink class="routerlink" :style="{ width: Left }" to="/ViewPage">
                <span>
                    <viewPageIcon v-show="!state" />
                </span>查看信息
            </RouterLink>
        </li>
        <!-- <li>
            <RouterLink class="routerlink" :style="{ width: Left }" to="/ExportPage">
                <span>
                    <exportIcon v-show="!state" />
                </span>导出数据
            </RouterLink>
        </li> -->
        <li>
            <RouterLink class="routerlink" :style="{ width: Left }" to="/ViewProject">
                <span>
                    <exportIcon v-show="!state" />
                </span>项目数据库查看
            </RouterLink>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import viewIcon from '@/assets/iconfile/viewIcon.vue'
import viewPageIcon from '@/assets/iconfile/viewPageIcon.vue'
import entryIcon from '@/assets/iconfile/entryIcon.vue'
import exportIcon from '@/assets/iconfile/exportIcon.vue'
import { ChangeState } from '@/unilt/ChangeView'
import { ref, watch } from 'vue'

let state = ref(ChangeState.value)
let Left = ref('150px')

watch(ChangeState, (nValue) => {
    state.value = nValue
})

</script>

<style lang="less">
.routerlink {
    display: inline-block;
    line-height: 40px;
    padding: 10px 0;
    margin-bottom: 10px;
    text-align: center;
    transition: 0.4s;
    
    span {
        float: left;
        &::after {
            clear: both;
        }
    }

    path {
        transition: 0.4s;
        fill: rgb(159, 159, 159);
    }

    &:hover {
        background: #717171;
        color: white;

        path {
            fill: white;
        }
    }
}
</style>