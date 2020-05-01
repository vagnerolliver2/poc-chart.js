<template>
  <div class="hello">
      <h1>Exempla Graphic 1 - Chart.js</h1>

      <a href="https://github.com/chartjs/Chart.js">
        https://github.com/chartjs/Chart.js
      </a>

      <canvas id="myChart" width="400" height="400"></canvas>

  </div>
</template>

<script>

import Chart from 'chart.js';

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Dataset 1',
    // backgroundColor: window.chartColors.red,
    stack: 'Stack 0',
  }, {
    label: 'Dataset 2',
    // backgroundColor: window.chartColors.blue,
    stack: 'Stack 0',
  }, {
    label: 'Dataset 3',
    // backgroundColor: window.chartColors.green,
    stack: 'Stack 1',
  }],

};
window.onload = () => {
  const ctx = document.getElementById('canvas').getContext('2d');
  window.myBar = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
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
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
};


export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
