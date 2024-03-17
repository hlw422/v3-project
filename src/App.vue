<!--<script>
export default{
  setup(){
    console.log('set up',this)
    const message='this is a message'
    const logMessage=()=>{
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  }
}
</script>
-->
<!--语法糖-->
<script setup>
import { computed, reactive } from "vue";
import { ref,watch} from "vue";
const message = "this is a message";
const logMessage = () => {
  console.log(message);
};
const state = reactive({
  count: 0,
});
const setCount = () => {
  state.count++;
};
const refCount=ref(0)
console.log(refCount)
const setRefCount = () => {
  refCount.value++           
};

//单个数据监听
watch(refCount,(newval,oldval)=>{
  console.log('count watch',newval,oldval)
})
const name=ref('cp')
//多个数据监听
watch(refCount,(newval,oldval)=>{
  console.log('count watch',newval,oldval)
})
const list=ref([1,2,3,4,5,6,7,8])
const computedList=computed(()=>{
  return list.value.filter(item=>item>2)
})

setTimeout(() => {
  list.value.push(9,10)
}, 3000);
</script>
<script setup></script>
<template>
  <div>vue</div>
  <div>
    {{ message }}
    <button @click="logMessage">log</button>
  </div>
  <div>
    <button @click="setCount">{{ state.count }}</button>
  </div>
  <div>
    <button @click="setRefCount">{{ refCount }}</button>
  </div>
  <div>
{{ computedList }}
  </div>
</template>
