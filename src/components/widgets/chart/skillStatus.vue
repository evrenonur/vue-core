<template>
     <div class="col-lg-5 col-sm-12 box-col-5">
                <div class="card">
                  <div class="card-header pb-0">
                    <div class="d-flex"> 
                      <div class="flex-grow-1"> 
                        <h4>Skill Status</h4>
                      </div>
                      <div class="text-end"><vue-feather class="text-muted" type="trending-up"></vue-feather></div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="chart-container">
                      <div id="circlechart">
                           <apexchart
      type="radialBar"
     height="385"
      ref="chart"
      :options="chartOptions"
      :series="series"
    ></apexchart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
    data(){
        return{
    series: [71, 63],
    chartOptions: {
      chart: {
      type: "radialBar",
      height: 385,
      offsetY: -30,
      offsetX: 20,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#f2f2f2",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3,
        },
      },
    },
    labels: ["Device 1", "Device 2"],
    legend: {
      show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart:{
          height: 300
        }
      },
    }],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    colors: [primary, secondary],
    }
        }
    }
}
</script>
