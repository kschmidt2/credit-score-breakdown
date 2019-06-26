"use strict";

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'pie',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    plotOptions: {
      pie: {// innerSize: '50%',
      },
      series: {
        dataLabels: {
          crop: false,
          align: 'left',
          // alignTo: 'connectors',
          // softConnector: false,
          distance: '-40%',
          // verticalAlign: 'top',
          borderRadius: 2,
          y: -25,
          formatter: function formatter() {
            return this.point.name + ': <br />' + this.point.y + '%';
          }
        }
      }
    },
    title: {
      text: null
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginTop: -10
    },
    data: {
      googleSpreadsheetKey: '116N169mllbTm1-tFhvB5H1J2mzohr5EXMKnKe_t-QvU'
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
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