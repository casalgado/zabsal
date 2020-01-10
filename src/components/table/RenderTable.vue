<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="12" sm="4">
        <v-card class="pa-12" outlined tile>
          <v-text-field v-model="searchInput" label="Buscar" single-line hide-details />

          <v-text-field
            v-if="this.client"
            v-model="salary"
            label="Salario Mayor A"
            single-line
            hide-details
          />
          <v-spacer />
        </v-card>
        <v-card class="pa-5" outlined tile>
          <ContactButtons v-if="this.showButtons" />
          <div v-for="item in this.selected" :key="item.id">
            <div v-for="(value, name) in item" :key="value">
              <p>
                <strong>{{ name }}:</strong>
                {{ value }}
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="8">
        <v-data-table
          v-model="selected"
          :headers="this.table.headers"
          :items="this.table.items"
          :items-per-page="15"
          :item-key="'id'"
          :search="this.searchInput"
          single-select
          show-select
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactButtons from "./ContactButtons";
export default {
  name: "RenderTable",
  components: { ContactButtons },
  props: {
    table: Object,
    client: Boolean
  },
  data() {
    return {
      selected: [],
      searchInput: "",
      salary: ""
    };
  },
  computed: {
    detail() {
      return this.selected;
    },
    showButtons() {
      return this.selected.length != "0" && this.client;
    }
  },
  watch: {
    salary() {
      this.$store.commit("setSalary", parseInt(this.salary));
    }
  }
};
</script>

<style>
</style>