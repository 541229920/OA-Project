<template>
    <div class="container">
        <header :style="{ lineHeight: T }">
            <comp_header></comp_header>
        </header>
        <div class="views">
            <aside :style="{ top: T, width: L }">
                <comp_aside></comp_aside>
                <div class="tag" @click="ChangeViewBtn()"></div>
            </aside>
            <main :style="{ top: T, left: L }">
                <div class="windows">
                    <RouterView></RouterView>
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { ChangeState ,Top, Left, ChangeView } from '@/unilt/ChangeView'
import comp_aside from '@/components/comp_aside.vue'
import comp_header from '@/components/comp_header.vue'

let T = ref(Top)
let L = ref(Left)

let ChangeViewBtn = () => {
    if (ChangeState.value) {
        ChangeState.value = !ChangeState.value
        ChangeView('60px', '25px')
    }else{
        ChangeState.value = !ChangeState.value
        ChangeView('60px', '150px')
    }
}

</script>

<style lang="less" scoped>
.windows {
    // height: 1000px;
    background: white;
    border-radius: 10px;
}
</style>