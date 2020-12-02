<template>
  <v-app>

 <v-snackbar
      v-model="snackbar" 
    >
     You added a new project 

      
        <v-btn
          color="pink"
          text
          
          @click="snackbar = false"
        >
          Close
        </v-btn>
     
    </v-snackbar>
 <!-- <v-snackbar v-model="snackbar" :timeout="4000" color="success">
      <span>You added a new project.</span>
      
      <v-btn left color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar> -->

    <v-app-bar id="app-bar" absolute app flat  color="" height="75">
      <v-btn class="mr-3" retain-focus-on-click elevation="5"  fab small @click="Drawer = !Drawer">
        <v-icon v-if="value">
          mdi-view-quilt
        </v-icon>

        <v-icon class="dots" v-else>
          mdi-dots-vertical
        </v-icon>
      </v-btn>
      <!-- <v-app-bar-nav-icon @click="Drawer = !Drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>
        Vuetify Dashboard
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field color="secondary" hide-details style="max-width: 165px;">
        <template>
          <v-btn class="mt-n2" elevation="1" fab small>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>

      <div class="mx-3" />

      <v-btn class="ml-2" min-width="0" text>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <!-- <v-menu bottom left offset-y origin="top right" transition="scale-transition">
        <template>
          <v-btn class="ml-2" min-width="0" text>
            <v-badge color="red" overlap bordered>
              <template v-slot:badge>
                <span>5</span>
              </template>

              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list nav>
          <div>
            <app-bar-item>

            </app-bar-item>
          </div>
        </v-list>
      </v-menu> -->

      <v-badge color="red" overlap bordered>
        <template v-slot:badge>
          <span>5</span>
        </template>

        <v-icon>mdi-bell</v-icon>
      </v-badge>

      <v-btn class="ml-2" min-width="0" text>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          rounded
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi-menu-down</v-icon>
<span>Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="links in dashboardlinks" :key="links.text" router :to="links.route"
        >
          <v-list-item-title>{{ links.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>

    </v-app-bar>

    

    <v-navigation-drawer  mobile-breakpoint="700" src="./assets/lock.jpg" v-model="Drawer" app  class="">
  

<v-overlay opacity="0.7">
   
   <v-layout column align-center>
<v-flex class="mt-5">
  <v-avatar size="100" class="grey lighten-2">
    <img src="/avatar1.png" alt="">
  </v-avatar>

</v-flex>
<v-flex class="mt-4 mb-3">
  <Popup @projectAdded="snackbar = true" />
</v-flex>
</v-layout>
  <v-list class="mt-5" dense nav>        
        <v-divider></v-divider>
        <v-list-item active-class="green" class="mt-4" v-for="links in dashboardlinks" :key="links.text" router :to="links.route">

          <v-list-item-icon>
            <v-icon class="white--text">{{ links.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ links.text }}</v-list-item-title>

          </v-list-item-content>

        </v-list-item>
      </v-list></v-overlay>

      
    
    </v-navigation-drawer>

    <v-content class="mx-4 mb-4">

      <router-view></router-view>

    </v-content>

    <v-footer color="info"  absolute   padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="`${link.label}-footer-link`" color="white" text rounded class="my-2"
          :to="link.url">
          {{ link.label }}
        </v-btn>
        <v-col class=" info lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
  

import Popup from './components/popup'
  export default {
    name: 'App',

    components: {
      Popup

    },
    data: () => ({
      Drawer: true,
      dashboardlinks: [{
          icon: 'mdi-view-dashboard',
          text: 'Dashboard',
          route: '/'
        },
        {
          icon: 'mdi-folder',
          text: 'Project',
          route: '/Project'
        },
        {
          icon: 'mdi-microsoft-teams',
          text: 'Team',
          route: '/Team'
        },

        {
          icon: 'mdi-login',
          text: 'Login',
          route: '/login'
        },
        {
          icon: 'mdi-account-plus',
          text: 'Sign Up',
          route: '/register'
        },
        {
          icon: 'mdi-table',
          text: 'Table',
          route: '/Dashboard'
        },

      ],
      snackbar: false
      
    }),

    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      }
    }




  };
</script>

<style scoped>
.dots {
  transition: 0.3s ease-in-out;
}
.dots:hover {
  transform: rotate(90deg);
}
</style>