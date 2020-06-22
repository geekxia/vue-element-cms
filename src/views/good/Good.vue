<template>
<div class="good">

  <!-- 筛选 -->
  <div class="filter">
    <el-row type='flex' align='middle'>
      <el-col :span="3">
        <span>品类筛选：</span>
      </el-col>
      <el-col :span="7">
        <el-select v-model="cate" placeholder="请选择">
          <el-option
            v-for="item in cates"
            :key="item.id"
            :label="item.cate_zh"
            :value="item.cate">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

  </div>

  <!-- 表格 -->
  <div class="table">
    <el-table
      :data="goodList"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商品名称"
        align='center'
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="图片"
        align='center'
        width="120">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.img">
        </template>
      </el-table-column>
      <el-table-column
        prop="cate"
        align='center'
        label="品类"
        width="100">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        align='center'
        width="100">
        <template slot-scope='scope'>
          <span v-text='"￥"+scope.row.price'></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="上架时间"
        align='center'
        width="120">
      </el-table-column>
      <el-table-column
        prop="hot"
        label="是否热销"
        align='center'
        width="100">
        <template slot-scope='scope'>
          <span v-text='scope.row.hot ? "是" : "否"'></span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <!-- sizes, prev, pager, next, jumper, ->, total, slot -->
    <div class="page">
      <el-pagination
        background
        @current-change='currentChange'
        :current-page='page'
        layout="prev, pager, next, sizes"
        :total="100">
      </el-pagination>
    </div>

  </div>



</div>
</template>

<script>
import moment from 'moment'
export default {
  data: function() {
    return {
      cates: [],
      cate: '',
      page: 1,
      size: 3,
      goodList: []
    }
  },
  watch: {
    cate: function() {
      this.page = 1
      this.getList()
    }
  },
  mounted() {
    this.getList()
    this.$http.getCates({}).then(res=>{
      res.unshift({cate:'',cate_zh:'全部品类'})
      this.cates = res
    })
  },
  methods: {
    getList() {
      let params = {
        size: this.size,
        page: this.page,
        cate: this.cate
      }
      this.$http.getGoodList(params).then(res=>{
        console.log('商品列表', res)
        res.map((ele,idx)=>{
          res[idx].create_time = moment(ele.create_time).format('HH:mm:ss')
        })
        this.goodList = res
      })
    },
    handleClick(row) {
      console.log('row', row)
    },
    currentChange(page) {
      console.log('page', page)
      this.page = page
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
.good {
  background: white;
  .filter {
    padding: 15px 15px;
  }
  .table {
    padding: 15px;
    max-width: 800px;
  }
  .page {
    text-align: right;
    padding-top: 15px;
  }
  .img {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
}
</style>
