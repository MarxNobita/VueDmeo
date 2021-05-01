<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      @click="changeIndex(index)"
    >
      <span :class="{ active: index == currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    changeIndex(i) {
      this.currentIndex = i;
      // console.log(i);
      this.$emit("changeCurrentIndex", i);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background: white;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: pink;
  border-bottom: 3px solid pink;
  padding: 5px;
}
</style>
