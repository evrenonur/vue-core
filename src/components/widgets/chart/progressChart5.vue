<template>
  <apexchart type="bar" height="70" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>

export default {
    data(){
        return{
          series: [{
            name: 'Process 5',
            data: [74]
        }],
    chartOptions: {
       chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#e6ae30"],
          backgroundBarOpacity: 0.2,
        },
      },
    },
    colors: ["#e6ae30"],
    stroke: {
      width: 0,
    },
    fill: {
      colors: ["#e6ae30"],
      type: "gradient",
      gradient: {
        gradientToColors: ["#e6ae30"],
      },
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 5",
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "74%",
      style: {
        fontSize: "20px",
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Process 5"],
    },
    yaxis: {
      max: 100,
    },
    }
        }
    }
}
</script>