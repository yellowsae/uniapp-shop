<template>
  <!-- 轮播图 -->
  <view class="u-demo-block">
    <u-swiper
      :list="list3"
      previousMargin="70"
      nextMargin="70"
      circular
      height="300"
      :autoplay="true"
      radius="5"
      bgColor="#ffffff"
    ></u-swiper>
  </view>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
    };
  },
};
</script>

<style lang="scss">
.u-demo-block {
  margin-top: 45px;
}
</style>
