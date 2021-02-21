<template>
  <v-container>
    <v-row>
      <v-col md="6" sm="12">
        <v-card outlined elevation="1" tile class="" width="auto" height="295">
          <v-row justify="">
            <v-col cols="12" class="" md="5">
              <div class="d-flex justify-center">
                <div class="contant px-1 py-1 mt-8">
                  <v-avatar class="" color="pink" height="150" width="150">
                    <img width="" height="" src="../../public/images/girlpng.png" alt="" />
                  </v-avatar>
                </div>
              </div>
              <v-card-actions class="d-flex justify-center mt-2">
                <v-btn dark elevation="0" class="" rounded color="pink">
                  Pro
                </v-btn>
              </v-card-actions>
            </v-col>

            <v-col class="" md="7">
              <v-row class="">
                <v-col class="" cols="12">
                  <v-list class="py-0">
                    <v-list-item class="py-0">
                      <v-list-item-content class="">
                        <v-list-item-title class="">
                          <h2 class="">Mano meer</h2>
                        </v-list-item-title>
                        <v-list-item-subtitle class="mt-2">
                          <h3>photographer</h3>
                        </v-list-item-subtitle>
                        <v-list-item-action-text>
                          <h3 class="info--text">www.PicasoClick.com</h3>
                        </v-list-item-action-text>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>

              <v-row class="ml-1 py-0">
                <v-col class="py-0" cols="12">
                  <v-chip small color="pink" label outlined>Photographer</v-chip>
                  <v-chip small color="indigo" class="ml-1" label outlined>
                    Developer</v-chip
                  >

                  <v-chip small outlined label color="success" class="ml-1"
                    >Art</v-chip
                  >
                </v-col>
              </v-row>
              <v-row class="py-0 ml-1">
                <v-col class="" cols="12">
                  <v-chip small outlined label color="info">Designer</v-chip>
                </v-col>
              </v-row>

              <v-card-actions class="mt-3">
                <v-btn class="" text fab small
                  ><v-icon color="blue">mdi-facebook</v-icon></v-btn
                >
                <v-btn class="mx-0" text fab small
                  ><v-icon color="#C13584">mdi-instagram</v-icon></v-btn
                >
                <v-btn class="mx-0 px-0" text fab small
                  ><v-icon color="#25D366">mdi-whatsapp</v-icon></v-btn
                >
                <v-btn class="mx-0 px-0" text fab small
                  ><v-icon color="#0072b1">mdi-linkedin</v-icon></v-btn
                >

                <v-btn class="mx-0 px-0" text fab small
                  ><v-icon color="#00acee">mdi-twitter</v-icon></v-btn
                >
                <v-btn class="mx-0 px-0" text fab small
                  ><v-icon color="#FF0000">mdi-youtube</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="px-0" cols="12" md="6">
        <v-card height="295" class="" tile outlined elevation="1">
          <v-list class="py-0">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <h3>My Files</h3>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon
                  ><v-icon class="">mdi-dots-horizontal</v-icon></v-btn
                >
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-tabs centered color="pink">
            <v-tab> All </v-tab>
            <v-tab> Dev </v-tab>
            <v-tab> Design </v-tab>
            <v-tab-item>
              <v-container>
                <v-row class="">
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder2.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder4.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder6.png" alt=""
                  /></v-col>
                </v-row>
              </v-container>
            </v-tab-item>
            <v-tab-item>
              <v-container>
                <v-row class="">
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder2.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder4.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder6.png" alt=""
                  /></v-col>
                </v-row>
              </v-container>
            </v-tab-item>

            <v-tab-item>
              <v-container>
               <v-row class="">
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder2.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder4.png" alt=""
                  /></v-col>
                  <v-col class=" " cols="12" md="3"
                    ><img width="120" src="../../public/images/folder6.png" alt=""
                  /></v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>

    <!-- ////////////////////////////////////////////// 1st Row  ///////////////////////////////////////////// -->

    <v-row>
      <v-col cols="12" md="4" sm="12">
        <v-card elevation="1" outlined tile class="py-0" height="">
          <v-card-title class="py-1">
            <h5 >Traffic</h5>
          </v-card-title>

          <v-list class="py-0">
            <v-list-item class="py-0">
              <v-list-item-content>
                <v-list-item-title>
                  <h2 >53k</h2>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    small
                    dense
                  ></v-rating>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-img height="50" width="50" src="../../public/dashboard_icons/traffic.png"></v-img>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card elevation="1" outlined tile class="py-0" height="">
          <v-card-title class="py-1">
            <h5 >Users</h5>
          </v-card-title>

          <v-list class="py-0">
            <v-list-item class="py-0">
              <v-list-item-content>
                <v-list-item-title>
                  <h2 >53k</h2>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    small
                    dense
                  ></v-rating>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-img height="50" width="50" src="../../public/dashboard_icons/users.png"></v-img>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <v-card elevation="1" outlined tile class="py-0" height="">
          <v-card-title class="py-1">
            <h5 >Sales</h5>
          </v-card-title>

          <v-list class="py-0">
            <v-list-item class="py-0">
              <v-list-item-content>
                <v-list-item-title>
                  <h2>53k</h2>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    small
                    dense
                  ></v-rating>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-img height="50" width="50" src="../../public/dashboard_icons/sales3.png"></v-img>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card height="354" tile outlined elevation="1">
          <v-card-title class=""
            ><h4>Media</h4>
            <v-btn icon class="ml-auto"
              ><v-icon>mdi-dots-vertical</v-icon></v-btn
            >
          </v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <div class="d-flex justify-center align-center">
                <h4>clicks</h4>
              </div>
              <div class="d-flex justify-center align-center">
                <v-img
                  max-height="60"
                  max-width="60"
                  sizes=""
                  src="../../public/dashboard_icons/clicks2.png"
                ></v-img>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <div class="d-flex justify-center align-center">
                <h4>likes</h4>
              </div>
              <div class="d-flex justify-center align-center">
                <v-img
                  max-height="60"
                  max-width="60"
                  sizes=""
                  src="../../public/dashboard_icons/likes1.png"
                ></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="py-10" cols="12" md="6">
              <div class="d-flex justify-center align-center">
                <h4>following</h4>
              </div>
              <div class="d-flex justify-center align-center">
                <v-img
                  max-height="60"
                  max-width="60"
                  sizes=""
                  src="../../public/dashboard_icons/following2.png"
                ></v-img>
              </div>
            </v-col>
            <v-col class="py-10" cols="12" md="6">
              <div class="d-flex justify-center align-center">
                <h4>followers</h4>
              </div>
              <div class="d-flex justify-center align-center">
                <v-img
                  max-height="60"
                  max-width="60"
                  sizes=""
                  src="../../public/dashboard_icons/followers2.png"
                ></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="12">
        <v-card tile outlined elevation="1">
          <v-list dense tile>
            <v-list-item dense>
              <v-list-item-avatar>
                <v-img src="../../public/images/avatar1.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Maan Khan</v-list-item-title>
                <v-list-item-subtitle>photographer</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="">mdi-dots-vertical</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-carousel
            cycle
            continuous
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="279"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            >
 
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

    <!-- //////////////////////////////////////     Second Row     /////////////////////////////////////////////////// -->

    <!-- <v-row>
      <v-col cols="12" lg="4" md="12" sm="12">
        <v-card hover max-width="100%" class="mx-auto" height="100%">
          <v-list color="rgb(20, 104, 209)" two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="">Products</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="">mdi-dots-vertical</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-container class="scrollable">
            <v-card>
              <v-list>
                <v-list-item>
                  <img
                    class=""
                    style="
                      background-color: red;
                      border-radius: 5px 5px 5px 5px;
                    "
                    height="80"
                    width="120"
                    src="/images/shoes.png"
                    alt=""
                  />
                  <v-list-item-content class="ml-2">
                    <v-list-item-title
                      ><h3 class="grey--text">Red Shoes</h3></v-list-item-title
                    >
                    <v-list-item-subtitle
                      ><p class="grey--text">2.5k</p></v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn fab small class="text-capitalize mt-5">
                      <v-icon dense color="red">mdi-cart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card class="mt-3">
              <v-list>
                <v-list-item>
                  <img
                    class=""
                    style="
                      background-color: red;
                      border-radius: 5px 5px 5px 5px;
                    "
                    height="80"
                    width="120"
                    src="/images/shoes.png"
                    alt=""
                  />
                  <v-list-item-content class="ml-2">
                    <v-list-item-title
                      ><h3 class="grey--text">Red Shoes</h3></v-list-item-title
                    >
                    <v-list-item-subtitle
                      ><p class="grey--text">2.5k</p></v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn fab small class="text-capitalize mt-5">
                      <v-icon dense color="red">mdi-cart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

            </v-card>
            <v-card class="mt-3">
              <v-list>
                <v-list-item>
                  <img
                    class=""
                    style="
                      background-color: red;
                      border-radius: 5px 5px 5px 5px;
                    "
                    height="80"
                    width="120"
                    src="/images/shoes.png"
                    alt=""
                  />
                  <v-list-item-content class="ml-2">
                    <v-list-item-title
                      ><h3 class="grey--text">Red Shoes</h3></v-list-item-title
                    >
                    <v-list-item-subtitle
                      ><p class="grey--text">2.5k</p></v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn fab small class="text-capitalize mt-5">
                      <v-icon dense color="red">mdi-cart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4" md="12" sm="12">
        <v-card hover class="" height="100%">
          <v-sheet
            elevation="12"
            class="v-sheet--offset"
            height="auto"
            width="auto"
            color="rgb(101, 209, 101)"
          >
            <v-sparkline
              :labels="labels"
              :value="series"
              color="white"
              height="75"
              line-width="2"
              padding="16"
            >
            </v-sparkline>
          </v-sheet>

          <v-card-title>
            <h5 style="color: rgb(20, 104, 209)">Goals</h5>
          </v-card-title>

          <v-card-text class="">
            <p style="color: rgb(20, 104, 209)">Result from last compaign</p>
            <div>
              <v-progress-linear
                v-model="power"
                color="rgb(20, 104, 209)"
                height="10"
              >
              </v-progress-linear>
              <p>since jan 2020</p>
            </div>
            <div>
              <v-progress-linear
                v-model="value"
                :buffer-value="bufferValue"
              ></v-progress-linear>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              rounded
              retain-focus-on-click
              elevation="0"
              class="mt-5 text-capitalize"
              style="border: 2px solid rgb(20, 104, 209)"
            >
              <span style="color: rgb(20, 104, 209)">Details</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
 

    rating: 3.5,
    Callrating: 2.5,

    items: [
      {
        src: "/images/DSC_9325.JPG",
      },

      {
        src: "/images/DSC_9408.JPG",
      },
      {
        src: "/images/DSC_9629.JPG",
      },

      {
        src: "/images/DSC_9722.JPG",
      },
    ],
    power: 30,
    name: "Ahmed Hanif khan",
    value: 10,
    bufferValue: 20,
    interval: 0,

    loading: false,
    selection: 1,

    labels: [
      "Ja",
      "Fe",
      "Ma",
      "Ap",
      "Mai",
      "Ju",
      "Jul",
      "Au",
      "Se",
      "Oc",
      "No",
      "De",
    ],
    series: [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],

    checkbox: true,
  }),

  watch: {
    value(val) {
      if (val < 100) return;

      this.value = 0;
      this.bufferValue = 10;
      this.startBuffer();
    },
  },

  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.value += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 2000);
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },

  computed: {
    khan() {
      let words = this.name.toUpperCase().split(" ");
      let short_hand = words[0][0] + words[words.length - 1][0];
      return short_hand;
    },
  },
};
</script>

<style scoped>
.v-sheet--offset {
  /* top: -24px; */
  position: relative;
}

.scrollable {
  height: 250px;
  overflow: scroll;
}

.contant {
  /* position: relative;
   width: 600px; */

  border: 4px dotted rgb(240, 53, 116);
  padding: 100px;
  border-radius: 100px;
  display: inline-block;
}

/* .contant::after{

position: absolute;
top: 5px;
bottom: 15px;
left: -5px;
right: -5px;

border-radius: 50%;
border: 4px dotted palevioletred;

}  */
</style>
