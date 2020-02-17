<template>
  <div>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Create User</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createUser">
          <v-text-field
            v-model="user.name"
            label="Name"
            required
            :error-messages="nameErrors"
            :counter="10"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="user.phone"
            label="E-Mail"
            required
            :error-messages="phoneErrors"
            :counter="11"
            prepend-icon="mdi-cellphone"
          />
          <v-text-field v-model="user.email" label="Phone" prepend-icon="mdi-email" />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click.native="createUser()" type="submit" color="success">Create</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLenght, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLenght: maxLenght(10) },
    email: { required, email }
  },

  data() {
    return {
      user: this.newUser()
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("createUser", this.user).then(() => {
        this.$router.push({
          name: "users"
        });
        this.user = this.newUser();
      });
    },
    newUser() {
      return {
        id: "",
        name: "",
        email: "",
        phone: ""
      };
    }
  },
  computed: {
    nameErrors() {
      return 1;
    },
    phoneErrors() {
      return 1;
    }
  }
};
</script>

<style></style>
