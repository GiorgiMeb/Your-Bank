<template>
  <Navbar />
  <CareersMain />
  <AboutPage />
  <AboutSecond />
  <AboutThird />
  <AboutFourth />
  <FooterPage />
</template>

<script>
import Navbar from '../Navbar.vue'
import AboutPage from '../AboutMain.vue'
import AboutSecond from '../AboutSecond.vue'
import AboutThird from '../AboutThird.vue'
import AboutFourth from '../AboutFourth.vue'
import FooterPage from '../FooterPage.vue'

export default {
  
components: {Navbar, AboutPage, AboutSecond, AboutThird, AboutFourth, FooterPage}
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lexend', sans-serif;
}
</style>