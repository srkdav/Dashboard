import { Component, OnInit,Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data = [];

  Highcharts=Highcharts;
  chartOptions={}
  constructor() { }

  //data hardcoded and provided on start up.
  ngOnInit() {
    this.chartOptions={
      chart: {
          type: 'area',
          backgroundcolor:null,
          borderwidth:0,
          margin:[2,2,2,2],
          height:60
      },
      title: {
          text: null
        },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside:true
      },
      exporting:{
        enabled:false
      },
      legend:{
        enabled:false
      },
      
      xAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      yAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      series: [{
        data : [10,18,43,55,80]
      }]
  };  
  
  //widgets are reset as per toggle case.
HC_exporting(this.Highcharts)
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'));
  },300);
  }
}


