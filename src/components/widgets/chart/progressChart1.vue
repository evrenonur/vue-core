<template>
  <apexchart type="bar" height="70" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';

export default {
    data(){
        return{
      series: [
      {
        name: "Process 1",
        data: [44],
      },
    ],
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
          backgroundBarColors: [primary],
          backgroundBarOpacity: 0.2,
        },
      },
    },
    colors: [primary],
    stroke: {
      width: 0,
    },
    fill: {
      colors: [primary],
      type: "gradient",
      gradient: {
        gradientToColors: [primary],
      },
    },
  
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 1",
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "44%",
      style: {
        fontSize: "20px",
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Process 1"],
    },
    yaxis: {
      max: 100,
    },
   
    }
        }
    }
}
</script>