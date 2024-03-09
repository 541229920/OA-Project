import { ref } from 'vue';
import axios from 'axios';
import { Api } from './PublicApi';

interface FormData {
    hash: String | null,
    photo: String | null,
    price: Number | null,
    quota: Number | null,
    wechat: String | null,
    project: String | null
}

export class PostAxios {

    validStateRetu(obj: FormData) {
        const { wechat, photo, price, project, quota, hash } = obj
        return [wechat, photo, price, project, quota, hash].every(Boolean);
    }


    PostUser(value: any) {
        axios.post(Api.GroupApi + '/buyer/addbuyer', value).then(res => { return true }).catch(err => { return false })
    }
}