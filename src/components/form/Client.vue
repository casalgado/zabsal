<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" xs="12" sm="4">
        <v-card class="pa-12" outlined tile>1</v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="8">
        <v-container fluid>
          <v-row>
            <v-col cols="12" xs="12" sm="6">
              <v-text-field v-model="first_names" label="Nombres" required outlined></v-text-field>
            </v-col>
            <v-col cols="12" xs="12" sm="6">
              <v-text-field v-model="last_names" label="Apellidos" required outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="4">
              <v-select v-model="state" :items="states" label="Departamento" required outlined></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-select v-model="city" :items="cities" label="Ciudad" required outlined></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="4">
              <v-select v-model="district" :items="districts" label="Localidad" required outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="2">
              <v-select v-model="state" :items="states" label="Tipo" required outlined></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-select v-model="city" :items="cities" label="Numero" required outlined></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-select
                v-model="district"
                :items="districts"
                label="Alfanumerico"
                required
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-select v-model="state" :items="states" label="Tipo" required outlined></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-select v-model="city" :items="cities" label="Ciudad" required outlined></v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <v-select v-model="district" :items="districts" label="Localidad" required outlined></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Client",
  data() {
    return {
      first_names: "",
      last_names: "",
      state: "",
      states: [
        { text: "Atlantico", value: "atl" },
        { text: "Bolivar", value: "blv" }
      ],
      city: "",
      cities: [
        { text: "Barranquilla", value: "1" },
        { text: "Baranoa", value: "2" },
        { text: "Candelaria", value: "3" },
        { text: "Galapa", value: "4" },
        { text: "Luruaco", value: "5" },
        { text: "Malambo", value: "6" },
        { text: "Manatí", value: "7" },
        { text: "Piojó", value: "8" },
        { text: "Polonuevo", value: "9" },
        { text: "Sabanagrande", value: "10" },
        { text: "Sabanalarga", value: "11" },
        { text: "Santa Lucía", value: "12" },
        { text: "Santo Tomás", value: "13" },
        { text: "Soledad", value: "14" },
        { text: "Suan", value: "15" },
        { text: "Tubará", value: "16" },
        { text: "Usiacurí", value: "17" },
        { text: "Repelón", value: "18" },
        { text: "Puerto Colombia", value: "19" },
        { text: "Ponedera", value: "20" },
        { text: "Juan de Acosta", value: "21" },
        { text: "Palmar de Varela", value: "22" },
        { text: "Campo de La Cruz", value: "23" }
      ],
      district: "",
      districts: [
        { text: "Suroccidente", value: "1" },
        { text: "Suroriente", value: "2" },
        { text: "Norte - Centro Historico", value: "3" },
        { text: "Metropolitana", value: "4" },
        { text: "Riomar", value: "5" }
      ]
    };
  }
};
</script>

<style>
</style>
