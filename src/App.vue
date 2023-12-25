<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import HomePage from './components/Pages/HomePage.vue'
import Careers from './components/Pages/CareersPage.vue'
import About from './components/Pages/AboutPage.vue'
import Security from './components/Pages/SecurityPage.vue'
import Login from './components/Pages/LoginPage.vue'
import Navbar from './components/Navbar.vue'
import MainPage from './components/MainPage.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'
import ForthPage from './components/ForthPage.vue'
import FifthPage from './components/FifthPage.vue'
import SixthPage from './components/SixthPage.vue'
import SeventhPage from './components/SeventhPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {

  components: { HomePage, Careers, About, Navbar, MainPage, SecondPage, ThirdPage, ForthPage, FifthPage, SixthPage, SeventhPage, FooterPage, Security, Login}
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
