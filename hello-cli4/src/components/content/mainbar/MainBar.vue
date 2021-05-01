<template>
  <div>
    <tabbar>
      <tabbar-item link="/home" activeColor="pink">
        <template v-slot:item-img>
          <img src="~assets\img\tabbar\home.png" alt="" />
        </template>
        <template v-slot:item-img-select>
          <img src="~assets\img\tabbar\selecthome.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tabbar-item>
      <tabbar-item link="/cart">
        <template v-slot:item-img>
          <img src="~assets\img\tabbar\chiquan.png" class="item-img" alt="" />
        </template>
        <template v-slot:item-img-select>
          <img src="~assets\img\tabbar\selectchiquan.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>吃货圈</div>
        </template>
      </tabbar-item>
      <tabbar-item link="/profile">
        <template v-slot:item-img>
          <img src="~assets\img\tabbar\mine.png" alt="" />
        </template>
        <template v-slot:item-img-select>
          <img src="~assets\img\tabbar\selectmine.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div>吃货本货</div>
        </template>
      </tabbar-item>
      <!-- <tabbar-item>
        <template v-slot:item-img>
          <img slot="item-img" src=".\assets\img\tabbar\mine.png" alt="" />
        </template>
        <template v-slot:item-img-select>
          <img src=".\assets\img\tabbar\selectmine.png" alt="" />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">吃货本货</div>
        </template>
      </tabbar-item> -->
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  name: "MainBar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>