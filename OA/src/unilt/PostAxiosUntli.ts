import { ref } from 'vue';
import axios from 'axios';
import { Api } from './PublicApi';

export class PostAxios {

    PostUser(value: any) {
        axios.post(Api.GroupApi + '/adduser', value).then(res => {
            return res
        }).catch(err => { return err })
    }
}