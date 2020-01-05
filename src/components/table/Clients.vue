<template>
  <RenderTable :table="this.table" />
</template>

<script>
import { mapState } from "vuex";
import { fetchAll } from "../../firebase";
import RenderTable from "./RenderTable";
export default {
  name: "Clients",
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
            text: "Sueldo",
            value: "sueldo",
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
      console.log(this.salary);
    }
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems: function() {
      fetchAll("clientes").then(e => {
        this.table.items = JSON.parse(JSON.stringify(e));
      });
    }
  }
};
</script>

<style>
</style>