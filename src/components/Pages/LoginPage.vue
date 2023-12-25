<template>
  <Navbar />
  <LoginMain />
  <LoginScroll />
  <LoginCarousel />
  <FooterPage />
</template>

<script>
import Navbar from '../Navbar.vue'
import LoginMain from '../LoginMain.vue'
import LoginScroll from '../LoginScroll.vue'
import FooterPage from '../FooterPage.vue'
import LoginCarousel from '../LoginCarousel.vue'


export default {
    components: {Navbar, LoginMain, LoginScroll, FooterPage, LoginCarousel}
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