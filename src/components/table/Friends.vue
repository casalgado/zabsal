<template>
  <RenderTable :table="this.table" :collection="'friends'" />
</template>

<script>
import { mapState } from "vuex";
import { fetchAll } from "../../firebase";
import RenderTable from "./RenderTable";
export default {
  name: "Friends",
  components: { RenderTable },
  data() {
    return {
      setSalary: 0,
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
          },
          {
            text: "Salario",
            value: "salario",
            sortable: true,
            filter: value => {
              if (!this.setSalary) return true;

              return value > parseInt(this.setSalary);
            }
          }
        ]
      }
    };
  },
  computed: mapState(["salary"]),
  watch: {
    salary() {
      this.setSalary = this.$store.state.salary;
    }
  },
  mounted() {
    this.getItems();
    this.$store.commit("setTitle", "Vinculados");
  },
  destroyed() {
    this.$store.commit("setTitle", "Base de Datos");
  },
  methods: {
    getItems: function() {
      fetchAll("friends").then(e => {
        this.table.items = JSON.parse(JSON.stringify(e));
      });
    }
  }
};
</script>

<style>
</style>