<template>
  <div>
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    UserCard
  },
  computed: {
    ...mapState(["users"])
  },
  created() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>

<style scoped></style>
