<template>
  <div>
    <div>{{ $store.state.counter }}</div>
    <div>{{ $store.state.numbbb }}</div>
    <div>{{ $store.getters.counterSqu }}</div>
    <div>{{ $store.getters.morePower175Atm }}</div>
    <div>{{ $store.getters.morePower175AtmLength }}</div>
    <div>{{ $store.getters.morePowerppAtm(187) }}</div>
    <div>
      <ul>
        <li v-for="item in $store.state.atm">{{ item }}</li>
        <!-- 这里本来报错了，但是在设置中关闭了某个模式，便可以了 -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Testcount",
};
</script>
