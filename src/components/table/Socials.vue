<template>
  <div>
    <p>{{this.id}}</p>
    <RenderTable :table="this.table" :client="false" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchById } from "../../firebase";
import RenderTable from "./RenderTable";
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
  },
  methods: {
    getItems: function() {
      fetchById("socials", this.id).then(e => {
        this.table.items = JSON.parse(JSON.stringify(e));
      });
    }
  }
};
</script>

<style>
</style>