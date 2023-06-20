<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Radial Bar Chart</h4>
                  </div>
                  <div class="card-body">
                    <div id="circlechart">
                         <apexchart
                  height="380"
                  type="radialBar"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
var success = localStorage.getItem('success_color') || '#61ae41';
var warning = localStorage.getItem('warning_color') || '#e6ae30';
export default {
    data(){
        return{
            series: [44, 55, 67, 83],
            chartOptions:{
                  chart: {
      height: 380,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return 249;
            },
          },
        },
      },
    },
    responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    colors: [secondary, success, warning, primary,],
            }
        }
    }
}
</script>