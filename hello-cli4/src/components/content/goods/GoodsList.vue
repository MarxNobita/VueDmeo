<template>
  <div class="goods-list">
    <goods-list-item
      :goodsItem="good"
      @listLoad="listLoadMethod"
    ></goods-list-item>
    <!-- {{ good }} -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    good: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    listLoadMethod() {
      // console.log("list收到了");
      this.$emit("homeImageLoad");
    },
  },
};
</script>
<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>