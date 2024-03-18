<script setup>
import { provide, ref } from "vue";
import roomMsgItem from "./room-msg-item.vue";

//顶层组件提供数据
provide("data-key", "this is room data");

//传递响应式数据
const count = ref(0);
provide("count-key", count);

//传递方法（谁的数据谁负责修改）
const setCount=()=>{
    count.value++
}
provide('setCount-key',setCount)

setTimeout(() => {
    
    count.value++
}, 3000);
</script>
<template>
  <div class="pgae">
    顶层组件
    <roomMsgItem />
  </div>
</template>
