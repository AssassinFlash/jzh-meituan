<template>
  <view class="content">
    <!-- 定位 -->
    <view class="search-view">
      <image src="../../../static/coen/dingwei.svg" mode="widthFix"></image>
      <text class="search-text">阿里巴巴淘宝城2期西溪园区</text>
      <text>></text>
    </view>
    <!-- 搜索 -->
    <view class="search-cont">
      <view class="search">
        <image
          src="../../../static/coen/sousuo.svg"
          mode="widthFix"
          class="search-img"
        />
        <u-input
          type="text"
          :border="true"
          :disabled="true"
          placeholder="麻辣烫"
          class="ipt"
        />
      </view>
    </view>
    <!-- 自定义轮播 -->
    <view class="swiper">
      <swiper
        :autoplay="false"
        :interval="2000"
        :duration="500"
        @change="handleSwiperChange($event)"
      >
        <block v-for="(list, index) in swiperList" :key="index">
          <swiper-item>
            <view class="swiper-item">
              <block v-for="(item, i) in list" :key="i">
                <view class="swiper-img">
                  <image :src="item.img" mode="widthFix" />
                  <text>{{ item.title }}</text>
                </view>
              </block>
            </view>
          </swiper-item>
        </block>
      </swiper>
      <!-- 指示点
           @change事件：当swiper-item的位置发生改变时就会触发
       -->
      <view class="instruct-view">
        <block v-for="(listdata, k) in instructData" :key="k">
          <view class="instruct">{{ listdata }}</view>
        </block>
      </view>
    </view>
    <view v-for="(item, index) in testData" :key="index">{{ item.shop }}</view>
  </view>
</template>

<script>
import { swiperList, meituanTest } from "../../../common/easymock/api.js";
export default {
  data() {
    return {
      instructData: ["", ""], // 面板指示点
      swiperList: [], // 轮播数组
      testData: {},
    };
  },
  methods: {
    // 获取首页轮播图数据
    async getSwiperList() {
      const res = await swiperList();
      this.swiperList = res.swiperList;
      console.log(this.swiperList);
    },
    // 测试
    async test() {
      const res = await meituanTest();
      this.testData = res.data;
      console.log(this.testData);
    },
    // 处理轮播页发生改变的事件
    handleSwiperChange(event) {
      console.log(event);
    },
  },
  mounted() {
    this.getSwiperList();
    this.test();
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 15rpx;
}
// 定位
.search-view {
  height: 80rpx;
  font-size: 30rpx;
  font-weight: bold;
  display: flex;
  align-items: center;

  image {
    width: 35rpx;
    height: 35rpx;
  }

  .search-text {
    padding: 0 10rpx;
  }
}
// 搜索
.search-cont {
  height: 70rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .search {
    height: 70rpx;
    line-height: 70rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #eff3f4;
    border-radius: 10rpx;
    position: relative;

    .search-img {
      width: 40rpx;
      height: 40rpx;
      position: absolute;
      left: 10rpx;
      top: 16rpx;
    }

    .ipt {
      height: 70rpx;
      width: 100%;
      line-height: 70rpx;
      font-size: 25rpx;
      text-indent: 40rpx;
      color: #666666;
    }
  }
}
// 轮播
swiper {
  height: 320rpx !important;

  .swiper-item {
    height: 320rpx;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    .swiper-img {
      width: calc((100% / 5) -24rpx) !important;
      margin: 12rpx;
      text-align: center;
      position: relative;

      image {
        width: 70rpx;
        height: 70rpx;
        border-radius: 35rpx;
        display: block;
        margin: 10rpx auto;
      }
    }
  }
}
// 指示点
.instruct-view {
  margin-top: 10rpx;
  display: flex;
  justify-content: center;

  .instruct {
    width: 30rpx;
    height: 10rpx;
    border-radius: 5rpx;
    margin: 0 10rpx;
    background: #e6e6e6;
  }
}
.active {
  background: #fbae22 !important;
}
</style>
