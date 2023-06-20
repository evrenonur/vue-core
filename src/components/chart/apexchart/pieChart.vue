<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Pie Chart </h4>
                  </div>
                  <div class="card-body apex-chart">
                    <div id="piechart">
                         <apexchart
                  width="350"
                  type="pie"
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
var info = localStorage.getItem('info_color') || '#4faad5';
export default {
    data(){
        return{
           series: [44, 55, 13, 43, 22],
            chartOptions:{
                chart: {
      width: 350,
      height: 350,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    series: [44, 55, 13, 43, 22],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    colors: [primary, secondary, success, "#a927f9", info],
            }
        }
    }
}
</script>