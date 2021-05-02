<template>
  <div>Jchang274</div>
  <div>
    <el-button type="primary" round>
      <router-link to="/">主页</router-link>
    </el-button>
    &nbsp;&nbsp;
    <el-button type="primary" round>
      <router-link to="/about">关于</router-link>
    </el-button>
    &nbsp;&nbsp;
    <el-button type="primary" round>
      <router-link to="/hello">你好</router-link>
    </el-button>
  </div>
  <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
  </el-switch>
  <el-time-picker
    v-model="value1"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="任意时间点"
  >
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :disabled-hours="disabledHours"
    :disabled-minutes="disabledMinutes"
    :disabled-seconds="disabledSeconds"
    placeholder="任意时间点"
  >
  </el-time-picker>
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

//Switch开关
const makeRange = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
export default {
  data() {
    return {
      value: true,
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    };
  },
  methods: {
    // 如允许 17:30:00 - 18:30:00
    disabledHours() {
      return makeRange(0, 16).concat(makeRange(19, 23));
    },
    disabledMinutes(hour) {
      if (hour === 17) {
        return makeRange(0, 29);
      }
      if (hour === 18) {
        return makeRange(31, 59);
      }
    },
    disabledSeconds(hour, minute) {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59);
      }
    },
  },
};
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
</style>
