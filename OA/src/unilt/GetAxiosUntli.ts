import { ref } from 'vue'
import axios from 'axios'
import { Api } from './PublicApi';

export class GetAxios {

    viewUser() {
        let getAxiosData = ref([])
        let TotalQuota = ref(0)
        let TotalUser = ref(0)
        axios.get(Api.GroupApi + '/viewuser').then(respones => {
            
            getAxiosData.value = respones.data
            TotalUser.value = getAxiosData.value.length

            let n = 0;
            for (let i in respones.data) {
                let a = Number(respones.data[i].quota)
                n += a
            }
            TotalQuota.value = n
        })
        return { getAxiosData, TotalQuota, TotalUser }
    }

    viewPro() {
        let getProData = ref([])
        let ProLength = ref(0)
        axios.get(Api.GroupApi + '/viewpro').then(respones => {
            getProData.value = respones.data
            ProLength.value = respones.data.length
        })
        return {
            getProData, ProLength
        }
    }
}