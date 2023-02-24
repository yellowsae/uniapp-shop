<template>
  <view class="home">
    <Header />
    <Swiper />
    <shopList />
    <!-- 数据列表 -->
    <view class="u-page">
      <u-list @scrolltolower="scrolltolower">
        <u-list-item v-for="(item, index) in indexList" :key="index">
          <u-cell :title="`列表长度-${index + 1}`">
            <u-avatar
              slot="icon"
              shape="square"
              size="35"
              :src="item.url"
              customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
          </u-cell>
        </u-list-item>
      </u-list>
    </view>
    <Footer />
  </view>
</template>

<script>
import Header from "@/pages/home/components/header.vue";
import Swiper from "@/pages/home/components/swiper.vue";
import shopList from "@/pages/home/components/shopList.vue";
import Footer from "@/pages/home/components/footer.vue";

export default {
  components: {
    Header,
    Swiper,
    shopList,
    Footer,
  },
  data() {
    return {
      indexList: [],
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg",
      ],
    };
  },
  onLoad() {
    this.loadmore();
  },
  methods: {
    scrolltolower() {
      this.loadmore();
    },
    loadmore() {
      for (let i = 0; i < 15; i++) {
        this.indexList.push({
          url: this.urls[uni.$u.random(0, this.urls.length - 1)],
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
