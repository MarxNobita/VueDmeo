<template>
  <div class="recommend">
    <div v-for="item in recommends" class="testflex">
      <a :href="item.link">
        <img :src="item.image" />
        <!-- 注意v-bind -->
        <!-- <img src="@/localtest/test3.jpg" alt="" /> -->
        <!-- 这里不需要关联数据不需要v-bind -->
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
};
</script>

<style>
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* 与下面的testflex写法效果相同 */
}
/* .testflex {
  flex: 1;
} */
.recommend img {
  width: 65px;
  height: 65px;
  /* margin-right: 15px;
  margin-left: 10px; */
}
</style>