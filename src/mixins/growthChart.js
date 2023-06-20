
var primary = localStorage.getItem('primary_color') || '#5c61f2';
var secondary = localStorage.getItem('secondary_color') || '#eeb82f';
const growthChart = {
    
    data(){
        return{
            series: [{
                type: 'area',
                name: 'Daily',
                data: [0, 20, 10, 45, 30, 43, 25, 38, 30, 42, 25, 40, 25, 0],
                color: '#f0f1fe',
              }, {
                type: 'area',
                name: 'Weekly',
                data: [0, 12, 6, 25, 13, 24, 15, 24, 20, 26, 16, 22, 16, 0],
                color:primary,
              }, {
                type: 'line',
                name: 'Monthly',
                data: [0, 19, 14, 22, 35, 30, 35, 30, 40, 30, 39, 20, 34, 0],
                color:primary,
              }],
    chartOptions: {
        chart:{
            height:280,
            type:'line',        
            toolbar:{
              show: false
            },
          },
          stroke: {
            width: [0, 0, 5],
            curve: 'smooth'
          },
          annotations: {
            xaxis: [{
                x: 300,
                strokeDashArray: 0,
                borderWidth: 3,
                borderColor: primary,
              },
            ],
            points: [{
                x: 300,
                y: 48,
                marker: {
                    size: 8,
                    fillColor: primary,
                    strokeColor: primary,
                    radius: 5,
                },
                label: {
                  borderWidth: 0,
                  offsetY: 0,
                  text: 'We are Achive Our Goal in Progress',
                  style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    fontFamily:'Montserrat',
                  }
              }
            }],
          },
          responsive: [{
            breakpoint: 767,
            options: {
              chart: {
                height: 250
              },
            },
            breakpoint: 575,
            options: {
              chart: {
                height: 220
              },
              annotations: {
                xaxis: [{
                    x: 100,
                    strokeDashArray: 0,
                    borderWidth: 3,
                    borderColor: primary,
                  },
                ],
                points: [{
                    x: 100,
                    y: 48,
                    marker: {
                        size: 8,
                        fillColor: primary,
                        strokeColor: primary,
                        radius: 5,
                    },
                    label: {
                      borderWidth: 0,
                      offsetX: 25,
                      text: 'We are Achieve Our Goal in Progress',
                      style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        fontFamily:'Montserrat',
                      }
                  }
                }],
              },
            }
          }],
          fill: {
            type: ['solid' , 'gradient' , 'gradient'],
            gradient: {
              shade: 'dark',
              type: "horizontal",
              shadeIntensity: 1,
              gradientToColors: [secondary , primary ],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 0.2,
              stops: [0, 100, 100, 100],
            }
          },      
          grid: {
            yaxis: {
              lines: {
                show: false,
              }
            }
          },
          xaxis: {
            offsetX: 0,
            offsetY: 0,
            categories: ["11-09-2023", "12-09-2023", "13-09-2023", "14-09-2023", "15-09-2023", "16-09-2023", "17-09-2023", "18-09-2023", "19-09-2023", "20-09-2023", "21-09-2023", "22-09-2023", "23-09-2023", "24-09-2023"],
            axisBorder: {
                low: 0,
                offsetX: 0,
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
              low: 0,
              offsetX: 0,
              show: false,
            }
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy'
            },
          },
          yaxis: {
            show: false,
            lines: {
              show: false
            },
            dataLabels: {
              enabled: true
            },
          },
          legend: {
            show: false
          }
    }
        }
    }
}
  
  export default growthChart