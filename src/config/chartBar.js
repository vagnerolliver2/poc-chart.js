import ChartDataLabels from 'chartjs-plugin-datalabels';

export default () => ({
  type: 'bar',

  plugins: [ChartDataLabels],

  options: {
    plugins: {
      datalabels: {
        color: '#000',
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
      enabled: true,
      mode: 'index',
      intersect: true,
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
          min: 0,
          max: 10000,
          stepSize: 2000,
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
        backgroundColor: ['#3e3d56', '#d0cde1', '#cdd0db'],
        barPercentage: 0.5,
      },
      {
        data: [500, 6000, 2800],
        backgroundColor: ['#b72126', '#8188a6', '#66637e'],
        barPercentage: 0.5,
      },
      {
        type: 'line',
        data: [8000, 7500, 4800],
        borderColor: 'transparent',
        // color: '#000000',
        // label: 'Total 8000',
        // borderCapStyle: 'round',
        // hidden: true,
        // backgroundColor: ['transparent', 'black', 'black'],
        // barPercentage: 1,
        fill: false,
        stepped: true,

      },
    ],
  },
});
