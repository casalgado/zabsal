<template>
  <v-btn @click="import_data">
    import
  </v-btn>
</template>

<script>
import { clients } from "../firebase";
import { mock100 } from "../mock_data";
import moment from "moment";
export default {
  name: "Console",
  methods: {
    import_data: function() {
      let array = mock100.map(e => {
        e.diacumple = moment(e.nacimiento, "X").format("DD");
        e.mescumple = moment(e.nacimiento, "X").format("MM");
        e.anocumple = moment(e.nacimiento, "X").format("YYYY");

        return e;
      });
      console.log(array);

      for (let i = 0; i < array.length; i++) {
        clients.doc().set(array[i]);
        console.log(i);
      }
    }
  }
};
</script>

<style>
</style>