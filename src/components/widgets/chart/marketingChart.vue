<template>
     <apexchart
      type="bar"
     height="380"
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
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chartOptions: {
     legend: {
      show: false,
    },
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: false
        }
    },
    plotOptions: {
      bar: {
        radius: 10,
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      colors: ["transparent"],
      curve: "smooth",
      lineCap: "butt",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    xaxis: {
      categories: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",  "Nov", "Dec",],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      colors: [primary, secondary, "#51bb25"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    }
        }
    }
}
</script>