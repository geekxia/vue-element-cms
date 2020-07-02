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
      <el-upload
        :show-file-list='false'
        :action="img.baseUrl+'/upload/img'"
        :on-success="success">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>

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
</div>
</template>

<script>
import img from '@/utils/img'
export default {
  data: function() {
    return {
      img,
      cates: [],
      good: {
        name: '',
        img: '',
        desc: '',
        hot: '',
        cate: '',
        price: ''
      },

    }
  },
  mounted() {
    this.$http.getCates({}).then(res=>{
      this.cates = res
    })
  },
  methods: {
    success(res) {
      console.log('图片上传成功', res)
      this.good.img = res.data.url
    },
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
