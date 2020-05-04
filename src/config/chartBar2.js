import ChartBarOptions from './chartBarOptions';

export default () => ({
  ...ChartBarOptions(),

  data: {
    labels: ['Enviados'],
    datasets: [
      {
        label: 'a',
        data: [1500],
        backgroundColor: ['#d0cde1'],
        barPercentage: 0.5,
      },
      {
        label: 'b',
        data: [6000],
        backgroundColor: ['#8188a6'],
        barPercentage: 0.5,
      },
    ],
  },
});
