<template>
  <!-- <div class="wrapper" ref="wrapper">
    <div class="content"> -->
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
    <back-top @click="returnTop(backTopTime)" v-show="isShowBT"></back-top>
    <img src="@/localtest/test1.png" class="testImg" alt="" />
  </div>
</template>

<script>
// import BSscroll from "@better-scroll/core";
// 以后不要安装独立的插件，像下面那个安装，不然耦合其他功能时会报错，并无法使用
import PullUp from "@better-scroll/pull-up";
import BSscroll from "better-scroll";
import BackTop from "components/common/backtop/BackTop";

BSscroll.use(PullUp);
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      isShowBT: false, //用来确定置顶按钮是否出现
    };
  },
  components: {
    BackTop,
  },
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
      // 这个需要设置为false，因为新版本这个设为true后默认probetype就是3了，这样所有组件监听时刻打开
    },
    backTopTime: {
      type: Number,
      default: 400,
      // 返回顶部的时间，默认为400ms
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
      // this.$emit("scroll", position);
      this.isShowBT = position.y < -1000;
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
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 直接置顶的更暴力封装
    returnTop(t) {
      console.log("组件内的回到顶部点击");
      this.scroll.scrollTo(0, 0, t);
    },
    refresh() {
      console.log("refresh被调用");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
<style scoped>
/* .backtop {
  display: fixed;
} */
.testImg {
  position: fixed;
  right: 0px;
  top: 80px;
  z-index: 99;
  width: 150px;
  height: 150px;
}
</style>