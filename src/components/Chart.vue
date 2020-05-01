<template>
  <div class="home">
    <canvas id="chart" ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'Chartist',

  props: ['type', 'data', 'options'],

  mounted() {
    if (this.data && this.options) {
      const chartData = {
        type: this.type,
        data: this.data,
        options: this.options,
      };

      this.createChart(chartData);
      // Reference to DOM Node where you will render chart using Chartist
      // const divNode = this.$refs.chartNode;

      // Example of drawing Line chart
      // this.chartInstance = new Chart(this.$refs.chartNode, {
      //   type: this.data,
      //   data: this.data,
      //   options: this.options,
      // });

      // this.chartInstance = new Chart(divNode, this.data, this.options);
    }
  },

  // IMPORTANT: Vue.js is Reactive framework.
  // Hence watch for prop changes here
  // watch: {
  //   data(newData) {
  //     this.chartInstance.update(newData, this.options);
  //   },

  //   options(newOpts) {
  //     this.chartInstance.update(this.data, newOpts);
  //   },
  // },

  methods: {
    createChart({ type, data, options }) {
      return new Chart(this.$refs.chart, { type, data, options });
    },
  },

};
</script>


<style lang="scss">
 </style>
