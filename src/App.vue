<template>
  <v-app>
    <v-snackbar v-model="snackbar">
      You added a new project

      <v-btn color="pink" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>

    <v-app-bar elevation="1" id="app-bar" app flat fixed color="" height="56">
      <v-app-bar-nav-icon class="" @click="toggleimage"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <img
          class=""
          width="100"
          v-if="showimage"
          src="../public/dashboard_icons/logo1.png"
          alt=""
        />
        
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mr-2 mt-1" small rounded outlined text v-bind="attrs" v-on="on">
            <v-icon left>mdi-menu-down</v-icon>
            <span class="text-capitalize">Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="links in dashboardlinks"
            :key="links.text"
            router
            :to="links.route"
          >
            <v-list-item-title>{{ links.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn small outlined class="text-capitalize mr-2 mt-1" @click="toggleTheme" text rounded
        >Toggle Theme</v-btn
      >

      <v-menu
        bottom
        min-width="250px"
        rounded
        offset-y
        left
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <v-btn class="mr-lg-5 mr-md-5 mr-sm-2" fab text small v-on="on">
            <v-avatar color="pink" size="33">
              <img src="../public/images/girlpng.png" alt="" />
            </v-avatar>
          </v-btn>
        </template>
        <v-card width="300">
          <!-- <v-card-title class="grey lighten-3 d-flex justify-center py-1">
            <h5 class="font-weight-regular">{{name}}</h5>
          </v-card-title> -->
          <v-card-title class="d-flex justify-center">
            <v-card
              class="d-flex justify-center align-center"
              height="140"
              width="140"
              rounded="circle"
            >
              <v-avatar size="140" color="pink">
                <img :src="url" alt="" />
              </v-avatar>
               <v-btn
                dark
                small
                class="mb-3"
                elevation="0"
                color="#42b883"
                absolute
                bottom
                right
                fab
              >
              <v-file-input
              v-model="file"
               @change="onFileChange"
              class="my-n9 ml-3"
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
   absolute
    prepend-icon="mdi-camera"
    
    hide-input
  ></v-file-input>
                <!-- <v-icon>mdi-camera</v-icon> -->
              </v-btn> 
               
            </v-card>
          </v-card-title>
          <v-card-text>
            <!-- <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              bottom
              origin="center center"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  color="#42b883"
                  placeholder=""
                  label="Name"
                  prepend-icon="mdi-account"
                  append-outer-icon="mdi-pencil"
                ></v-text-field>
              </template>
              <v-card>
                <v-card-title class="py-0">
                  <h5 class="font-weight-regular pt-3">Enter your name</h5>
                </v-card-title>
                <v-card-text class="">
                  <v-text-field
                    hide-details
                    append-outer-icon="mdi-emoticon-happy-outline"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-btn dark color="" class="ml-auto text-capitalize"
                    >cancle</v-btn
                  >
                  <v-btn dark class="text-capitalize">save</v-btn>
                </v-card-actions>
              </v-card>
            </v-menu> -->
             <v-text-field
                  
                  color="#42b883"
                  placeholder=""
                  v-model="name"
                  label="name"
                  :readonly="readonly"
                  prepend-icon="mdi-account"
                  append-outer-icon="mdi-pencil"
                  @click:append-outer="readonly = !readonly"
                ></v-text-field>
            <v-text-field
              :readonly="text11"
              v-model="text11"
              placeholder=""
              label="Phone"
              prepend-icon="mdi-phone"
              @prepend="readonly = !readonly"
              append-outer-icon="mdi-pencil"
            ></v-text-field>
            <v-text-field
              class="my-text-field-1"
              placeholder=""
              label="About"
              prepend-icon="mdi-information-outline"
              append-outer-icon="mdi-pencil"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              dark
              class="text-capitalize"
              elevation="0"
              color="#42b883"
              block
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer color=""  floating mobile-breakpoint="700" v-model="Drawer" app class="">
      <v-app-bar color="" elevation="0" height="56">
        <img v-if="$vuetify.theme.dark = this.$vuetify.theme.dark" height="100" src="../public/dashboard_icons/logo5.png" alt="" />
        <img v-else height="100" src="../public/dashboard_icons/logo2.png" alt="" />

      </v-app-bar>
      <v-divider></v-divider>

      <v-list dense class="mt-5">
        <v-list-item-group >
        <v-list-item
         color="blue"
          
          v-for="links in dashboardlinks"
          :key="links.text"
          router
          :to="links.route"
        >
          <v-list-item-icon>
            <v-icon color="" class="">{{ links.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="">{{ links.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Popup from "./components/popup";
export default {
  name: "App",

  components: {
    Popup,
  },
  data: () => ({
    text11: null,
    url: null,
    file: null,
    Drawer: true,
    showimage: false,
    name:'',
    readonly: true,
    dashboardlinks: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: "/",
      },
      {
        icon: "mdi-table",
        text: "Table",
        route: "/Table",
      },
      {
        icon: "mdi-table",
        text: "Staff",
        route: "/Table1",
      },

      {
        icon: "mdi-folder",
        text: "Project",
        route: "/Project",
      },
      {
        icon: "mdi-microsoft-teams",
        text: "Team",
        route: "/Team",
      },

      {
        icon: "mdi-login",
        text: "Login",
        route: "/login",
      },
      {
        icon: "mdi-account-plus",
        text: "Sign Up",
        route: "/register",
      },
      {
        icon: "mdi-account-plus",
        text: "Sign Up",
        route: "/signUp",
      },
    ],
    snackbar: false,
  }),

  methods: {

onFileChange(){
// const file = e.target.files[0];
      this.url = URL.createObjectURL(this.file);
      
},

    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    toggleimage() {
      this.showimage = !this.showimage;
      this.Drawer = !this.Drawer;
    },
  },
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
