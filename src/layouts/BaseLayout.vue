<template>
  <div>
    <Navbar />
    <div>
      <slot />
    </div>
    <Footer />
    <MobileMenubar/>
  </div>
</template>

<style></style>

<script>
import Navbar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import MobileMenubar from '../components/MobileMenubar.vue';

export default {
  components: { Navbar, Footer, MobileMenubar },
  name: 'BaseLayout'
}
</script>