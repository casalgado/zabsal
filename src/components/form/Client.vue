<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="12" sm="4">
        <v-card class="pa-12" tile>{{ cityOptions }}</v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="8">
        <v-container fluid>
          <v-row>
            <v-col cols="12" xs="12" sm="6">
              <v-text-field v-model="first_names" label="Nombres" required />
            </v-col>
            <v-col cols="12" xs="12" sm="6">
              <v-text-field v-model="last_names" label="Apellidos" required />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="4">
              <v-select v-model="state" :items="states" label="Departamento" required />
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-select
                v-model="city"
                :items="cityOptions"
                label="Ciudad"
                :required="this.state != 'Bogota'"
                :disabled="this.state == 'Bogota'"
              />
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-select
                v-model="district"
                :items="districts"
                label="Localidad"
                :required="this.city == 'Barranquilla'"
                :disabled="this.city != 'Barranquilla'"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="2">
              <v-select v-model="road_type" :items="road_types" label="Tipo" required />
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-text-field v-model="road_number_one" label="Numero" required />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <v-select
                v-model="road_variants_one"
                :items="road_variants"
                label="Variante"
                required
              />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <h4>#</h4>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-text-field v-model="road_number_two" label="Numero" required />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <v-select
                v-model="road_variants_two"
                :items="road_variants"
                label="Variante"
                required
              />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <h4>-</h4>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-text-field v-model="plaque_number" label="Numero" required />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  road_types,
  road_variants,
  road_variants_ext,
  states,
  cities,
  districts
} from "./options/address";
export default {
  name: "Client",
  data() {
    return {
      first_names: "",
      last_names: "",
      state: "",
      states: states,
      city: "",
      district: "",
      districts: districts,
      road_type: "",
      road_types: road_types,
      road_number_one: "",
      road_variants_one: "",
      road_variants_ext_one: "",
      road_number_2: "",
      road_variants_two: "",
      road_variants_ext_two: "",
      plaque_number: "",
      road_variants: road_variants,
      road_variants_ext: road_variants_ext
    };
  },
  computed: {
    cityOptions() {
      if (this.state == "") {
        return [
          ...cities.atlantico,
          ...cities.cesar,
          ...cities.magdalena,
          "Bogota"
        ];
      } else {
        return cities[this.state];
      }
    }
  }
};
</script>

<style>
</style>
