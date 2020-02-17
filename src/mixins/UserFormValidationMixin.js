import { required, email, numeric, maxLength } from "vuelidate/lib/validators";

export const UserFormValidationMixin = {
  created() {},
  data() {
    return {};
  },
  validations: {
    editedUser: {
      name: { required, maxLength: maxLength(10) },
      phone: { required, numeric, maxLength: maxLength(11) },
      email: { required, email }
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.editedUser.name.$dirty) return errors;
      !this.$v.editedUser.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.editedUser.name.required && errors.push("Name is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.editedUser.phone.$dirty) return errors;
      !this.$v.editedUser.phone.maxLength &&
        errors.push("Phone must have 11 characters at most.");
      !this.$v.editedUser.phone.required && errors.push("Phone is required.");
      !this.$v.editedUser.phone.numeric && errors.push("Example: 56912345678");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.editedUser.email.$dirty) return errors;
      !this.$v.editedUser.email.email && errors.push("Must be a valid email");
      !this.$v.editedUser.email.required && errors.push("Email is required");
      return errors;
    }
  }
};
