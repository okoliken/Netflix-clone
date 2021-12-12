<template>
  <header class="bg-black w-full fixed bg-opacity-90">
    <nav
      class="flex items-center justify-between container mx-auto h-16 px-1 md:px-0"
    >
      <div>
        <router-link to="/">
          <img
            src="../assets/netflix-logo-png-2584.png"
            alt=""
            class="w-32 hidden md:block"
          />
        </router-link>
        <router-link to="/">
          <img
            src="../assets/netflix-logo-png-2616.png"
            alt=""
            class="w-16 block md:hidden"
          />
        </router-link>
      </div>

      <ul class="flex items-center space-x-4 md:space-x-10">
        <li>
          <router-link
            to="/"
            class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-md px-2 md:px-3 py-2 bg-red-700"
            >Back to Home</router-link
          >
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
