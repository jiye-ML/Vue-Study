<template>
  <div>
    <p class="title" @click="$listeners.other">父组件</p>
    <!-- 通过listener将，父组件的监听器传给子组件 -->
    <child2 v-on="$listeners"></child2>
  </div>
</template>
<script>

import Child2 from "./child2.vue";

export default {
  components: { Child2 },
  data() { return {}; },
  created() { console.log("child1", this.$listeners); } // {changeData: ƒ, another: ƒ, other: ƒ}
};
</script>

<style>

.title { margin-left: 10px; font-size: 16px; }

</style>
