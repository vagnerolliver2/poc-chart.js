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

  data: {
    labels: ['Total', 'Enviados', 'Recebidos'],
    datasets: [
      {
        data: [7500, 1500, 2000],
        backgroundColor: ['#3e3d56', '#d0cde1', '#cdd0db', ''],
      },
      {
        data: [500, 6000, 2800],
        backgroundColor: ['#b72126', '#8188a6', '#66637e', ''],
      },
    ],
  },
});
