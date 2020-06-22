<template>
  <div class="app">

    <QfLayout></QfLayout>

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
