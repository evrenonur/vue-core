<template>
    <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Pie Chart <span class="digits">1</span></h4>
                  </div>
                  <div class="card-body p-0 chart-block">
                    <GChart
                      class="chart-overflow" 
                      id="pie-chart1"
                      type="PieChart"
                      :data="pie_chart.chartData_1"
                      :options="pie_chart.options_1"
                    />
                  </div>
                </div>
              </div>
               <div class="col-sm-12 col-xl-6 box-col-6">
                <div class="card">
                  <div class="card-header">
                    <h4>Pie Chart <span class="digits">2</span></h4>
                  </div>
                  <div class="card-body p-0 chart-block">
                     <GChart
                      class="chart-overflow" 
                      id="pie-chart3"
                      type="PieChart"
                      :data="pie_chart.chartData_2"
                      :options="pie_chart.options_2"
                    />
                  </div>
                </div>
              </div>
              
</template>
<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
import { GChart } from "vue-google-charts";
export default {
    components:{
        GChart 
    },
    data(){
        return{
              chartsLib: null, 
               pie_chart: {
                     chartData_1: [
            ['Task', 'Hours per Day'],
            ['Work',     5],
            ['Eat',      10],
            ['Commute',  15],
            ['Watch TV', 20],
            ['Sleep',    25]
          ],
            chartData_2: [
            ['Task', 'Hours per Day'],
            ['Work',     2],
            ['Eat',      2],
            ['Commute',  11],
            ['Watch TV', 2],
            ['Sleep',    7]
          ],
           options_1: { 
            title: 'My Daily Activities',
            width:'100%',
            height: 300,
             colors: ["#f8d62b", "#51bb25" , "#a927f9"  , secondary , primary ]
          },
           options_2: { 
           title: 'My Daily Activities',
        pieHole: 0.4,
        width:'100%',
        height: 300,
        colors: ["#f8d62b", "#a927f9", "#51bb25", secondary , primary]
          },
           
               }
        }
    }
}
</script>