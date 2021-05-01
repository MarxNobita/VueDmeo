<template>
  <!-- <div class="wrapper" ref="wrapper">
    <div class="content"> -->
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BSscroll from "@better-scroll/core";
// 以后不要安装独立的插件，像下面那个安装，不然耦合其他功能时会报错，并无法使用
import PullUp from "@better-scroll/pull-up";
import BSscroll from "better-scroll";

BSscroll.use(PullUp);
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    click: {
      type: Boolean,
      default: true,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
      // 这个需要设置为false，因为新版本这个设为true后默认probetype就是3了
    },
  },
  mounted() {
    //   1.创建对象
    this.scroll = new BSscroll(this.$refs.wrapper, {
      // probeType: this.probeType,
      probeType: this.probeType,
      click: this.click,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      // 新版本如果遇到滚不动的情况，要把这个设为ture
    });
    // 2.监听滚动位置
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    //   一键置顶的方法
    scrollTo(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullup() {
      this.scroll.finishPullup();
    },
  },
};
</script>
<style scoped>
</style>