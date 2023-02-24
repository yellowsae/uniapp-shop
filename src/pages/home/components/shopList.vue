<template>
  <!-- 宫格布局 -->
  <swiper
    indicatorActiveColor="#3c9cff"
    indicatorInactiveColor="rgb(999,999,999)"
    :indicator-dots="true"
    class="swiper"
  >
    <swiper-item>
      <u-grid col="5" class="grid" :border="false">
        <u-grid-item
          :customStyle="{ width: 150 + 'rpx', height: 150 + 'rpx' }"
          :key="index"
          :index="index + 9"
          v-for="(item, index) in swiperList"
        >
          <u-icon
            :customStyle="{ paddingTop: 10 + 'rpx' }"
            :size="30"
            :name="item"
          >
          </u-icon>
          <text class="grid-text">{{ "宫格" + (index + 1) }}</text>
        </u-grid-item>
      </u-grid>
    </swiper-item>
    <swiper-item>
      <u-grid col="5" class="grid" :border="false">
        <u-grid-item
          :customStyle="{ width: 150 + 'rpx', height: 150 + 'rpx' }"
          :key="index"
          :index="index + 9"
          v-for="(item, index) in swiperList"
        >
          <u-icon
            :customStyle="{ paddingTop: 10 + 'rpx' }"
            :size="30"
            :name="item"
          >
          </u-icon>
          <text class="grid-text">{{ "宫格" + (index + 1) }}</text>
        </u-grid-item>
      </u-grid>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  name: "shopList",
  data() {
    return {
      swiperList: [
        "integral",
        "kefu-ermai",
        "coupon",
        "gift",
        "scan",
        "pause-circle",
        "wifi",
        "email",
        "list",
      ],
    };
  },
};
</script>

<style lang="scss">
.swiper {
  height: 310rpx;
}

.grid {
  margin-top: 10px;
}

.grid-text {
  font-size: 12px;
  color: #909399;
  padding: 10rpx 0 20rpx 0rpx;
  /* #ifndef APP-PLUS */
  box-sizing: border-box;
  /* #endif */
}
</style>
