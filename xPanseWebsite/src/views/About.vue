<template>
    <div>
        <canvas ref="canvas" width="200" height="200"></canvas>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
const canvas = ref(null)
const ctx = ref(null)

let dots = [];
let lines = [];


onMounted(()=>{
    
    generateCode()
    render()
})

watch(canvas, (newValue, oldValue) => {

    ctx.value = canvas.value.getContext('2d')

})

function generateCode() {
    // 随机生成0/1编码 
    let code = '';
    for (let i = 0; i < 100; i++) {
        code += Math.floor(Math.random() * 2);
    }
    decode(code);
}

function decode(code) {
    let x = 20;
    for (let char of code) {
        if (char === '0') {
            dots.push({ x, y: 100 });
        } else {
            lines.push({ x1: x, y1: 80, x2: x, y2: 120 });
        }
        x += 20;
    }
}

function render() {
    requestAnimationFrame(render);
    // 清空
    ctx.clearRect(0, 0, 300, 150);

    for (let dot of dots) {
        drawDot(dot);
    }
    for (let line of lines) {
        drawLine(line);
    }
}

function drawDot(dot) {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
    ctx.fill();
}

function drawLine(line) {
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();
}

</script>

<style lang="less" scoped></style>