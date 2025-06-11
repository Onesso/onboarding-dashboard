import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  colors: string[] | any;
  legend: ApexLegend | any;
  title: ApexTitleSubtitle | any;
};

@Component({
  selector: 'app-funnel-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './funnel-chart.component.html',
  styleUrl: './funnel-chart.component.scss',
})
export class FunnelChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Funnel Series',
          data: [1380, 1100, 990, 880, 740, 548, 330, 200],
        },
      ],
      chart: {
        type: 'bar',
        height: 250, 
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: '80%',
          isFunnel: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opt: any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        text: 'Stages Funnel',
        align: 'center',
      },
      xaxis: {
        categories: [
          'Sourced',
          'Screened',
          'Assessed',
          'HR Interview',
          'Technical',
          'Verify',
          'Offered',
          'Hired',
        ],
      },
      legend: {
        show: false,
      },
    };
  }
}
