<template>
<div class="aside">
  <h1>LOGO</h1>
  <!-- @open="handleOpen" -->
  <!-- @close="handleClose" -->
  <el-menu
    default-active="0"
    unique-opened
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open='menuSelect'
    >
      <!-- 一级菜单 -->
      <el-submenu v-for='(nav,index) in navs' :index="index+''" :key='nav.id'>
        <template slot="title">
          <i :class="nav.icon"></i>
          <router-link :to='nav.path' tag='span' v-text='nav.title' exact-active-class='on'></router-link>
        </template>

        <!-- 二级菜单 -->
        <!-- <el-menu-item-group> -->
          <el-menu-item
            v-for='item in nav.children'
            :key='item.id'
            :index="item.id+''"
          >
            <template >
              <i :class="item.icon"></i>
              <router-link :to='item.path' tag='span' v-text='item.title'></router-link>
            </template>
          </el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
  </el-menu>
</div>
</template>

<script>

import navs from '@/utils/navs'

export default {
  data: function() {
    return {
      navs
    }

  },
  methods: {
    menuSelect(idx) {
      console.log(idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  &>h1 {
    text-align: center;
    line-height: 50px;
  }
  .on {
    color: #ffd04b;
  }
}
</style>
