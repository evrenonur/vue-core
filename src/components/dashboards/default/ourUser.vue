<template>
  <div class="col-xxl-3 col-xl-4 col-md-6 dash-30 box-col-35">
    <div class="card our-user">
      <div class="card-header pb-0">
        <div class="d-flex justify-content-between">
          <div class="flex-grow-1">
            <p class="square-after f-w-600 header-text-primary">Our Total Users<i class="fa fa-circle"></i></p>
            <h4>96.564%</h4>
          </div>

        </div>
      </div>
      <div class="card-body">
        <div class="user-chart">
          <div id="user-chart">
            <apexchart type="donut" height="300" :series="series" :options="chartOptions"></apexchart>
          </div>
          <div class="icon-donut"><vue-feather type="arrow-up-circle"></vue-feather></div>
        </div>
        <ul>
          <li>
            <p class="f-w-600 font-primary f-12">Desktop</p><span class="f-w-600">96.564%</span>
          </li>
          <li>
            <p class="f-w-600 font-primary f-12">Mobile </p><span class="f-w-600">92.624%</span>
          </li>
          <li>
            <p class="f-w-600 font-primary f-12">Tablet </p><span class="f-w-600">46.564%</span>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
  data() {
    return {
      series: [99, 24, 20, 28],
      chartOptions: {
        chart: {
          type: 'donut',
          height: 300,
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        responsive: [{
         
          breakpoint: 360,
          options: {
            chart: {
              height: 280
            },
          }
        }],
        plotOptions: {
          pie: {
            donut: {
              size: '70%'
            }
          }
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val / 100 + "$";
            },
          },
        },
        colors: [primary, secondary, secondary, secondary],
      }
    }
  }
}
</script>