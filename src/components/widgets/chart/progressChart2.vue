<template>
      <apexchart
      type="bar"
     height="70"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
</template>
<script>

export default {
    data(){
        return{
          series: [{
            name: 'Process 2',
            data: [80]
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
          backgroundBarColors: ["#eeb82f"],
          backgroundBarOpacity: 0.2,
        },
      },
    },
    colors: ["#eeb82f"],
    stroke: {
      width: 0,
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Process 2",
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "80%",
      style: {
        fontSize: "20px",
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Process 2"],
    },
    yaxis: {
      max: 100,
    },
    fill: {
      colors: ["#eeb82f"],
      type: "gradient",
      gradient: {
        inverseColors: false,
        gradientToColors: ["#eeb82f"],
      },
    },

    }
        }
    }
}
</script>