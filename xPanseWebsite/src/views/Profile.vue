<template>
    <div>
        Profile
        <input type="file" ref="fileInput" @change="handleUpload">
        <img :src="AssetsUrl.GetJpgUrl(imgSrc)" v-if="imgSrc" />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import {GetAssetsUrl} from '@/uitls/assetsUrl'

const fileInput = ref(null)
const imgSrc = ref(null)
const AssetsUrl = new GetAssetsUrl()

const handleUpload = (e) => {
    const file = fileInput.value.files[0]
    const formData = new FormData();
    formData.append('image', file);
    axios.post('http://localhost:8080/api/xuser/upload', formData).then(() => {
        getImage();
    });
}

const getImage = () => {
    axios.get('http://localhost:8080/api/xuser/checkimage').then(res => {
        imgSrc.value =  res.data[0].filename;
    });
}
</script>