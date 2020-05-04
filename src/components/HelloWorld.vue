<template>
  <div class="hello">
    <div class="header">
      <h1>Graphic chart.js</h1>

      <a href="https://github.com/chartjs/Chart.js">
        https://github.com/chartjs/Chart.js
      </a>

      <b class="color-orange">stars 58.5k</b>
    </div>

    <div class="content">
      <div class="column"></div>
      <div class="column"><Chart :config="config" /></div>
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue';
import chartBarConfig from '../config/chartBar';

export default {
  name: 'HelloWorld',

  components: {
    Chart,
  },

  props: {
    msg: String,
  },

  data() {
    return {
      config: chartBarConfig(),
    };
  },

  mounted() {
    // let chart = this.config.data;
    // for (let i = 0; i < chart.datasets.length; i++) {
    //   chart.options.data[2].dataPoints.push({
    //     label: chart.options.data[0].dataPoints[i].label,
    //     y: chart.options.data[0].dataPoints[i].y + chart.options.data[1].dataPoints[i].y
    //   });
    // }
  },
};
</script>

<style lang="scss" scoped>
  .content {
    max-width: 66%;
    margin: 3% auto;
    display: flex;

    .column {
      width: 50%;
    }
  }

  .color-orange {
    color: orange
  }
</style>
