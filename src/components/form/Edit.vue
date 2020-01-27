<template>
  <RenderForm :collection="collection" :show_contract="false" :edit="true" :id="id" />
</template>

<script>
import RenderForm from "./RenderForm";
export default {
  name: "Edit",
  components: { RenderForm },
  data() {
    return {};
  },
  computed: {
    collection() {
      return this.$route.query.collection;
    },
    id() {
      return JSON.stringify(this.$route.query.id);
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
