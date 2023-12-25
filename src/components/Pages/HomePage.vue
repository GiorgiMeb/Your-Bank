<template>
<Navbar />
<MainPage />
<SecondPage />
<ThirdPage />
<ForthPage />
<FifthPage />
<SixthPage />
<SeventhPage />
<FooterPage />
</template>

<script>
import Navbar from '../Navbar.vue'
import MainPage from '../MainPage.vue'
import SecondPage from '../SecondPage.vue'
import ThirdPage from '../ThirdPage.vue'
import ForthPage from '../ForthPage.vue'
import FifthPage from '../FifthPage.vue'
import SixthPage from '../SixthPage.vue'
import SeventhPage from '../SeventhPage.vue'
import FooterPage from '../FooterPage.vue'

export default {
    components: { Navbar, MainPage, SecondPage, ThirdPage, ForthPage, FifthPage, SixthPage, SeventhPage, FooterPage }
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