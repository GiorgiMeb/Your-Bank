<template>
  <div class="all d-flex justify-content-center align-items-center flex-column pt-5">
    <div class="img">
        <img class="pt-5" src="../assets/logo.png" alt="logo">
    </div>
    <div class="navbar">
        <ul class="d-flex mt-4 p-0">
            <li>
                <router-link to="/">
                    <a href="#">Home</a>
                </router-link>
            </li>
            <li>
                <router-link to="/src/components/Pages/CareersPage.vue">
                    <a href="#">Careers</a>
                </router-link>
            </li>
            <li>
                <router-link to="/src/components/Pages/AboutPage.vue">
                    <a href="#">About</a>
                </router-link>
            </li>
            <li>
                <router-link to="/src/components/Pages/SecurityPage.vue">
                    <a href="#">Security</a>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="contact">
        <ul class="d-flex flex-column justifu-content-center flex-lg-row p-0">
            <li>
                <img src="../assets/email.png" alt="">
                <a href="">hello@skillbirdge.com</a>
            </li>
            <li>
                <img src="../assets/call.png" alt="">
                <a href="">+91 91813 23 2309</a>
            </li>
            <li>
                <img src="../assets/location.png" alt="">
                <a href="">Somewhere in the World</a>
            </li>
        </ul>
    </div>
    <div class="social-media">
        <ul class="d-flex p-0">
            <li class=""><img class="p-2" src="../assets/facebook.png" alt=""></li>
            <li class=""><img class="p-2" src="../assets/twiter.png" alt=""></li>
            <li class=""><img class="p-2" src="../assets/linkedin.png" alt=""></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.all {
    background: #1A1A1A;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
}
.social-media img {
    background: #CAFF33;
    border-radius: 50%;
}
.social-media li {
    padding: 20px;
}
.navbar a:hover {
    background: #262626;
}
@media (min-width: 992px) {
    .contact img {
        padding-left: 25px;
    }
}
</style>
