import ChartBarOptions from './chartBarOptions';

export default () => ({
  ...ChartBarOptions(),

  data: {
    labels: ['Recebidos'],
    datasets: [
      {
        label: 'a',
        data: [2000],
        backgroundColor: ['#3e3d56'],
        barPercentage: 0.5,
      },
      {
        label: 'b',
        data: [2800],
        backgroundColor: ['#66637e'],
        barPercentage: 0.5,
      },
    ],
  },
});
