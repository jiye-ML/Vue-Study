<template>
  <div>
    <div>
      <h1>A 结点</h1>
      <button @click="() => changeColor()">改变color</button>
      <ChildrenB />
      <ChildrenC />
    </div>
  </div>
</template>

<script>

import Vue from "vue";
import ChildrenB from "./ChildrenB.vue";
import ChildrenC from "./ChildrenC.vue";

export default {
  components: { ChildrenB, ChildrenC },
  data() { return { color: "blue" }; },
  // provide() {
  //   return {
  //     theme: {
  //       color: this.color //绑定并不是可响应的
  //     }
  //   };
  // },
  // 提供给子组件，子组件通过inject获取
  provide() { return { theme: this }; },
  methods: {
    changeColor(color) {
      if (color) { this.color = color; }
      else { this.color = this.color === "blue" ? "red" : "blue"; }
    }
  }
};

</script>

<style scoped></style>
