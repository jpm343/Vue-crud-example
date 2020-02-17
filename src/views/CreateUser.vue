<template>
  <div>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Create User</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createUser">
          <v-text-field
            v-model="editedUser.name"
            label="Name"
            required
            :counter="10"
            :error-messages="nameErrors"
            @input="$v.editedUser.name.$touch()"
            @blur="$v.editedUser.name.$touch()"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="editedUser.phone"
            label="Phone"
            required
            :counter="11"
            :error-messages="phoneErrors"
            @input="$v.editedUser.phone.$touch()"
            @blur="$v.editedUser.phone.$touch()"
            prepend-icon="mdi-cellphone"
          />
          <v-text-field
            v-model="editedUser.email"
            label="E-Mail"
            :error-messages="emailErrors"
            @input="$v.editedUser.email.$touch()"
            @blur="$v.editedUser.email.$touch()"
            prepend-icon="mdi-email"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          :disabled="$v.editedUser.$error"
          @click.native="createUser()"
          type="submit"
          color="success"
          >Create</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { UserFormValidationMixin } from "@/mixins/UserFormValidationMixin.js";

export default {
  mixins: [validationMixin, UserFormValidationMixin],

  data() {
    return {
      editedUser: this.newUser()
    };
  },
  methods: {
    createUser() {
      this.$v.$touch();
      if (!this.$v.editedUser.$anyError) {
        this.$store.dispatch("createUser", this.editedUser).then(() => {
          this.$router.push({
            name: "users"
          });
          this.editedUser = this.newUser();
        });
      }
    },
    newUser() {
      return {
        id: "",
        name: "",
        email: "",
        phone: ""
      };
    }
  }
};
</script>

<style></style>
