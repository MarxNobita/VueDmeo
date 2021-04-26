<template>
  <div id="app">
    <tabbar>
      <tabbar-item>
        <template v-slot:item-img>
          <img slot="item-img" src=".\assets\img\tabbar\home.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">首页</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item-img>
          <img slot="item-img" src=".\assets\img\tabbar\chiquan.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">吃货圈</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item-img>
          <img slot="item-img" src=".\assets\img\tabbar\chihuo.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">吃货本货</div>
        </template>
      </tabbar-item>
      <tabbar-item>
        <template v-slot:item-img>
          <img slot="item-img" src=".\assets\img\tabbar\chihuo.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">吃货本货</div>
        </template>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/Tabbar";
import TabbarItem from "./components/tabbar/TabbarItem";

export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
/* @import url("./assets/css/base.css"); */
/* 也可以这种方法引用，但是不推荐 */
</style>
