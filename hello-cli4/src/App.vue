<template>
  <div id="app">
    <router-view></router-view>
    <main-bar></main-bar>
    <!-- <swiper>
      <swiper-item></swiper-item>
    </swiper> 写到home里了-->
    <!-- <count></count>
    <testcount></testcount> -->
  </div>
</template>

<script>
// import MainBar from "./components/MainBar";
import MainBar from "components/content/mainbar/MainBar";

import Count from "@/components/counttest/Count";
import Testcount from "./components/counttest/Testcount.vue";

export default {
  name: "App",
  components: {
    MainBar,
    Count,
    Testcount,
  },
};
</script>

<style>
/* @import url("./assets/css/base.css"); */
/* 也可以这种方法引用，但是不推荐 */
/* .item-img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  /* 去除图片和文字之间的小空间 */ /*
  margin-bottom: 3px;
} */
</style>
