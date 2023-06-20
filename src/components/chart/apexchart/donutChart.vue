<template>
     <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Donut Chart</h4>
                  </div>
                  <div class="card-body apex-chart">
                    <div id="donutchart">
                        <apexchart
                  width="350"
                  type="donut"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#6362e7';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
var success = localStorage.getItem('success_color') || '#61ae41';
export default {
    data(){
        return{
          series: [44, 55, 41, 17, 15],
          chartOptions: {
            chart: {
      width: 350,
      height: 350,
      type: "donut",
    },
   
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
    colors: ["#dc3545",secondary,primary,success, "#a927f9"],
          },

    
    }

        }
    }

</script>