<template>
  <div>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0" elevation="20" append-icon="mdi-account-circle">
        <h1>{{ user.name }}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <ul>
          <li>Email: {{ user.email }}</li>
          <li>Phone: {{ user.phone }}</li>
          <li>ID: {{ user.id }}</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <EditUser :user="user" />
        <DeleteUser :user="user" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EditUser from "@/views/EditUser.vue";
import DeleteUser from "@/views/DeleteUser.vue";

export default {
  props: {
    user: Object
  },
  components: {
    EditUser,
    DeleteUser
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped></style>
