<template>
 
  <div class="py-4">
        <v-card>
            <v-card-title primary-title>
               <v-list width="100%" >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            Overall traffic status
                        </v-list-item-title>
                     
                    </v-list-item-content>
                    <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-sync
                         </v-icon>
                         
                     </v-list-item-action>
                      <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-sync
                         </v-icon>
                         
                     </v-list-item-action>
                      <v-list-item-action >
                         <v-icon class="ml-auto">
                             mdi-sync
                         </v-icon>
                         
                     </v-list-item-action>
                </v-list-item>
               </v-list>

            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
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
                    <v-col cols="4">
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
                    <v-col cols="4">
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
            </v-card-text>
        
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip' :load='load'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Gold' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Silver' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Bronze' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
 </v-card>

</div>
</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, DataLabel, Tooltip, Legend} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
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

       width : Browser.isDevice ? '100%' : '60%',
     marker: 
     { dataLabel: 
           { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } 
           }
           
      },
      
      tooltip: { 
            enable: true
         },
      
      title: "Olympic Medal Counts - RIO"
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip]
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