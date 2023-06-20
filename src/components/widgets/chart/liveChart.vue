<template>
      <apexchart
      type="line"
     height="320"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
    data(){
        return{
       series: [
      {
        name: "TEAM A",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
      },
      {
        name: "TEAM B",
        type: "line",
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
      },
    ],
    chartOptions: {
     chart: {
      height: 320,
      type: "line",
      toolbar: {
          show: false
      }
    },
    stroke: {
      curve: "smooth",
    },
  
    fill: {
      colors: [primary, secondary],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    colors: [primary, secondary],
    labels: [ "01", "02", "03", "04", "05", "06", "07", "08", "09 ", "10", "11", "12",],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: "Series A",
        },
      },
      {
        opposite: true,
        title: {
          text: "Series B",
        },
      },
    ],
    grid:{
        yaxis:{
            lines:{
                show: false
            }
        }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    }
        }
    }
}
</script>