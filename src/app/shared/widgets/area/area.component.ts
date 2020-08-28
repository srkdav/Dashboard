import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  //highcharts is assigned with hard coded values on initialization.
  ngOnInit() {
    this.chartOptions={
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Predicted growth of Users Posts'
        },
        xAxis: {
            categories: ['01/2020', '02/2020', '03/2020', '04/2020', '05/2020', '06/2020'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Number of Posts'
            },
            labels: {
                formatter: function () {
                    return this.value / 10;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' 000'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Facebook',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Instagram',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Snapchat',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Tiktok',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }]
    };  
    
    //for exporting the graph.
    HC_exporting(Highcharts);

    //for resizing on toggle of menu
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'));
    },300);
    }
  }


