import ChartBarOptions from './chartBarOptions';


export default () => ({
  ...ChartBarOptions(),

  data: {
    labels: ['Total'],
    datasets: [
      {
        label: 'a',
        data: [7500],
        backgroundColor: ['#3e3d56'],
        barPercentage: 0.5,
      },
      {
        label: 'b',
        data: [500],
        backgroundColor: ['#b72126'],
        barPercentage: 0.5,
      },
    ],
  },
});
