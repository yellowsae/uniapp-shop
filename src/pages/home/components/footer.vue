<template>
  <!-- footer -->
  <view class="footer">
    <u-tabbar
      :value="value1"
      @change="(name) => (value1 = name)"
      :fixed="true"
      :placeholder="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item
        text="首页"
        icon="home"
        name="home"
        @click="click1"
      ></u-tabbar-item>
      <u-tabbar-item
        text="我的"
        icon="account"
        :size="32"
        name="account"
        @click="click1"
      ></u-tabbar-item>
    </u-tabbar>
  </view>
</template>
<script>
export default {
  name: "footer",
  data() {
    return {
      value1: "home",
    };
  },
  methods: {
    click1(e) {
      console.log("click1", e);
    },
  },
};
</script>
