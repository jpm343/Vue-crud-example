<template>
  <div>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title
        class="pb-0"
        elevation="20"
        append-icon="mdi-account-circle"
      >
        <h1>{{ user.name }}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text
        ><ul>
          <li>Email: {{ user.email }}</li>
          <li>Phone: {{ user.phone }}</li>
          <li>ID: {{ user.id }}</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click.native="updateUser()"
          class="mx-2"
          small
          fab
          dark
          color="cyan"
        >
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="mx-2" small fab dark color="red">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline">Are you sure?</v-card-title>
            <v-card-text
              >The selected user is going to be permanently
              deleted.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false"
                >Cacnel</v-btn
              >
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
                @click.native="deleteUser()"
                >Confirm</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("deleteUser", this.user);
    },
    updateUser() {
      console.log("update");
    }
  }
};
</script>

<style scoped></style>
