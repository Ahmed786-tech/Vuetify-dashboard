<template>
  <v-container class=" container mt-5">

    <v-row v-resize="onResize" align="center" justify="center">
      <v-col
      cols="12"
      lg="7"
      sm="8"
      class=""
      >
      <v-card class="px-0" elevation="0" outlined>
        <v-card-title class="mx-5" primary-title>
          Register yourself
        </v-card-title>
        <v-form class="ma-10 mt-5" ref="signUpForm" v-model="formValidity" >
          <v-text-field dense label="Name" type="name" v-model="email" :rules="emailRules" required>
          </v-text-field>
          <v-text-field  label="Email" type="email" v-model="email" :rules="emailRules" required>
          </v-text-field>
          <v-autocomplete label="which browser do you use" :items="browser">
          </v-autocomplete>
          <v-file-input label="Attach Your Profile"></v-file-input>

          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
            transition="scale-transition" offset-y min-width="290px">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" label="Picker in menu" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>

          <v-checkbox label="Agree to terms and conditions" v-model="agreeToTerms" :rules="agreeToTermsRules" required>
          </v-checkbox>
          <v-btn elevation="0" class="mr-3 mb-5 text-capitalize" type="submit" color="primary" :disabled="!formValidity">submit</v-btn>

          <v-btn elevation="0" class="mr-3 mb-5 text-capitalize" color="success" @click="validateForm">Validate Form</v-btn>

          <v-btn elevation="0" class="mr-3 mb-5 text-capitalize"  color="warning" @click="resetValidation">Reset Validation</v-btn>
          <v-btn elevation="0"  class="mb-5 text-capitalize" color="error" @click="resetForm">Reset</v-btn>



        </v-form>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      agreeToTerms: false,
      agreeToTermsRules: [
        value => !!value || 'you must agree to terms and conditions to sign up for acount.'
      ],
      browser: ['Chrome', 'Firefox', 'Edge', 'Opera'],
      formValidity: false,
    
      email: '',
      emailRules: [
        value => !!value || 'Email is required.',
        value => value.indexOf('@') !== 0 || 'Email should have a user name.',
        value => value.includes('@') || 'Email should include an @ symbol.',
        value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain.',
        value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extention.'
      ],
    }),
    methods:{
      resetForm(){
        this.$refs.signUpForm.reset()
      },
      resetValidation(){
       this.$refs.signUpForm.resetValidation()
      },
      validateForm(){
        this.$refs.signUpForm.validate()
        
      }
    }
  }
</script>

<style  scoped>
.v-sheet--offset{
  top: -24px;
  position: relative;
  
}
</style>