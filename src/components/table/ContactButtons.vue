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
      this.$router.push({ name: "sociales", params: { id: this.selected } });
      this.$store.commit("setActiveUserId", this.selected);
    },
    family: function() {
      this.$router.push({ name: "familiares", params: { id: this.selected } });
      this.$store.commit("setActiveUserId", this.selected);
    }
  },
  computed: mapState(["selected"])
};
</script>

<style>
.localbtn {
  margin: 10px;
}
</style>