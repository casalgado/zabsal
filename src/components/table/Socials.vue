<template>
  <RenderTable :table="this.table" :collection="'socials'" />
</template>

<script>
import { mapState } from "vuex";
import { fetchByClientId } from "../../firebase";
import RenderTable from "./RenderTable";
import { getClient } from "../../firebase";

export default {
  name: "Socials",
  components: { RenderTable },
  data() {
    return {
      setSalary: 0,
      id: this.$route.params.id,
      title: "",
      table: {
        items: [],
        headers: [
          {
            text: "Nombres",
            value: "nombres",
            sortable: true
          },
          {
            text: "Apellidos",
            value: "apellidos",
            sortable: true
          },
          {
            text: "Departamento",
            value: "departamento",
            sortable: true
          },
          {
            text: "Ciudad",
            value: "ciudad",
            sortable: true
          }
        ]
      }
    };
  },
  computed: mapState(["salary"]),
  mounted() {
    this.getItems();

    getClient(this.id).then(e => {
      this.$store.commit("setTitle", `${e.nombres} ${e.apellidos} - Sociales`);
    });
  },
  destroyed() {
    this.$store.commit("setSelectedUserId", null);
  },
  methods: {
    getItems: function() {
      fetchByClientId("socials", this.id).then(e => {
        this.table.items = JSON.parse(JSON.stringify(e));
      });
    }
  }
};
</script>

<style>
</style>