<template>
    <div>
<v-dialog v-model="dialog"
    
      max-width="500"
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        flat
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          <h2>Add a new project</h2>
        </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="titleRules">
                    </v-text-field>
                    <v-text-field label="Person" v-model="person" prepend-icon="mdi-human" :rules="titleRules"></v-text-field>
                    <v-text-field label="Status" v-model="status" prepend-icon="" :rules="titleRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="titleRules"></v-textarea>
                   <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
            transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :rules="dateRules" v-model="Due" label="Picker in menu" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="Due" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
                    <v-btn :loading="loading" flat class="success mx-0 mt-3" @click="submit">Add Projects</v-btn>
                </v-form>
                
            </v-card-text>
        
        
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
import format from 'date-fns/format'
import db from '../fb'
    export default {
       data:()=>({
         title:'',
         content:'',
         person:'',
         status:'',
         Due: '',
      menu: false,
      modal: false,
      menu2: false,
      titleRules:[
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      dateRules:[
        v => v.length >= 6 || 'Full Date required'
      ],
      loading: false,
      dialog: false,

       }) ,

       methods:{
         submit(){
           if(this.$refs.form.validate()){
             this.loading = true;
             const project = {
               title: this.title,
               content: this.content,
               Due: this.Due,
               person: this.person,
               status: this.status

             }
             db.collection('projects').add(project).then(()=>{
               this.loading = false;
               this.dialog = false;
               this.$emit('projectAdded')
             })
           }
         }
       },
      //  computed:{
      //    formatedDate(){
      //      return this.date ? format(this.date, 'Do MMM YYYY') : ''
      //    }
      //  }

    }
</script>

<style lang="scss" scoped>

</style>