<template>
       <apexchart type="bubble" height="320" ref="chart" :options="chartOptions" :series="series" ></apexchart>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
     data(){
        return{
  series: [
      {
        name: "Bubble1",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble2",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble3",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: "Bubble4",
        data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
         chartOptions: {
            chart: {
      toolbar: {
        show: false,
      },
      height: 320,
      type: "bubble",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.7,
        stops: [0, 100],
      },
    },
    colors: [
      primary,
      secondary,
      "#51bb25",
      "#4faad5",
    ],
    title: {
      text: "Simple Bubble Chart",
    },
    xaxis: {
      tickAmount: 12,
      type: "category",
    },
    yaxis: {
      max: 70,
    },
         }
        }
    },
    methods:{
        generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
    }
}
</script>