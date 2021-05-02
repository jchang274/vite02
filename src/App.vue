<template>
  <div>Jchang274</div>
  <br />

  <div>
    <router-link to="/">
      <el-button type="primary" round>主页 </el-button>
    </router-link>
    &nbsp;&nbsp;

    <router-link to="/about">
      <el-button type="primary" round>关于</el-button>
    </router-link>
    &nbsp;&nbsp;

    <router-link to="/hello">
      <el-button type="primary" round>你好 </el-button>
    </router-link>
    &nbsp;&nbsp;

    <router-link to="/echart">
      <el-button type="primary" round>图表0</el-button>
    </router-link>
    &nbsp;&nbsp;

    <router-link to="/echart1">
      <el-button type="primary" round>图表1</el-button>
    </router-link>
  </div>
  <br />

  <!-- ########## 走马灯 -->
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
      
    </el-carousel-item>
  </el-carousel>

  <!-- ########## Router显示 -->
  <router-view></router-view>

  <!-- 备案号 -->
  <p align="center">
    <a href="http://beian.miit.gov.cn/" style="color: #636363" target="_blank"
      >滇ICP备2021002626号</a
    >
  </p>
</template>




<script>
//引用组件参考示例
//import HelloWorld from './components/HelloWorld.vue'
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* ########## 走马灯 Style */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
