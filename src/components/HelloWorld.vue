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
      <div class="column"><Chart :type="type" :data="data" :options="options" /></div>
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue';

const chartOptions = {
  legend: {
    display: true,
  },
  title: {
    display: true,
    text: 'Chart.js Bar Chart - Stacked',
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  responsive: true,
  scales: {
    xAxes: [{
      stacked: true,
    }],
    yAxes: [{
      stacked: true,
    }],
  },
};

const barChartData = {
  labels: ['dados consolidados', 'teste'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [5, 10],
      backgroundColor: ['blue', 'yellow'],
    },
    {
      label: 'Dataset 1',
      data: [30, 10],
      backgroundColor: ['red', 'black'],
    },
  ],

};

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
      type: 'bar', // was "line"
      data: barChartData,
      options: chartOptions,
    };
  },

  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  .content {
    max-width: 66%;
    margin: 10% auto;
    display: flex;

    .column {
      width: 50%;
    }
  }

  .color-orange {
    color: orange
  }
</style>
