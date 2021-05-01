<template>
  <div class="back-top">
    <img src="~assets/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "BackTop",
  //   methods: {
  //     backtotop() {
  //       console.log("回到顶部");
  //       this.$emit("backTop");
  //     },
  //   },
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.back-top img {
  height: 43px;
  width: 43px;
}
</style>