<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100% d-flex justify-content-md-center align-items-md-center">
  <div class="background container-fluid d-flex align-items-center justify-content-lg-center py-3">
    <router-link to="/" class="navbar-brand ms-md-2 ps-lg-5" href="#"><img class="w-60" src="../assets/logo.png" alt=""></router-link>
    <button class="burger-btn navbar-toggler p-2 d-lg-none d-flex justify-content-center align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toogler d-flex justify-content-center align-items-center"><img class="burger" src="../assets/burger.png" alt=""></span>
    </button>
    <div class="collapse navbar-collapse justify-content-lg-center align-items-lg-center ps-lg-5" id="navbarScroll">
      <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll m-5 m-lg-4 m d-flex justify-content-lg-center align-items-lg-center ms-md-5" style="--bs-scroll-height: 400px;">
        <li class="d-flex d-flex justify-content-lg-center align-items-center ">
          <router-link to="/" class="px-4 py-1 rounded-3 d-flex justify-content-center align-items-center">Home</router-link>
        </li>
        <li class="d-flex d-flex justify-content-lg-center align-items-center">
          <router-link to="/src/components/Pages/CareersPage.vue" class="px-4 py-1 rounded-3 d-flex justify-content-center align-items-center" href="#">Careers</router-link>
        </li>
        <li class="d-flex d-flex justify-content-lg-center align-items-center">
          <router-link to="/src/components/Pages/AboutPage.vue" class="px-4 py-1 rounded-3 d-flex justify-content-center align-items-center" href="#">About</router-link>
        </li>
        <li class="d-flex d-flex justify-content-lg-center align-items-center">
          <router-link to="/src/components/Pages/SecurityPage.vue" class="px-4 py-1 rounded-3 d-flex justify-content-center align-items-center" href="#">Security</router-link>
        </li>     
      </ul>
      <div class="btns d-flex justify-content-lg-center align-items-center
      justify-content-center align-items-lg-center mt-3 mt-lg-0 ms-xl-5">
        <router-link to="/src/components/Pages/SignupPage.vue">
          <button class="sign-up border-0 ms-xl-5" style="width: 100px;">Sign Up</button>
        </router-link>
        <router-link class="" to="/src/components/Pages/LoginPage.vue">
          <button class="login border-0 rounded-3 px-3 py-1 ms-xl-3">Login</button>
        </router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.background {
    background: #1C1C1C;
    padding: 45px;
}
.burger-btn {
    background: #CAFF33;
}
a {
    color: #fff;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
}
.sign-up {
    background: #1C1C1C;
    color: #fff;
}
.login {
    background: #CAFF33;
}
.btns {
  width: 200px;
}
ul a:hover {
  background: #262626;
}
@media (min-width: 1200px) {
  .btns {
    margin-left: 90px !important;
  }
}
</style>