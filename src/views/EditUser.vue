<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-2" small fab dark color="cyan" v-on="on">
            <v-icon dark>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Edit User: {{ user.name }}</span>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Name" v-model="editedUser.name" required></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field label="Email" v-model="editedUser.email" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Phone" v-model="editedUser.phone" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
              @click.native="updateUser()"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
      dialog: false,
      editedUser: this.getUserCopy()
    };
  },
  methods: {
    updateUser() {
      this.$store.dispatch("updateUser", this.editedUser).then(() => {
        this.$router.go();
      });
    },
    getUserCopy() {
      return Object.assign({}, this.user);
    }
  }
};
</script>

<style scoped>
</style>