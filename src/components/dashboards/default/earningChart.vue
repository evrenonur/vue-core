<template>
  <apexchart
    type="bar"
    height="270"
    :series="series"
    :options="chartOptions"
  ></apexchart>
</template>

<script>
var primary = localStorage.getItem('primary_color') || '#5c61f2';

export default {
    data(){
        return{
          series: [{
          name: 'Earning',
          data: [20, 40, 20, 65, 35, 30, 60, 35, 15]
        }, {
          name: 'Earning',
          data: [30, 25, 10, 12, 13, 15, 10, 15, 10],
        },
      ],
       chartOptions: {
       chart: {
        type: 'bar',
        toolbar: {
          show: false
        },
        height: 270,
        stacked: true,
      },
       states: {          
        hover: {
          filter: {
            type: 'darken',
            value: 1,
          }
        }           
      },
      plotOptions: {
        bar: {
          horizontal: false,
          s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
          borderRadius: 6,
          columnWidth: '19%',            
        }
      },      
      dataLabels: {
        enabled: false
      },
      grid: {
        yaxis: {
          lines: {
              show: false
          }
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        offsetX: 0,
        offsetY: 0,
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
      },
      yaxis: {
        show: false,
        dataLabels: {
          enabled: true
        },
      },
      fill: {
        opacity: 1,
        colors: [primary, '#eeeffe']
      },
      responsive: [{
        breakpoint: 1199.98,
        options: {
          chart: {
            height: 320
          },
        }
      }], 
      legend: {
        show: false
      },
        }
        }
    }
}
</script>