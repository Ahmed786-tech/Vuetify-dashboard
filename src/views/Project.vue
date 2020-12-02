<template>
   <div class="Project">
    <h1 class="subheading grey--text">Project</h1>
    <v-container class="my-5">
      <v-expansion-panels>
    <v-expansion-panel
      
    >
      
      <v-expansion-panel v-for="project in projects" :key="project.title">
        <v-expansion-panel-header>
 <div >{{project.title}}</div>
        </v-expansion-panel-header>
       <v-expansion-panel-content>
<!-- <v-card><v-simple-table>
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
  </v-simple-table></v-card> -->

           <v-card  class="pl-5" >
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{project.Due}}</div>
          </v-col>
          
           <v-col xs2 sm4 md2>
             <div class="right">
              <v-chip  small :class="`${project.status}  `">{{ project.status }}</v-chip>
               </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card> 
       </v-expansion-panel-content>
        
      </v-expansion-panel>
    </v-expansion-panel>
  </v-expansion-panels>
    </v-container>

  </div>
</template>

<script>
import db from '../fb'
    export default {
        data:()=>({
            projects: [
      ]
        }),
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

