<script setup>
import {useCounterStore} from  '@/piniaEx/counter'

const counterStore=useCounterStore()
console.log(counterStore)
</script>
<template>
    <div>
        <button @click="counterStore.increment">{{ counterStore.count }}</button>
    </div>
</template>