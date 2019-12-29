<template>
  <RenderTable :table="this.table" />
</template>

<script>
import { fetchAll } from "../../firebase";
import RenderTable from "./RenderTable";
export default {
  name: "Clients",
  components: { RenderTable },
  data() {
    return {
      table: {
        items: [],
        headers: [
          {
            text: "Nombres",
            value: "first_name",
            sortable: true
          },
          {
            text: "Apellidos",
            value: "last_name",
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
          },
          { text: "id", value: "id", sortable: true }
        ]
      }
    };
  },
  methods: {
    getItems: function() {
      fetchAll("clientes").then(e => {
        console.log(e);
        this.table.items = JSON.parse(JSON.stringify(e));
      });
    }
  },
  mounted() {
    this.getItems();
  }
};
</script>

<style>
</style>