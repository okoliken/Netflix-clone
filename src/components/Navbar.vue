<template>
  <nav
    class="flex items-center justify-between container mx-auto h-16 px-1 md:px-0"
  >
    <slot name="popularMovies"></slot>
    <slot name="movieBanner"></slot>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
