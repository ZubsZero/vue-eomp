<template>
  <NavBar/>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavBar from "@/components/NavBar-Comp.vue"
import FooterComp from "@/components/Footer-Comp.vue"
export default {
components: {NavBar, FooterComp}

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



body {
  background-color: black !important;
}
</style>
