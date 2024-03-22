<script setup>
import {useCounterStore} from  '@/piniaEx/counter'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const counterStore=useCounterStore()
console.log(counterStore)

//直接解构赋值 不是响应式
//const {count,doubleCount}=counterStore
//方法包裹（保持响应式更新）
const {count,doubleCount}=storeToRefs(counterStore)
//方法直接从counterStore中解构赋值
const {increment}=counterStore
onMounted(()=>{
    counterStore.getList()
})
</script>
<template>
    <div>
        <button @click="counterStore.increment">{{ count }}</button>
    </div>
    <div>
        <h1>{{ counterStore.doubleCount }}</h1>
    </div>
    <div>
        <ul>
            <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>