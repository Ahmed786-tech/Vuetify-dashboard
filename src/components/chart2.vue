<template>
 
  <div class="py-4">


  <v-row>
        
        
        <v-col cols="4">
<v-card
    class=""
elevation=""
    max-width=""
  >
  <v-sheet color="primary"
  elevation="1"
  height="120"
  width="100%"
>

      
              <v-avatar class="mt-10 ml-5"  size="110" color="pink">
                <img src="../../public/images/girlpng.png" alt="" />
              </v-avatar>
               
      
  </v-sheet>
  
    <v-card-text>
       <v-list class="mt-5">
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

       
      </v-list-item>

      <v-divider ></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>


      <v-divider ></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="text-capitalize"
        color="info"
      >
       view profile
      </v-btn>
       <v-btn
        class="text-capitalize"
        color="yellow"
      >
       send message
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>  <v-col cols="4">
          <v-card>
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis1='primaryXAxis1' :primaryYAxis1='primaryYAxis1'
            :chartArea='chartArea' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData01' radius='70%' xName='x' yName='y' startAngle=0 :dataLabel='dataLabel'
                  endAngle=360 innerRadius='40%' name='Project'  explode=true explodeOffset='10%' :explodeIndex='explodeIndex'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
    </v-card>
    </v-col>
   
    
     </v-row>


    <v-row> <v-col cols="6">
        <v-card  >
            <v-card-title class="py-0" primary-title>
               <v-list width="100%" >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            Overall traffic status
                        </v-list-item-title>
                     
                    </v-list-item-content>
                    <v-list-item-action >
                         <v-icon class="ml-auto mr-4">
                             mdi-minus
                         </v-icon>
                         
                     </v-list-item-action>
                      <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-sync
                         </v-icon>
                         
                     </v-list-item-action>
                      <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-close
                         </v-icon>
                         
                     </v-list-item-action>
                </v-list-item>
               </v-list>

            </v-card-title>
            <v-card-text class="py-0">
                <v-row class="py-0">
                    <v-col  class="py-0" cols="4">
                    <v-list class="" width="100%" >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            Overall traffic status
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            3500$
                        </v-list-item-subtitle>
                     
                    </v-list-item-content>
                    <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-arrow-up
                         </v-icon>
                         
                     </v-list-item-action>
                      
                </v-list-item>
               </v-list>
                    </v-col>
                    <v-col  class="py-0" cols="4">
                    <v-list width="100%" >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            Overall traffic status
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            3500$
                        </v-list-item-subtitle>
                     
                    </v-list-item-content>
                    <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-arrow-up
                         </v-icon>
                         
                     </v-list-item-action>
                      
                </v-list-item>
               </v-list>
                    </v-col>
                    <v-col class="py-0" cols="4">
                    <v-list width="100%" >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            Overall traffic status
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            3500$
                        </v-list-item-subtitle>
                     
                    </v-list-item-content>
                    <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-arrow-up
                         </v-icon>
                         
                     </v-list-item-action>
                      
                </v-list-item>
               </v-list>
                    </v-col>
                </v-row>
                <ejs-chart class="py-0" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip' :load='load'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Gold' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Silver' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Bronze' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
            </v-card-text>
        
        
 </v-card>
</v-col>

<v-col cols=""></v-col>

</v-row>
</div>
</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, DataLabel, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";

import { AccumulationChartPlugin, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");


Vue.use(ChartPlugin);


export default Vue.extend({
  data: function() {
    return {
         theme: theme,


//////////////////////
 seriesData01: [
            { x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
            { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
            { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
            { x: 'Insurance', y: 16, text: '16%' }

      ],
     
      //Initializing Primary X Axis
       primaryXAxis1: {
            title: 'Years',
            interval: Browser.isDevice ? 2 : 1,
            labelIntersectAction: 'Rotate45',
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },

      //Initializing Primary Y Axis
      primaryYAxis1:
        {
            title: 'Growth',
            minimum: -3,
            maximum: 3,
            interval: 1,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
            labelFormat: '{value}B',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        dataLabel: {
                    visible: true,
                    name: 'text',
                    position: 'Inside',
                    font: {
                        fontWeight: '600',
                        color: '#ffffff'
                    }
                    },
        legendSettings: {
            visible: true,
            position: 'Top'
        },
         tooltip: { enable: true},


     explodeIndex: 3,
      title: "Project Cost Breakdown",
      /////////////////////////


      seriesData: [
               { x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }
              ],

      seriesData1: [
             { x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }
         ],

       seriesData2: [
             { x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }
        ],

      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        },
        chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
          primaryYAxis:
        {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        },

       width : Browser.isDevice ? '100%' : '100%',
     marker: 
     { dataLabel: 
           { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } 
           }
           
      },
      
      tooltip: { 
            enable: true
         },
     
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip],
     accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
         if (selectedTheme === 'highcontrast') {
            args.chart.series[0].marker.dataLabel.font.color = '#000000';
            args.chart.series[1].marker.dataLabel.font.color = '#000000';
            args.chart.series[2].marker.dataLabel.font.color = '#000000';
            }


    }
  },
 
});
</script>