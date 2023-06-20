<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Radar Chart </h4>
                  </div>
                  <div class="card-body">
                    <div id="radarchart">
                         <apexchart
                  height="350"
                  type="radar"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var danger = localStorage.getItem('danger_color') || '#f81f58';

export default {
    data(){
        return{
            series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }],
chartOptions:{
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },
    },
   
    labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",],
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColor: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    title: {
      text: "Radar with Polygon Fill",
    },
    responsive: [
      {
        breakpoint: 481,
        options: {
          plotOptions: {
            radar: {
              size: 100,
            },
          },
        },
      },
    ],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: danger,
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
    colors: [danger],
  

}
        }
    }
}
</script>