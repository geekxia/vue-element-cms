<template>
  <div class="app">

    <!-- 登录页面 -->
    <router-view name='login' v-if='$route.path=="/login"'></router-view>

    <!-- 系统内部页面 -->
    <QfLayout v-else></QfLayout>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    QfLayout: ()=>import('@/components/common/layout/QfLayout.vue')
  }

}
</script>

<style lang="scss">

html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
}
</style>
