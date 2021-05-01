<template>
  <div>
    <h2>吃货圈</h2>
    <div class="wrapper">
      <ul class="content">
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
        <li>哈哈56</li>
        <li>哈哈57</li>
        <li>哈哈58</li>
        <li>哈哈59</li>
        <li>哈哈60</li>
        <li>哈哈61</li>
        <li>哈哈62</li>
        <li>哈哈63</li>
        <li>哈哈64</li>
        <li>哈哈65</li>
        <li>哈哈66</li>
        <li>哈哈67</li>
        <li>哈哈68</li>
        <li>哈哈69</li>
        <li>哈哈70</li>
        <li>哈哈71</li>
        <li>哈哈72</li>
        <li>哈哈73</li>
        <li>哈哈74</li>
        <li>哈哈75</li>
        <li>哈哈76</li>
        <li>哈哈77</li>
        <li>哈哈78</li>
        <li>哈哈79</li>
        <li>哈哈80</li>
        <li>哈哈81</li>
        <li>哈哈82</li>
        <li>哈哈83</li>
        <li>哈哈84</li>
        <li>哈哈85</li>
        <li>哈哈86</li>
        <li>哈哈87</li>
        <li>哈哈88</li>
        <li>哈哈89</li>
        <li>哈哈90</li>
        <li>哈哈91</li>
        <li>哈哈92</li>
        <li>哈哈93</li>
        <li>哈哈94</li>
        <li>哈哈95</li>
        <li>哈哈96</li>
        <li>哈哈97</li>
        <li>哈哈98</li>
        <li>哈哈99</li>
        <li>哈哈100</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import BSscroll from "@better-scroll/core";
// 以后不要安装独立的插件，像下面那个安装，不然耦合其他功能时会报错，并无法使用
import PullUp from "@better-scroll/pull-up";
import BSscroll from "better-scroll";

BSscroll.use(PullUp);
// 因为第一种拆分组件的会报错，所以就用这种了
// BS.use(PullUp);
export default {
  name: "Cart",
  data() {
    return {
      scroll: null,
    };
  },
  created() {
    // new BSscroll(".content", {});    这样是拿不到数据的，因为组件创建时还没得到，所以应该在mounted里面
  },
  mounted() {
    let bs = new BSscroll(document.querySelector(".wrapper"), {
      // let bs = new BS(document.querySelector(".wrapper"), {
      // probeType   0和1不侦测，2是手指滑动侦测，惯性滑动不侦测，3是手指滑动惯性滑动都侦测
      probeType: 3,
      click: true,
      // better-scroll默认会屏蔽掉监听事件，所以这个click要设置为true
      // mouseWheel: true,
      pullUpLoad: true,
      // 只有这个开启时这个上拉功能才有
    });
    bs.on("scroll", (position) => {
      // console.log(position);
    });
    bs.on("pullingUp", () => {
      console.log("上拉加载更多");
      // 这个事件只会触发一次，监听到时开始发送网络请求，等数据请求完成后，能让它进行下一次请求
      // 必须要用finishiPullUp（）函数进行下一次
      // 为了避免过于频繁，设置一个定时器
      setTimeout(() => {
        bs.finishPullUp();
      }, 2000);
      // bs.finishPullUp();
    });
  },
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>