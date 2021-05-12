<template>
  <div class="home">
    <el-input
      type="textarea"
      :rows="2"
      placeholder="输入想放大的字"
      v-model="textarea">
    </el-input>
    <div class="show">
      {{textarea}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      textarea: ''
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less">
.home{
  padding: 20px;
  .show{
    font-size: 74px;
  }
}
</style>
