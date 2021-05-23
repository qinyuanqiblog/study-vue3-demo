<template>
  <div id="app">
    {{name}}
    <p>{{age}}</p>
    <button @click="plusOne()">+</button>
  </div>
  <ul>
    <li
      v-for="(item,index) in array"
      :key="index"
    >{{item}}</li>
  </ul>
</template>
 
<script>
import { ref, watch, reactive, watchEffect } from 'vue'
export default {
  name: 'app',

  setup() {
    //名字
    // const name = ref('搞死你呀的')
    const name = ref('小妹妹')





































    
































































    // const array = reactive([1, 2, 3, 4, 5, 6])
    const array = ref([1, 2, 3, 4, 5, 6])
    let copyArray = ref([])
    copyArray.value = array
    //年纪
    const age = ref(18)

    // 使用watch
    // watch(array, (newValue, oldValue) => {
    //   debugger
    // })
    watchEffect(() => {
      debugger
      console.log('watchEffect ', array.value)
    })
    // 方法
    function plusOne() {
      name.value = '小哥哥'
      array.value.push(9)
      console.log('this', this)
      console.log('array', array)
      console.log('copyArray', copyArray)
      console.log('copyArray.value', copyArray.value)
      age.value++ //想改变值或获取值 必须.value
    }
    //必须返回 模板中才能使用
    return {
      name,
      age,
      array,
      copyArray,
      plusOne,
    }
  },
}
</script>
