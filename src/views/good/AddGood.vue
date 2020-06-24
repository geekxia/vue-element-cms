<template>
<div class="add-good">

  <h1>新增新商品</h1>

  <!-- 上传图片 -->
  <!-- action字符必须是图片上传的url地址 -->
  <el-upload
    class="upload-demo"
    action="http://localhost:9999/upload/img"
    :on-success='uploadSuccess'>
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      img: ''
    }
  },
  methods: {
    uploadSuccess(response) {
      console.log('res', response)
      this.img = response.data.url
    },
    addGood() {
      let data = {
        img: this.img,
        cate: '',
        name: ''
      }
      // 提交添加商品的接口
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
