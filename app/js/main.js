// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);

// console.log(Highcharts);


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'pie',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        plotOptions: {
            pie: {
                innerSize: '50%',
            },
            series: {
                animation: false,
                dataLabels: {
                    crop: false,
                    align: 'left',
                    distance: '-40%',
                    borderRadius: 2,
                    useHTML: true,
                    formatter: function () {
                        return this.point.name + '<br /><b>' + this.point.y + '%'
                    }
                }
            }
        },    
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        series: [{
            data: [{
                name: 'Payment history',
                y: 35,
                dataLabels: {
                    className: 'payhist',
                }
              }, {
                name: 'Utilization',
                y: 30,
                dataLabels: {
                    className: 'util'
                }
              }, {
                name: 'Length of credit history',
                y: 15,
                dataLabels: {
                    className: 'chist',
                }
              }, {
                name: 'New credit',
                y: 10,
                dataLabels: {
                    className: 'newc',
                }
              }, {
                name: 'Credit mix',
                y: 10,
                dataLabels: {
                    className: 'cmix',
                }
              }]
        }],
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});