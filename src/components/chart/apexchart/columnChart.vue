<template>
    <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header pb-0">
                    <h4>Column Chart </h4>
                  </div>
                  <div class="card-body">
                    <div id="column-chart">
                        <apexchart
                    type="bar"
                    height="350"
                    ref="bar"
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
export default {
    data(){
        return{
             series: [
            {
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
          ],
          chartOptions:{
              chart:{
                  height:350,
        type: 'bar',
        toolbar:{
          show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
         
         
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    },
    colors:[primary, secondary, '#51bb25']
          }
        
        }
    }
}
</script>