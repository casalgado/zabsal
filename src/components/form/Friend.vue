<template>
  <RenderForm :collection="'friends'" :show_contract="false" />
</template>

<script>
import RenderForm from "./RenderForm";
export default {
  name: "Friend",
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
