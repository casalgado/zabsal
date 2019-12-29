<template>
  <v-btn @click="import_data">import</v-btn>
</template>

<script>
import { clients } from "../firebase";
export default {
  name: "Console",
  methods: {
    import_data: function() {
      let array = ["test"];
      for (let i = 0; i < array.length; i++) {
        clients.doc().set(array[i]);
      }
    }
  }
};
</script>

<style>
</style>