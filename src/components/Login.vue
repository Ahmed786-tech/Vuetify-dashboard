<template>
 <div class="">
    <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
        label="Username"
        prepend-icon="mdi-account-circle"
        >    
        </v-text-field>
        <v-text-field
        :type=" showPassword ? 'text' : 'password'"
        label="password"
        prepend-icon="mdi-lock" 
        :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" router to="/register" >Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info" >Login</v-btn>
    </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Login',
data:()=>({
  showPassword: false
})
   
  }
</script>

style
