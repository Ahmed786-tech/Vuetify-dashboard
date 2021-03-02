<template>


  <div class="control-section">
      <v-row> <v-col cols="4">
          
    <div align='center'>
        <ejs-accumulationchart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' radius='70%' xName='x' yName='y' startAngle=0 :dataLabel='dataLabel'
                  endAngle=360 innerRadius='40%' name='Project'  explode=true explodeOffset='10%' :explodeIndex='explodeIndex'> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
    </v-col> </v-row>
    <v-row>
      <v-col cols="6">
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
       <v-list two-line>
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

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

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

      <v-list-item>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

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
      </v-col>
    </v-row>
<v-row>
  <v-col cols="8">
 <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis'
         :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width' :tooltip='tooltip' :load='load'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Gold' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Column' xName='x' yName='y' name='Silver' width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData2' type='Column' xName='x' yName='y' name='Bronze' width=2 :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</div>
</v-col>
</v-row>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartPlugin, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default {
  data: function() {
    return {
         theme:theme,
      seriesData: [
            { x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
            { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
            { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
            { x: 'Insurance', y: 16, text: '16%' }

      ],
     
      //Initializing Primary X Axis
       primaryXAxis: {
            title: 'Years',
            interval: Browser.isDevice ? 2 : 1,
            labelIntersectAction: 'Rotate45',
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
        },

      //Initializing Primary Y Axis
      primaryYAxis:
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
      title: "Project Cost Breakdown"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
     
  },
 
};
</script>