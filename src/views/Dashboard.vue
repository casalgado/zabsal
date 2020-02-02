<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="4"
      >
        <v-card
          class="pa-5"
          outlined
          tile
        >
          <p>Los cumpleaños {{ thisMonth }}</p>
          <div
            v-for="client in this.birthdays"
            :key="client.id"
          >
            {{ displayDate(client.nacimiento) }} - {{ client.nombres }}
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="4"
      >
        <v-card
          class="pa-5"
          outlined
          tile
        >
          <p>vencimiento contratos 1 trimestre 2020</p>
          <div
            v-for="client in this.expiring_soon"
            :key="client.id"
          >
            {{ displayDate(client.fin_contrato) }} - {{ client.nombres }}
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="4"
      >
        <v-card
          class="pa-12"
          outlined
          tile
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { fetchByMonthBirth, fetchByDateRange } from "../firebase";
import moment from "moment";
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      birthdays: [],
      expiring_soon: [],
      today: moment().format()
    };
  },
  computed: {
    thisMonth() {
      return moment().format("MMMM");
    }
  },
  mounted() {
    this.getItems();
  },
  methods: {
    getItems: function() {
      let start = moment()
        .startOf("quarter")
        .format("X");
      let end = moment()
        .endOf("quarter")
        .format("X");
      let month = moment()
        .add(0, "month")
        .format("MM");

      fetchByMonthBirth(month).then(e => {
        this.birthdays = JSON.parse(JSON.stringify(e)).sort((a, b) =>
          parseInt(a.diacumple) > parseInt(b.diacumple) ? 1 : -1
        );
      });

      fetchByDateRange(start, end).then(e => {
        this.expiring_soon = JSON.parse(JSON.stringify(e)).sort((a, b) =>
          parseInt(a.fin_contrato) > parseInt(b.fin_contrato) ? 1 : -1
        );
      });
    },
    displayDate(string) {
      return moment(string, "X").format("DD MMM YYYY");
    }
  }
};
</script>

