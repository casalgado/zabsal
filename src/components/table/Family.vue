<template>
  <RenderTable :table="this.table" :type="'family'" />
</template>

<script>
import { mapState } from "vuex";
import { fetchById } from "../../firebase";
import RenderTable from "./RenderTable";
import { getClient } from "../../firebase";

export default {
  name: "Clients",
  components: { RenderTable },
  data() {
    return {
      setSalary: 0,
      id: this.$route.params.id,
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
      this.$store.commit(
        "setTitle",
        `${e.nombres} ${e.apellidos} - Familiares`
      );
    });
  },
  destroyed() {
    this.$store.commit("setSelectedUserId", null);
  },
  methods: {
    getItems: function() {
      fetchById("family", this.id).then(e => {
        this.table.items = JSON.parse(JSON.stringify(e));
      });
    }
  }
};
</script>

<style>
</style>