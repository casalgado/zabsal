<template>
  <div>
    <v-btn class="localbtn" @click="socials">sociales</v-btn>
    <v-btn class="localbtn" @click="family">familiares</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ContactButtons",
  methods: {
    socials: function() {
      this.$router.push({ name: "sociales", params: { id: this.userID } });
    },
    family: function() {
      this.$router.push({ name: "familiares", params: { id: this.userID } });
    }
  },
  computed: mapState(["userID"])
};
</script>

<style>
.localbtn {
  margin: 10px;
}
</style>