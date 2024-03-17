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

const deepData=ref({count:0,name:'chain'})
const refCount=ref(0)
console.log(refCount)
const setRefCount = () => {
  refCount.value++           
};
const changeName=()=>{
  name.value=name.value+'pc'
}

//单个数据监听
watch(refCount,(newval,oldval)=>{
  console.log('count watch',newval,oldval)
},
{
  //数据初始化时先执行一次
  immediate:true 
})
const name=ref('cp')
//多个数据监听
watch([refCount,name],([newval,newName],[oldval,oldName])=>{
  console.log('count name watch',[newval,newName],[oldval,oldName])
})
const list=ref([1,2,3,4,5,6,7,8])
const computedList=computed(()=>{
  return list.value.filter(item=>item>2)
})
//watch深度监听
//watch(deepData,(newval,oldval)=>{
//  console.log('deepData变化了',newval,oldval)
//},{
//  deep:true
//})

//深度监听
const changeDeepName=()=>{
   deepData.value.name+='china'
}
const changeDeepCount=()=>{
   deepData.value.count++
}
watch(
  ()=>deepData.value.name,
  (newval,oldval)=>{
    console.log('deepData.value.name 变化了',newval,oldval)
  }
)
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
  <div>
    <button @click="changeName">changeName</button>
  </div>
  <div>
    <button @click="changeDeepName">changeDeepName</button>
  </div>
  <div>
    <button @click="changeDeepCount">changeDeepCount</button>
  </div>
</template>
