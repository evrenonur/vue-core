<template>
     <div class="xl-50 col-lg-5 box-col-5">
                <div class="small-chart-widget chart-widgets-small">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="d-flex">
                        <div class="flex-grow-1"> 
                          <h4>Monthly Sales</h4>
                        </div>
                       
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="chart-container">
                        <div class="row">
                          <div class="col-12">
                            <div id="chart-widget8">
                                <apexchart type="radar" height="300" ref="chart" :options="chartOptions" :series="series"></apexchart>
                            </div>
                          </div>
                        </div>
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
       series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: "Series 3",
        data: [44, 76, 78, 13, 43, 10],
      },
    ],
    chartOptions: {
      fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "Reflected",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    colors: [primary, secondary, "#51bb25"],
    chart: {
      height: 300,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      toolbar: {
        show: false
      }
    },
    title: {
      text: "Radar Chart - Multi Series",
    },
    stroke: {
      width: 0,
    },
    markers: {
      size: 0,
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    }
        }
    }
}
</script>