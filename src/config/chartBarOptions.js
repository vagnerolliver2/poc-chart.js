import ChartDataLabels from 'chartjs-plugin-datalabels';

export default () => ({
  type: 'bar',

  plugins: [ChartDataLabels],

  options: {
    plugins: {
      datalabels: {
        color: '#fff',
        font: { weight: 'bold' },
      },
    },

    legend: {
      display: false,
    },

    title: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    responsive: true,

    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        },
      }],

      yAxes: [{
        stacked: true,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
        },
        barPercentage: 0.1,
      }],
    },

  },
});
