<template>
  <apexchart type="bar" height="70" ref="chart" :options="chartOptions" :series="series"></apexchart>
</template>
<script>

export default {
    data(){
        return{
         series: [{
            name: 'Process 4',
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
          backgroundBarColors: ["#4faad5"],
          backgroundBarOpacity: 0.2,
        },
      },
    },
    colors: ["#4faad5"],
    stroke: {
      width: 0,
    },
   
    fill: {
      colors: ["#4faad5"],
      type: "gradient",
      gradient: {
        gradientToColors: ["#4faad5"],
      },
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 4",
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
      categories: ["Process 4"],
    },
    yaxis: {
      max: 100,
    },
    }
        }
    }
}
</script>