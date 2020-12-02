<template>
    <div class="Team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
<v-row >
<v-col  xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
<v-card flat  elevation="24"  class=" mx-auto my-12"
    max-width="374" >
<v-card-title  class=" ml-4 ">
    <v-avatar size="100" class=" mx-5 grey lighten-2">
<img :src="person.avatar" alt="">
    </v-avatar>
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

    </v-container>
  </div>
</template>

<script>
    export default {
        data:()=>({
            team:[
                {
                    name:'The net ninja', role:'Web developer', avatar:'/avatar1.png'
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:'/avatar2.png'
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:'/avatar1.png'
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:'/avatar2.png'
                },
                {
                    name:'The net ninja', role:'Web developer',avatar:'/avatar2.png'
                },
            ]
        })
    }
</script>

<style lang="scss" scoped>

</style>