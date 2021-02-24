<template>
  <div class="container mt-5">
    <v-card width="400" class="mx-auto my-10">
      <v-card-title> Login </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field type="name" v-model="name" label="Username" prepend-icon="mdi-account-circle">
          </v-text-field>
            <v-text-field
  v-model="password"
  label="Password"
  name="password"
  prepend-icon="mdi-lock"
  type="password"
  :rules="passwordRules"
/>

<v-text-field
  v-model="confirmPassword"
  label="Confirm Password"
  name="confirmPassword"
  prepend-icon="mdi-lock"
  type="password"
  :rules="confirmPasswordRules"
/>
          
        </v-form>
      </v-card-text>
      <v-card-actions class="">
        <v-btn class="text-capitalize mx-3"  elevation="0" color="info" router to="/register">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn class="text-capitalize mx-2" elevation="0" color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      name:'',
      password: '',
      confirmPassword: '',
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.password || 'The password confirmation does not match.',
      ],
    }
},
  
};
</script>

<style  scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
