<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" class="mx-2" small fab dark color="red">
        <v-icon dark>mdi-delete</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">Are you sure?</v-card-title>
      <v-card-text>
        The selected user is going to be permanently
        deleted.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Cacnel</v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
          @click.native="deleteUser()"
        >Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
    }
  }
};
</script>

<style>
</style>