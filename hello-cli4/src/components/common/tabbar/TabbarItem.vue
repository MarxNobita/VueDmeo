<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <div v-if="isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-select"></slot></div> -->
    <div v-show="isActive"><slot name="item-img"></slot></div>
    <div v-show="!isActive"><slot name="item-img-select"></slot></div>
    <!-- 尽量用div包裹插槽，不把class名放到slot上，因为slot到时候替换，很可能无法正常引用css -->
    <!-- <div :class="{ active: !isActive }" > -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

    <!-- <img src="..\..\assets\img\tabbar\home.png" alt="" />
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      //必须是一个函数
      return this.$route.path.indexOf(this.link);
    },
    activeStyle() {
      //动态绑定style
      return this.isActive == false ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      console.log("这是打印");
      // this.$router.push()
      this.$router.replace(this.link);
    },
  },
};
</script>
<style>
/* 尽量不要使用scoped属性，这样style的样式就私有了 */
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
/* .item-img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  /* 去除图片和文字之间的小空间 */ /*
  margin-bottom: 3px;
} */
/* .active {
  /* 插槽的css在app.vue无法引用，所以需要一个div包裹起来 */
/* 想动态决定颜色 */ /*
  color: red;
} */
</style>