<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    // if (this.$route.path == "/") {
    //   this.$router.push({ name: "dashboard" });
    // }
  }
};
</script>
