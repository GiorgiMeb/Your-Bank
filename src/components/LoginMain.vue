<template>
  <div class="all d-flex justify-content-center align-items-center flex-column">
    <div class="text d-flex justify-content-center align-items-center flex-column text-center mt-4">
        <h1>Login</h1>
        <p class="mt-3">Welcome back! Please log in to access your account.</p>
    </div>
    <div class="register d-flex flex-column mt-4">
        <input class="rounded-5 p-3" type="email" placeholder="Enter your Email">
        <input class="rounded-5 mt-4 p-3" type="password" placeholder="Enter your Password">
    </div>
    <a class="mt-4" href="#">Forgot Password?</a>
    <div class="btns d-flex flex-column justify-content-center align-items-center mt-4">
        <router-link to="/src/components/Pages/LoginPage.vue">
            <button class="btn-1 rounded-4 py-2">Login</button>
        </router-link>
        <router-link to="/src/components/Pages/SignupPage.vue">
            <button class="btn-2 rounded-4 py-2 mt-3">Sign Up</button>
        </router-link>
    </div>
    <div class="contact d-flex mt-4">
        <div class="line-1 me-3"></div>
        <p class="">Or Continue with</p>
        <div class="line-2 ms-3"></div>
    </div>
    <div class="social-media d-flex mt-3">
        <img class="p-3 mx-3" src="../assets/socialmedia1.png" alt="">
        <img class="p-3 mx-3" src="../assets/socialmedia2.png" alt="">
        <img class="p-3 mx-3" src="../assets/socialmedia3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.all {
    background: #1C1C1C;
}
.text {
    width: 300px;
}
h1 {
    color: #CAFF33;
}
p {
    color: #B3B3B3;
}
input {
    background: #1C1C1C;
    border: 1px solid #262626;
    color: #B3B3B3;
    width: 300px;
}
a {
    color: #fff;
}
button {
    width: 250px;
    font-size: 18px;
}
.btn-1 {
    background: #CAFF33;
    color: #262626;
    border: 1px solid #262626;
}
.btn-2 {
    background: #333333;
    color: #fff;
    border: 1px solid #262626;
}
.line-1, .line-2 {
    width: 100px;
    border-top: 2px solid #262626;
    margin-top: 12px;
}
.contact {
    width: ;
}
.contact p {
    width: 131px;
}
</style>