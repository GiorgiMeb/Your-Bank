<template>
    <Navbar />
    <SignupMain />
    <LoginCarousel />
    <FooterPage />
  </template>
  
  <script>
  import Navbar from '../Navbar.vue'
  import SignupMain from '../SignupMain.vue'
  import LoginCarousel from '../LoginCarousel.vue'
  import FooterPage from '../FooterPage.vue'

  
  export default {
      components: {Navbar, SignupMain, LoginCarousel, FooterPage}
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