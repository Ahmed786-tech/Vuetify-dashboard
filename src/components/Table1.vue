<template>
<v-container class="my-4">
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Staff</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn elevation="0"
            rounded
              color="info"
              dark
              class="mb-2 px-5 text-capitalize"
              v-bind="attrs"
              v-on="on"
            >
              New Member
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline px-2">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text class="py-0">
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field hide-details
                    outlined filled dense 
                      v-model="editedItem.name"
                      label=" name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                    hide-details
                    outlined filled dense
                      v-model="editedItem.calories"
                      label="email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                     hide-details
                    outlined filled dense
                      v-model="editedItem.fat"
                      label="role"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                     hide-details
                    outlined filled dense
                      v-model="editedItem.carbs"
                      label="contact"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                     hide-details
                    outlined filled dense
                      v-model="editedItem.protein"
                      label="status"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions class="px-9 py-3">
              <v-spacer></v-spacer>
              <v-btn
                color="info"
                class="text-capitalize"
                elevation="0"
                dark
                
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                class="text-capitalize"
                elevation="0"
                dark
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon color="success"
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
      color="error"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Email', value: 'calories' },
        { text: 'Role', value: 'fat' },
        { text: 'Contact', value: 'carbs' },
        { text: 'Status', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
      },
      defaultItem: {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Staff' : 'Edit Staff'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Ahmed',
            calories: 'Ahmedhanifkhan786@gmail.com',
            fat: 'Admin',
            carbs: '030089283982',
            protein: 'active',
          },
           {
            name: 'Ahmed',
            calories: 'Ahmedhanifkhan786@gmail.com',
            fat: 'Admin',
            carbs: '030089283982',
            protein: 'active',
          },
           {
            name: 'Ahmed',
            calories: 'Ahmedhanifkhan786@gmail.com',
            fat: 'Admin',
            carbs: '030089283982',
            protein: 'active',
          },
           {
            name: 'Ahmed',
            calories: 'Ahmedhanifkhan786@gmail.com',
            fat: 'Admin',
            carbs: '030089283982',
            protein: 'active',
          },
           {
            name: 'Ahmed',
            calories: 'Ahmedhanifkhan786@gmail.com',
            fat: 'Admin',
            carbs: '030089283982',
            protein: 'active',
          },
           {
            name: 'Ahmed',
            calories: 'Ahmedhanifkhan786@gmail.com',
            fat: 'Admin',
            carbs: '030089283982',
            protein: 'active',
          },
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>