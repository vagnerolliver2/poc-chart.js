<template>
  <div class="home">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'Chartist',

  props: ['config'],

  mounted() {
    if (this.config) {
      const { config } = this;
      this.createChart({ config });
    }
  },

  methods: {
    createChart({ config }) {
      const {
        type, plugins, data, options,
      } = config;

      return new Chart(this.$refs.chart, {
        plugins,
        type,
        data,
        options,
      });
    },
  },

};
</script>


<style lang="scss">
 </style>
