<template>
<div class="add-good">

  <h1>新增新商品</h1>
  <div>
    <el-row>
      <span>商品名称：</span>
      <el-input v-model="good.name" placeholder="请输入内容"></el-input>
    </el-row>
    <el-row>
      <span>商品图片：</span>
      <el-input v-model="good.img" placeholder="请输入内容"></el-input>
    </el-row>
    <el-row>
      <span>商品描述：</span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="good.desc">
      </el-input>
    </el-row>
    <el-row>
      <span>是否热销：</span>
      <el-switch
        v-model="good.hot"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </el-row>
    <el-row>
      <span>选择品类：</span>
      <el-select v-model="good.cate" placeholder="请选择">
        <el-option
          v-for="item in cates"
          :key="item._id"
          :label="item.cate_zh"
          :value="item.cate">
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-button type="primary" @click='confirm'>确认添加</el-button>
    </el-row>

  </div>

  <!-- 上传图片 -->
  <!-- action字符必须是图片上传的url地址 -->
  <!-- <el-upload
    class="upload-demo"
    action="http://localhost:9999/upload/img"
    :on-success='uploadSuccess'>
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload> -->
</div>
</template>

<script>
export default {
  data: function() {
    return {
      img: '',
      good: {
        name: '',
        img: '',
        desc: '',
        hot: '',
        cate: '',
        price: ''
      },
      cates: []
    }
  },
  mounted() {
    this.$http.getCates({}).then(res=>{
      this.cates = res
    })
  },
  methods: {
    // uploadSuccess(response) {
    //   console.log('res', response)
    //   this.img = response.data.url
    // },
    confirm() {
      this.$http.addGood(this.good).then(()=>{
        this.good = {
          name: '',
          img: '',
          desc: '',
          hot: '',
          cate: '',
          price: ''
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-good {
  max-width: 500px;
  margin: 0 auto;
  .el-row {
    margin-top: 20px;
  }
}
</style>
