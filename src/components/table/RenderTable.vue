<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="12" sm="4">
        <v-card class="pa-12" outlined tile>
          <v-text-field v-model="searchInput" label="Buscar" single-line hide-details />

          <!-- <v-text-field
            v-if="this.type == 'client'"
            v-model="salary"
            label="Salario Mayor A"
            single-line
            hide-details
          />
          <v-spacer />-->
        </v-card>
        <v-card class="pa-5" outlined tile>
          <ContactButtons v-if="this.show_contact_buttons" />
          <v-btn v-if="add_button" class="localbtn" @click="add">agregar</v-btn>
          <!-- <div v-for="item in this.selected" :key="item.id">
            <div v-for="(value, name) in item" :key="name">
              <p>
                <strong>{{ name }}:</strong>
                {{ value }}
              </p>
            </div>
          </div>-->
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
    type: String
  },
  data() {
    return {
      selected: [],
      searchInput: "",
      salary: ""
    };
  },
  computed: {
    add_button() {
      return this.type == "family" || this.type == "social";
    },
    detail() {
      return this.selected;
    },
    show_contact_buttons() {
      return this.selected.length != "0" && this.type == "client";
    }
  },
  methods: {
    add: function() {
      console.log(this.id);
    }
  },
  watch: {
    salary() {
      this.$store.commit("setSalary", parseInt(this.salary));
    },
    selected() {
      if (this.selected.length > 0) {
        this.$store.commit("setSelectedUserId", this.selected[0].id);
      }
    }
  }
};
</script>

<style>
</style>