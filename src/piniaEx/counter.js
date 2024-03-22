
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";


const API_URL="https://geek.itheima.net/v1_0/channels"

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

/*

{
    "data": {
        "channels": [
            {
                "id": 0,
                "name": "推荐"
            },
            {
                "id": 1,
                "name": "html"
            },
            {
                "id": 2,
                "name": "开发者资讯"
            },
            {
                "id": 4,
                "name": "c++"
            },
            {
                "id": 6,
                "name": "css"
            },
            {
                "id": 7,
                "name": "数据库"
            },
            {
                "id": 8,
                "name": "区块链"
            },
            {
                "id": 9,
                "name": "go"
            },
            {
                "id": 10,
                "name": "产品"
            },
            {
                "id": 11,
                "name": "后端"
            },
            {
                "id": 12,
                "name": "linux"
            },
            {
                "id": 13,
                "name": "人工智能"
            },
            {
                "id": 14,
                "name": "php"
            },
            {
                "id": 15,
                "name": "javascript"
            },
            {
                "id": 16,
                "name": "架构"
            },
            {
                "id": 17,
                "name": "前端"
            },
            {
                "id": 18,
                "name": "python"
            },
            {
                "id": 19,
                "name": "java"
            },
            {
                "id": 20,
                "name": "算法"
            },
            {
                "id": 21,
                "name": "面试"
            },
            {
                "id": 22,
                "name": "科技动态"
            },
            {
                "id": 23,
                "name": "js"
            },
            {
                "id": 24,
                "name": "设计"
            },
            {
                "id": 25,
                "name": "数码产品"
            },
            {
                "id": 26,
                "name": "软件测试"
            }
        ]
    },
    "message": "OK"
}*/
  //getter定义
  const doubleCount=computed(()=>count.value*2)
  //异步action
  const list=ref([])
  const getList=async()=>{
     const res=await axios.get(API_URL)
     list.value=res.data.data.channels

  }

  return { count, increment,doubleCount,list,getList };
});