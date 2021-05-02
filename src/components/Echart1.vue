<template>
  <div class="wrapper">
    <BarChart class="chart" />
  </div>
</template>

<script setup>
import BarChart from "./BarChart.vue";
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.wrapper .chart {
  width: 50%;
  height: 70%;
}
</style>
