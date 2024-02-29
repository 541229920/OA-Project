import { ref } from "vue"


let ChangeState = ref(true)
let Top = ref('60px');
let Left = ref('150px');

function ChangeView(T: string, L: string) {
    Top.value = T
    Left.value = L
}


export { ChangeState,Top, Left, ChangeView }