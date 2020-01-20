<template>
  <div>
    <v-btn @click="import_clients">import clients</v-btn>
    <v-btn @click="import_socials">import socials</v-btn>
  </div>
</template>

<script>
// import { clients } from "../firebase";
import { socials } from "../firebase";
import { family } from "../firebase";
import { mock200 } from "../mock_data";
import { mock100 } from "../mock_data";
import moment from "moment";
export default {
  name: "Console",
  methods: {
    import_clients: function() {
      let array = mock200.map(e => {
        e.diacumple = moment(e.nacimiento, "X").format("DD");
        e.mescumple = moment(e.nacimiento, "X").format("MM");
        e.anocumple = moment(e.nacimiento, "X").format("YYYY");

        return e;
      });
      console.log(array);

      for (let i = 0; i < array.length; i++) {
        // clients.doc().set(array[i]);
      }
    },
    import_socials: function() {
      let array = mock100.map(e => {
        e.diacumple = moment(e.nacimiento, "X").format("DD");
        e.mescumple = moment(e.nacimiento, "X").format("MM");
        e.anocumple = moment(e.nacimiento, "X").format("YYYY");

        return e;
      });
      console.log(array);

      for (let i = 0; i < array.length; i++) {
        let filter = i % 4;
        switch (filter) {
          case 0:
            array[i].client_id = 101;
            socials.doc().set(array[i]);
            break;
          case 1:
            array[i].client_id = 101;
            family.doc().set(array[i]);
            break;
          case 2:
            array[i].client_id = 102;
            socials.doc().set(array[i]);
            break;
          case 3:
            array[i].client_id = 102;
            family.doc().set(array[i]);
            break;
        }
      }
    }
  }
};
</script>

<style>
</style>