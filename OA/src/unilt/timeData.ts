import { ref, computed } from "vue";


export class TimeUnilt {

  public date = ref(new Date());

  IntervalTime() {
    return setInterval(() => {
      this.date.value = new Date()
    }, 1000);
  }

  getHMS() {
    this.IntervalTime()
    const H = ref(this.date.value.getHours())
    const M = ref(this.date.value.getMinutes())
    const S = ref(this.date.value.getSeconds())
    return {H,M,S}
  }
  
  DynamicTime() {
    this.IntervalTime()

    const displayTime = computed(() => {
      const h = this.date.value.getHours()
      const m = this.date.value.getMinutes()
      const s = this.date.value.getSeconds()
      return `${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}`
    })
    return { displayTime }
  }
}