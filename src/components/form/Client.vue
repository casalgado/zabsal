<template>
  <RenderForm :collection="'clients'" :show_contract="true" />
</template>

<script>
import RenderForm from "./RenderForm";
export default {
  name: "Client",
  components: { RenderForm },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>
