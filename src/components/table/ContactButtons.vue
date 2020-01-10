<template>
  <div>
    <v-btn class="localbtn" @click="socials">sociales</v-btn>
    <v-btn class="localbtn" @click="family">familiares</v-btn>
  </div>
</template>

<script>
export default {
  name: "ContactButtons",
  methods: {
    socials: function() {
      console.log("socials");
    },
    family: function() {
      console.log("family");
    }
  }
};
</script>

<style>
.localbtn {
  margin: 10px;
}
</style>