<template>
  <div class="border1">
    <h2>B 结点</h2>
    <ChildrenD />
    <ChildrenE />
  </div>
</template>

<script>

import ChildrenD from "./ChildrenD.vue";
import ChildrenE from "./ChildrenE.vue";

export default {
  components: { ChildrenD, ChildrenE }
};

</script>
