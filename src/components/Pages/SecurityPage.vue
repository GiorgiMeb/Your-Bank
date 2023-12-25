<template>
    <Navbar />
    <SecurityMain />
    <SecuritySecond />
    <SecurityThird />
    <FooterPage />
</template>

<script>
import Navbar from '../Navbar.vue'
import SecurityMain from '../SecurityMain.vue'
import SecuritySecond from '../SecuritySecond.vue'
import SecurityThird from '../SecurityThird.vue'
import FooterPage from '../FooterPage.vue'

export default {
    components: {Navbar, SecurityMain, SecuritySecond, SecurityThird, FooterPage}
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