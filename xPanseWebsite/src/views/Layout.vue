<template>
    <div class="outlayer">
        <div class="bgImage">
            <div class="headerContent">
                <header>
                    <span class="xpanse">xPanse Ventures</span>
                    <nav>
                        <div class="navMenu">
                            <RouterLink to="/">Home</RouterLink>
                            <RouterLink to="/profile">Profile</RouterLink>
                            <RouterLink to="/research">Research</RouterLink>
                            <RouterLink to="/About">About</RouterLink>
                        </div>
                    </nav>
                    <span>更换皮肤</span>
                </header>
            </div>
        </div>
    </div>
    <div class="outlayer">
        <main class="frameContent" >
            <RouterView />
        </main>
    </div>
</template>
<script lang="ts" setup>
import '../assets/Layout.less'

</script>
<style lang="less" scoped></style>