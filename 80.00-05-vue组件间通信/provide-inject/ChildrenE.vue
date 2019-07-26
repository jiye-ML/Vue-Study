<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }">E 结点</h3>
  </div>
</template>

<script>

export default {
  // 获取父组件通过provide提供的信息
  inject: {
    theme1: {
      from: "theme",
      default: () => ({})
    }
  }
};

</script>
