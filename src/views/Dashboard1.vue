<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
<v-row row class="mb-3 ml-5">


  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
    <v-btn text small flat color="grey"
    v-bind="attrs"
    v-on="on"
     @click="sortBy('title')"> 
  <v-icon left small>mdi-folder</v-icon>
  <span class="caption text-lowercase">By project name</span>
</v-btn>
    </template>
<span>sort project by project name</span>
  </v-tooltip>
<v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
    <v-btn text small flat color="grey"
    v-bind="attrs"
    v-on="on"
     @click="sortBy('person')"> 
  <v-icon left small>mdi-folder</v-icon>
  <span class="caption text-lowercase">By Person</span>
</v-btn>
    </template>
<span>sort project by person</span>
  </v-tooltip>

</v-row>
<v-card  ><v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Project Title
          </th>
          <th class="text-left">
            Person
          </th>
          <th class="text-left">
            Due By
          </th>
          <th class="text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="project in projects"
          :key="project.title"
        >
          <td>{{ project.title }}</td>
          <td>{{ project.person }}</td>
          <td>{{ project.Due }}</td>
          <td> <v-chip small :class="`${project.status}`">{{ project.status }}</v-chip> </td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table></v-card>


      <!-- <v-card  max-width="1000" class="pl-2" v-for="project in projects" :key="project.title">
        <v-layout row fill-height wrap :class="`pa-5 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.Due}}</div>
          </v-flex>
          
           <v-flex xs2 sm4 md2>
             <div class="left">
              <v-chip  small :class="`${project.status}  `">{{ project.status }}</v-chip>
               </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card> -->
    </v-container>
  </div>
</template>

<script>
  // @ is an alias to /src

import db from '../fb'
  export default {
    name: 'Dashboard1',
    components: {

    },
    data: () => ({
      projects: [
      ]
    }),

    methods:{
      sortBy(prop){
        this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
      }
    },
    created(){
      db.collection('projects').onSnapshot(res =>{
        const changes = res.docChanges();

        changes.forEach(change =>{
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
      })
    }
  }
</script>

<style  scoped>
.project.compelete {
border-left: 4px solid cyan;
}
.project.overdue {
border-left: 4px solid orange;
}
.project.ongoing {
border-left: 4px solid tomato;
}
.v-chip.compelete {
border: 2px solid red;
color: #3cd1c2;
background: #3cd1c2;
background-color: blue ;
}
.v-chip.overdue {
border: 2px solid #3cd1c2;

}
.v-chip.ongoing {
background-color: tomato;
}
</style>