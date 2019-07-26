<template>
  <div class="border">
    <p>boo: {{ boo }}</p>
    <p>childCom2: {{ $attrs }}</p>
    <!-- 通过下面方式，把不在props中的属性传入子组件 -->
    <child-com3 v-bind="$attrs"></child-com3>
  </div>
</template>
<script>

import childCom3 from "./childCom3.vue"

export default {
  components: {
    childCom3
  },
  inheritAttrs: false,
  props: {
    boo: String
  },
  created() {
    console.log(this.$attrs); // {"coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>
<style scoped>
.border {
  border: 1px solid red;
}
</style>
