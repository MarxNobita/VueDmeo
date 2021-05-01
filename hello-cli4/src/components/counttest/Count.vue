<template>
  <div>
    <!-- <button @click="$store.state.counter++">+</button>这样做不好，绕过了vuex的检测 -->
    <button @click="addCounter">+</button>
    <div>{{ $store.state.counter }}</div>
    <!-- <button @click="$store.state.counter--">-</button> -->
    <button @click="subCounter">-</button>
    <button @click="changeCounter(5)">+5</button>
    <button @click="changeCounter(10)">+10</button>
    <button @click="addAtm">添加奥特曼</button>
    <input v-model="$store.state.numbbb" />
  </div>
</template>
<script>
export default {
  name: "Count",
  methods: {
    addCounter() {
      this.$store.commit("addNumber");
    },
    subCounter() {
      this.$store.commit("subNumber");
    },
    changeCounter(n) {
      this.$store.commit("changeNumber", n);
    },
    addAtm() {
      let nAtm = {
        title: "光之巨人",
        name: "迪迦奥特曼",
        power: 178,
      };
      this.$store.commit("pushAtm", nAtm);
    },
  },
};
</script>
