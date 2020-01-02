<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="12" sm="4">
        <v-card class="pa-12" outlined tile>
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
          :items-per-page="50"
          :item-key="'id'"
          single-select
          show-select
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RenderTable",
  props: {
    table: Object
  },
  data() {
    return {
      selected: []
    };
  },
  computed: {
    detail() {
      return this.selected;
    }
  }
};
</script>

<style>
</style>