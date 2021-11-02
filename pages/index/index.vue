<template>
  <view>
    <Search></Search>
    <Preference></Preference>
    <Nearby></Nearby>
    <Delicacy></Delicacy>
    <Takeout></Takeout>
  </view>
</template>

<script>
// 引进子组件
import Search from "../../components/index/search/search.vue";
import Preference from "../../components/index/preference/preference.vue";
import Nearby from "../../components/index/nearby/nearby.vue";
import Delicacy from "../../components/index/delicacy/delicacy.vue";
import Takeout from "../../components/index/takeout/takeout.vue";
export default {
  components: {
    Search,
    Preference,
    Nearby,
    Delicacy,
    Takeout,
  },
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>

<style></style>
