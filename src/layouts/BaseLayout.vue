<template>
  <div>
    <Navbar />
    <div >
      <slot />
    </div>
    <Footer />
  </div>

</template>

<style>

</style>

<script>
import Navbar from "../components/NavBar.vue";

export default {
  components: { Navbar },
  name: 'BaseLayout'
}
</script>