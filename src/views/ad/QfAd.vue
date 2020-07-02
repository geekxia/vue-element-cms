<template>
  <div class="ad">
    <div>
      <el-button @click='show=true'>新增</el-button>
    </div>
    <!-- 表格 -->
    <div>
      <el-table
        :data="adArr"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
          <template slot-scope='scope'>
            <img class="ad-img" :src="img.baseUrl+scope.row.src">
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 弹框 -->
    <el-dialog title="新增广告" :visible.sync="show" @close='close'>
      <!-- 中间表单区域 -->
      <div>
        <el-input v-model='title'></el-input>

        <el-upload
          :file-list="fileList"
          :action="img.baseUrl+'/api/upload/img'"
          :on-success="success">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
      <!-- 底部按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import img from '@/utils/img'
export default {
  name: 'QfAd',
  data: function() {
    return {
      img,
      adArr: [],
      show: false,
      fileList: [],
      title: '',   // 新增广告的title
      src: '',     // 新增广告的src
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 获取广告列表
      this.$http.getAds({}).then(res=>{
        console.log('广告列表', res)
        this.adArr = res
      })
    },
    reset() {
      this.show = false
      this.title = ''
      this.src = ''
      this.fileList = []
    },
    success(res) {
      console.log(res)
      this.src = res.data.url
    },
    close() {
      this.reset()
    },
    // 提交 新增
    submit() {
      let data = {
        title: this.title,
        src: this.src
      }
      this.$http.createAd(data).then(()=>{
        this.reset()
        this.init()
      })
    },
    // 删除一条广告
    remove(item) {
      console.log(item)
      let params = {
        id: item._id
      }
      this.$http.deleteAd(params).then(()=>{
        this.init()
      })
    }
  }
}
</script>

<style lang="scss">
.ad {
  padding: 20px;
  background-color: white;
}
.el-upload {
  margin-top: 20px;
}
.ad-img {
  display: inline-block;
  height: 50px;
}
</style>
