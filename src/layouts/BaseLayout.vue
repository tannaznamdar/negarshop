<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style></style>

<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Navbar, Footer },
  name: 'BaseLayout'
}
</script>