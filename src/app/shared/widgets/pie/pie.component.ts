import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts=Highcharts;
  chartOptions={}
  constructor() { }

  ngOnInit() {
    this.chartOptions={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'User : A posts analysis, 2020'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        exporting:{
          enabled:true,
        },
        credits:{
          enabled:false,
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Platform',
            colorByPoint: true,
            data: [{
                name: 'Fb',
                y: 40,
                sliced: true,
                selected: true
            }, {
                name: 'Ig',
                y: 30
            }, {
                name: 'Sc',
                y: 25
            }, {
                name: 'Tk',
                y: 5
            }
          ]
        }]
    }

HC_exporting(Highcharts)
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'));
  },300);
  }

}
