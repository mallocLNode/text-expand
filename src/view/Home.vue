<template>
  <div class="home">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="输入想放大的字，更多功能，联系liya"
      v-model="textarea"
    >
    </el-input>
    <div style="padding: 10px 0">
      <el-button type="primary" icon="el-icon-minus" @click="minus"
        >缩小</el-button
      >
      <el-button type="primary"
        >放大<i class="el-icon-plus" @click="plus"></i
      ></el-button>
    </div>
    <div class="show" :style="{ fontSize: fontSize + 'px' }">
      {{ textarea }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      textarea: "",
      fontSize: 80,
    };
  },
  mounted() {},
  methods: {
    plus() {
      this.fontSize = this.fontSize + 4;
    },
    minus() {
      this.fontSize = this.fontSize - 4;
    },
  },
};
</script>
<style lang="less">
.home {
  padding: 20px;
  .show {
    font-weight: 500;
  }
}
</style>
