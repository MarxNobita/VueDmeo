<template>
  <div id="home">
    <!-- <h2>主页</h2> -->
    <nav-bar class="home-nav">
      <template v-slot:center>吃啥</template>
    </nav-bar>
    <scroll
      class="content"
      ref="homescroll"
      :probe-type="3"
      @scroll="hiddenBacktop"
      :backTopTime="2000"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>

      <!-- 记得props绑定 -->
      <!-- <img src="@/localtest/test2.png" alt="" /> -->
      <!-- 滚不动的情况,新版本observeDOM要设置为true -->
      <tab-control
        class="tab-control"
        :titles="['人气', '精选', '新店']"
        @changeCurrentIndex="changeCurrentItem"
      ></tab-control>
      <goods-list
        class="goods-list"
        :good="goods[currentIndex].list"
      ></goods-list>
    </scroll>
    <!-- <back-top @click="backtoTop" v-show="isShowBackTop"></back-top> -->
    <!-- 新版的好像不用@click.native也可以了 -->
    <!-- 带有滚动的可以使用better-scroll插件，性能更高，还有弹窗效果 -->
    <!-- <ul>
      <li>哈哈1</li>
      <li>哈哈2</li>
      <li>哈哈3</li>
      <li>哈哈4</li>
      <li>哈哈5</li>
      <li>哈哈6</li>
      <li>哈哈7</li>
      <li>哈哈8</li>
      <li>哈哈9</li>
      <li>哈哈10</li>
      <li>哈哈11</li>
      <li>哈哈12</li>
      <li>哈哈13</li>
      <li>哈哈14</li>
      <li>哈哈15</li>
      <li>哈哈16</li>
      <li>哈哈17</li>
      <li>哈哈18</li>
      <li>哈哈19</li>
      <li>哈哈20</li>
      <li>哈哈21</li>
      <li>哈哈22</li>
      <li>哈哈23</li>
      <li>哈哈24</li>
      <li>哈哈25</li>
      <li>哈哈26</li>
      <li>哈哈27</li>
      <li>哈哈28</li>
      <li>哈哈29</li>
      <li>哈哈30</li>
      <li>哈哈31</li>
      <li>哈哈32</li>
      <li>哈哈33</li>
      <li>哈哈34</li>
      <li>哈哈35</li>
      <li>哈哈36</li>
      <li>哈哈37</li>
      <li>哈哈38</li>
      <li>哈哈39</li>
      <li>哈哈40</li>
      <li>哈哈41</li>
      <li>哈哈42</li>
      <li>哈哈43</li>
      <li>哈哈44</li>
      <li>哈哈45</li>
      <li>哈哈46</li>
      <li>哈哈47</li>
      <li>哈哈48</li>
      <li>哈哈49</li>
      <li>哈哈50</li>
      <li>哈哈51</li>
      <li>哈哈52</li>
      <li>哈哈53</li>
      <li>哈哈54</li>
      <li>哈哈55</li>
    </ul> -->
  </div>
</template>










<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
// 导入home.js

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/common/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

// import { Swiper, SwiperItem } from "components/common/swiper";   这样可能home里还是冗杂，所以我们再封装一次

export default {
  name: "Home",
  components: {
    NavBar,
    // Swiper,
    // SwiperItem,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    GoodsList,

    Scroll,
    BackTop,
  },

  // 永远记住组件的data是一个函数，这个要看源码，可能面试考,类似闭包，其实就是因为组件是抽象的，等到用组件
  // 的时候才会实例化，而如果一开始组件的data就定义为了
  // 一个对象，那么一开始data就被实例化了，那这样所有的组件公用一个对象，而我们应该是每次使用组件 都会实例化出一个新的对象
  data() {
    // 用于保存的服务器的数据
    return {
      // result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 无网状态下的数据

      /*
      goods: {
        pop: {
          page: 0,
          list: [
            {
              title: "光之国教练总队",
              name: "泰罗奥特曼",
              power: 180,
            },
          ],
        },
        news: {
          page: 0,
          list: [
            {
              title: "光之国武打教练",
              name: "雷欧奥特曼",
              power: 190,
            },
          ],
        },
        sell: {
          page: 0,
          list: [
            {
              title: "光之国屠夫",
              name: "艾斯奥特曼",
              power: 188,
            },
            {
              title: "光之国驸马爷",
              name: "爱迪奥特曼",
              power: 160,
            },
          ],
        },
      },
      */
      currentIndex: "pop",
      isShowBackTop: false,
    };
  },

  // 创建时就要发送网络请求了，所以created里
  created() {
    // 1.请求多个数据,代码量过多可以再封装一层，，然后都放到methods里,比如第二个就打算封装一下
    getHomeMultidata().then((res) => {
      // console.log(res);
      // this.result = res; 垃圾回收算法，不需要整个都要，可以只拿针对性的东西
      this.banners = res.data.data.banner.list;
      // console.log(res.data.data.banner.list);
      this.recommends = res.data.data.recommend.list;
      // console.log(this.banners);
    });
    this.getHomeGoodsInHome("pop");
    this.getHomeGoodsInHome("new");
    this.getHomeGoodsInHome("sell");
    setTimeout(() => {
      this.getHomeGoodsInHome(this.currentIndex);
      console.log('1')
    }, 3000)
    // this.$bus.$on("imageHomeLoad", () => {
    //   console.log("home接受到事件总线");
    // });
  },
  mounted() {
    // ???是这样做？
    // this.debounce(this.$refs.homescroll.refresh, 300);
    // // this.homeLoadMore();
    // this.event("homeLoadMore", () => {
    //   this.$refs.homescroll.refresh();
    //   console.log("home收到图片加载完成");
    // });
  },
  methods: {
    getHomeGoodsInHome(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods.pop);

        // 没有接口的情况下随便的实验数据
        /*
      this.goods["pop"].list = [
        {
          title: "光之国教练总队",
          name: "泰罗奥特曼",
          power: 180,
        },
      ];
      console.log(this.goods.pop);
      this.goods["news"].list = [
        {
          title: "光之国武打教练",
          name: "雷欧奥特曼",
          power: 190,
        },
      ];
      this.goods["sell"].list = [
        {
          title: "光之国屠夫",
          name: "艾斯奥特曼",
          power: 188,
        },
        {
          title: "光之国驸马爷",
          name: "爱迪奥特曼",
          power: 160,
        },
      ];*/
      });
    },

    /*
    事件监听相关的方法
    */
    changeCurrentItem(i) {
      console.log(i);
      // if (i == 0) {
      //   this.currentIndex = "pop";
      // } else {
      //   this.currentIndex = "sell";
      // }
      switch (i) {
        case 0:
          this.currentIndex = "pop";
          break;
        case 1:
          this.currentIndex = "new";
          break;
        case 2:
          this.currentIndex = "sell";
          break;
      }
    },
    backtoTop() {
      // console.log("home已收到");
      this.$refs.homescroll.scrollTo(0, 0);
      // 而这种是直接调用组件里封装的方法
      // this.$refs.homescroll.scroll.scrollTo(0, 0);
      // 这种是调用的组件里scroll对象的方法
      // 通过ref拿到
    },
    hiddenBacktop(position) {
      // console.log(position);
      // console.log("scroll触发到这个了");
      // if (position.y < -1000) this.isShowBackTop = true;
      // else this.isShowBackTop = false;//这样写麻烦
      this.isShowBackTop = position.y < -1000;
    },
    //这个 hiddenBacktop放到计算属性只会触发一次？

    // 没有防抖节流，还容易出现better-scroll的bug废弃掉，
    loadMore() {
      console.log("home里的上拉加载更多");
      this.getHomeGoodsInHome(this.currentIndex);
      setTimeout(() => {
        this.$refs.homescroll.finishPullUp();
      }, 2000);
      // this.$refs.homescroll.scroll.refresh();
      // 重新计算下高度，避免bug，但是新版好像不用考虑这个bug了
    },


    // homeLoadMore() {
    //   // this.$refs.homescroll.refresh();
    //   // console.log("home收到图片加载完成");
    //   this.debounce(this.$refs.homescroll.refresh(), 300);
    // },

    // 防抖函数
    debounce(func, delay = 200) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
  },
  // computed是依赖缓存的，对于任何复杂计算逻辑，最好使用这个而不是methods
  computed: {},
};
</script>









<style scoped>
/* 这个scoped属性必须存在，否则scroll不生效 */
#home {
  padding-top: 44px;
  padding-bottom: 44px;
}
.home-nav {
  background-color: pink;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.tab-control {
  position: sticky;
  top: 42px;
  background-color: white;
  z-index: 2;
}
.content {
  /* height: 550px; */
  height: calc(100vh - 93px);
  overflow: scroll;
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
/* 方法二 */
/* .content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
</style>
