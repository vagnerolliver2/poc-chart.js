<template>
  <div class="hello">
      <h1>Exempla Graphic 1 - Chart.js</h1>

      <a href="https://github.com/chartjs/Chart.js">
        https://github.com/chartjs/Chart.js
      </a>

      <Chart :type="type" :data="data" :options="options" />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
