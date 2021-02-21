<template>
    <div class="Team">
   
    <v-container id="" class="my-5">
         <h1 class="subheading font-weight-regular">Team</h1>
<v-row >
<v-col class="12" md="3" lg="3"  v-for="person in team" :key="person.name">
<v-card hover >
<v-card-title  class="d-felx justify-center">
    <div class="contant px-1 py-1">
    <v-avatar size="100" class="">
<img :src="person.avatar" alt="">
    </v-avatar>
    </div>
</v-card-title>
<v-card-text class="text-center">
    <div class="subheading">{{person.name}}</div>
    <div class="grey--text">{{person.role}}</div>
</v-card-text>
<v-card-actions>
    <v-btn hover text color="grey">
        <v-icon small left>mdi-message</v-icon>
        <span>Message</span>
    </v-btn>
</v-card-actions>
</v-card>
</v-col>
</v-row>
jdhjfhj{{count}}
<v-btn @click="name1" color="success">text</v-btn>
    </v-container>
  </div>
</template>

<script>
import avatar from '../../public/images/avatar2.png'
import gsap from 'gsap'
    export default {
        data:()=>({
            
            team:[
                {
                    name:'The net ninja', role:'Web developer', avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:avatar
                },
            ]
        }),
        methods:{
name1(){
    this.$store.commit('increment')
}
        },
        computed: {
            count() {
             return this.$store.state.count
            },
        },
         mounted(){
           gsap.from('.card',{
               duration: 0.5,
               opacity: 0,
               scale: 0,
               y: 200,
               ease: 'power1',
               stagger: {
                   each: 0.1,
                   from: 'center'
               }
           })
       }
    }
</script>

<style  scoped>
#container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.contant {
  /* position: relative;
   width: 600px; */

  border: 4px dotted rgb(133, 103, 113);
  padding: 100px;
  border-radius: 100px;
  display: inline-block;
}

</style>