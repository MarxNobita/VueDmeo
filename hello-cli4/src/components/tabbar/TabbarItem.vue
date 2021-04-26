<template>
  <div class="tab-bar-item">
    <slot name="item-img"></slot>
    <slot name="item-text"></slot>
    <!-- <img src="..\..\assets\img\tabbar\home.png" alt="" />
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  /* 去除图片和文字之间的小空间 */
  margin-bottom: 3px;
}
</style>