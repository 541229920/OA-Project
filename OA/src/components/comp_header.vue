<template>
    <nav>
        <div class="left">xPanse Ventures OA 系统后台</div>
        <div class="rightMenu">
            <div class="loginUser">登录：尧二六</div>
            <div>时间：{{displayTime}}</div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { TimeUnilt } from '@/unilt/timeData'

const getTime = new TimeUnilt()

const { displayTime } = getTime.DynamicTime()
</script>
<style lang="less" scoped>
nav {
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
        font-size: 20px;
        font-weight: 800;
    }

    .rightMenu {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        .loginUser {
            margin: 0 20px;
        }
    }
}


// @media (max-width: 1000px) {
//     nav {
//         font-size: 30px;
//     }
// }
</style>