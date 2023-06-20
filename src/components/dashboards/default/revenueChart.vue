<template>
  <apexchart
    type="area"
    height="168"
    :series="series"
    :options="chartOptions"
  ></apexchart>
</template>

<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
export default {
    data(){
        return{
             series:[{
          name: 'Revenue 1',
          data:[2, 15, 25, 20, 30, 26, 24, 15, 12, 20]
        },         
        {
          name: 'Revenue 2',
          data:[10, 25, 15, 16, 10, 14, 28, 18, 20, 16]
        }
      ],
       chartOptions: {
             chart:{
        height: 168,
        type:'area',
        opacity:1 ,
        toolbar: {
          show:false,
        },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      fill:{ 
        opacity: [0.5, 0.25, 1],        
      },
      stroke: {
        width:[3, 3],
        curve: 'smooth',
      },
      xaxis: {
        offsetX: 0,
        offsetY: 0,
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        labels: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      legend:{
        show: false
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        x: {
            format: 'MM'
        },
      },
      colors:[secondary,primary],
        }
        }
    }
}
</script>