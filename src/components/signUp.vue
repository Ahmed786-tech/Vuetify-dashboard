<template>
    <v-container>
        <v-row class="justify-space-around">
            <v-col cols="12" lg="8" md="8">
               <v-card>
                   <v-row>
                       <v-col  class="cyan py-0" cols="12" lg="5" md="5">
                          
                              <div class="pt-16">
                                   <h1 class="text-center white--text"> Welcome <br>
                                Back!</h1>
                                <h5 class="text-center white--text">To keep connected with us please login with your preferred info</h5>
                                <div class="d-flex justify-center py-3">  <v-btn elevation="0" rounded outlined dark class="d-flex justify-center" color="">sign in</v-btn></div>
                              
                                </div>  
                             
                              
                       </v-col>
                       <v-col class="py-0 pa-5" cols="12" lg="7" md="7">
                           <div class="pt-16 pb-4">
                           <h1 class="text-center">Create Account</h1>
                           <div class="d-flex py-2 justify-center">
                           <v-btn class="mx-1" small fab outlined color=""> <v-icon> mdi-facebook</v-icon> </v-btn>
                           <v-btn class="mx-1" small fab outlined color=""> <v-icon>  mdi-google-plus</v-icon> </v-btn>
                           <v-btn class="mx-1" small fab outlined color=""> <v-icon>  mdi-linkedin</v-icon> </v-btn>
                           </div>
                            <h5 class="text-center py-2">Please enter your email for registration</h5>
                            <v-text-field
                            prepend-icon="mdi-account"
                                name="name"
                                label="Name"
                                id="id"
                            ></v-text-field>
                             <v-text-field
                              prepend-icon="mdi-email"
                                name="name"
                                label="Email"
                                id="id"
                            ></v-text-field>
                             <v-text-field
                              prepend-icon="mdi-lock"
                                name="name"
                                label="Password"
                                id="id"
                            ></v-text-field>
                            <div class="d-flex justify-center">
                            <v-btn outlined elevation="0" rounded color="">sign up</v-btn>
                            </div>
                            </div>
                       </v-col>
                   </v-row>
               </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () =>({
            
        })
    }
</script>

<style  scoped>

</style>