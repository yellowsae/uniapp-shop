<template>
  <!-- header 导航栏 -->
  <u-navbar title="首页" :autoBack="true">
    <view class="n-nav-slot" slot="left">
      <u-icon name="list" color="#3c9cff" bold size="29"> </u-icon>
    </view>
  </u-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>
