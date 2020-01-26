<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="12" sm="3">
        <v-card class="pa-12" tile>{{ }}</v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="9">
        <v-container fluid id="form">
          <v-row>
            <v-col cols="12" xs="12" sm="4">
              <v-text-field v-model="first_names" dense label="Nombres" required />
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-text-field v-model="last_names" dense label="Apellidos" required />
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-text-field v-model="id_number" dense label="Cedula" required />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xs="12" sm="4">
              <v-select
                v-model="day_of_birth"
                :items="days"
                dense
                label="Dia"
                required
                placeholder
              />
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-select
                v-model="month_of_birth"
                :items="months"
                dense
                label="Mes"
                required
                placeholder
              />
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-select
                v-model="year_of_birth"
                :items="years"
                dense
                label="Año"
                required
                placeholder
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xs="12" sm="3">
              <v-select v-model="state" :items="states" dense label="Departamento" required />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="city"
                :items="cityOptions"
                dense
                label="Ciudad"
                :required="this.state != 'Bogota'"
                :disabled="this.state == 'Bogota'"
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="district"
                :items="districts"
                dense
                label="Localidad"
                :required="this.city == 'Barranquilla'"
                :disabled="this.city != 'Barranquilla'"
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select v-model="vehicle" :items="vehicles" dense label="vehiculo" required />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xs="12" sm="2">
              <v-select
                v-model="road_type"
                :items="road_types"
                dense
                label="Tipo"
                required
                placeholder=" "
              />
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-text-field
                v-model="road_number_one"
                dense
                label="Numero"
                required
                placeholder=" "
              />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <v-select
                v-model="road_variants_one"
                :items="road_variants"
                dense
                label="Variante"
                required
                placeholder=" "
              />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <h4>#</h4>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-text-field
                v-model="road_number_two"
                dense
                label="Numero"
                required
                placeholder=" "
              />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <v-select
                v-model="road_variants_two"
                :items="road_variants"
                dense
                label="Variante"
                required
                placeholder=" "
              />
            </v-col>
            <v-col cols="12" xs="12" sm="1">
              <h4>-</h4>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-text-field v-model="plaque_number" dense label="Numero" required placeholder=" " />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="education"
                :items="education_levels"
                dense
                label="Educacion"
                required
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-text-field v-model="company" dense label="Empresa" required placeholder />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select v-model="job_position" :items="job_positions" dense label="Cargo" required />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-text-field v-model="salary" dense label="Salario" required placeholder />
            </v-col>
          </v-row>
          <v-row v-if="show_contract">
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="contract_month_start"
                :items="months"
                dense
                label="Mes Inicio"
                required
                placeholder
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="contract_year_start"
                :items="years"
                dense
                label="Año Inicio"
                required
                placeholder
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="contract_month_end"
                :items="months"
                dense
                label="Mes Fin"
                required
                placeholder
              />
            </v-col>
            <v-col cols="12" xs="12" sm="3">
              <v-select
                v-model="contract_year_end"
                :items="years"
                dense
                label="Año Fin"
                required
                placeholder
              />
            </v-col>
          </v-row>

          <v-row>
            <v-btn class="primary" @click="submit">Crear Vinculado</v-btn>
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
import { days, months, years } from "./options/dates";
import { education_levels, vehicles, job_positions } from "./options/personal";
import { clients } from "../../firebase";
export default {
  name: "RenderForm",
  props: {
    type: String,
    show_contract: Boolean
  },
  data() {
    return {
      first_names: "",
      last_names: "",
      id_number: "",
      days: days,
      months: months,
      years: years,
      day_of_birth: "",
      month_of_birth: "",
      year_of_birth: "",
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
      road_number_two: "",
      road_variants_two: "",
      road_variants_ext_two: "",
      plaque_number: "",
      road_variants: road_variants,
      road_variants_ext: road_variants_ext,
      vehicle: "",
      vehicles: vehicles,
      education: "",
      education_levels: education_levels,
      job_position: "",
      job_positions: job_positions,
      company: "",
      salary: "",
      contract_year_start: "",
      contract_month_start: "",
      contract_year_end: "",
      contract_month_end: ""
    };
  },
  computed: {
    form_object() {
      return {
        nombres: this.first_names,
        apellidos: this.last_names,
        diacumple: this.day_of_birth,
        mescumple: this.month_of_birth,
        anocumple: this.year_of_birth,
        id: this.id_number,
        departamento: this.state,
        ciudad: this.city,
        localidad: this.district,
        tipo_de_via: this.road_type,
        num_via_principal: this.road_number_one,
        var_via_principal: this.road_variants_one,
        num_via_alterna: this.road_number_two,
        var_via_alterna: this.road_variants_two,
        num_placa: this.plaque_number,
        vehiculo: this.vehicle,
        educacion: this.education,
        cargo: this.job_position,
        empresa: this.company,
        salario: this.salary,
        m_i_contrato: this.contract_month_start,
        a_i_contrato: this.contract_year_start,
        m_f_contrato: this.contract_month_end,
        a_f_contrato: this.contract_month_end
      };
    },
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
  },
  methods: {
    submit() {
      let id_string = this.form_object.id;
      this.form_object.id = parseInt(this.form_object.id);
      console.log(this.form_object);
      console.log(clients.doc(id_string));
    }
  }
};
</script>

<style>
h4 {
  margin-top: 15px;
}
</style>
