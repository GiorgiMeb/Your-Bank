<template>
    <Navbar />
    <CareersMain />
    <CareersSecond />
    <CareersThird />
    <CareersForth />
    <SeventhPage />
    <FooterPage />
</template>

<script>
import Navbar from '../Navbar.vue'
import CareersMain from '../CareersMain.vue'
import CareersSecond from '../CareersSecond.vue'
import CareersThird from '../CareersThird.vue'
import CareersForth from '../CreersForth.vue'
import SeventhPage from '../SeventhPage.vue'
import FooterPage from '../FooterPage.vue'

export default {
    components: {Navbar, CareersMain, CareersSecond, CareersThird, CareersForth, SeventhPage, FooterPage}
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>