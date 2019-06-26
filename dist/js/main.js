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
      spacingBottom: 25
    },
    plotOptions: {
      pie: {
        innerSize: '50%'
      },
      series: {
        animation: false,
        dataLabels: {
          crop: false,
          distance: '-40%',
          useHTML: true,
          formatter: function formatter() {
            return '<span class="strong">' + this.point.y + '%</span><br />' + this.point.name;
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
        name: 'Payment<br>history',
        y: 35,
        dataLabels: {
          className: 'payhist'
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
          className: 'chist'
        }
      }, {
        name: 'New credit',
        y: 10,
        dataLabels: {
          className: 'newc'
        }
      }, {
        name: 'Credit mix',
        y: 10,
        dataLabels: {
          className: 'cmix'
        }
      }]
    }]
  });
});