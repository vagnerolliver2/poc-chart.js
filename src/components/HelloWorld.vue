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
      <div class="column"><Chart :config="config" /></div>
      <div class="column"><Chart :config="config2" /></div>
      <div class="column"><Chart :config="config3" /></div>
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue';
import chartBarConfig1 from '../config/chartBar1';
import chartBarConfig2 from '../config/chartBar2';
import chartBarConfig3 from '../config/chartBar3';

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
      config: chartBarConfig1(),
      config2: chartBarConfig2(),
      config3: chartBarConfig3(),
    };
  },

  mounted() {},
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
