<template>
  <div class="all d-flex align-items-center justify-content-center flex-column pt-5 pt-lg-0 flex-lg-row">
    <div class="text d-flex flex-column align-items-center justify-content-center col-lg-6 align-items-lg-baseline mb-lg-5">
        <div class="verification d-flex rounded-4">
            <p class="m-0 p-2 px-4"><img src="../assets/verification.png" alt=""> No LLC Required, No Credit Check.</p>
        </div>
        <div class="main-text d-flex justify-content-center align-items-center flex-column pt-4 align-items-lg-baseline">
            <h1 class="d-flex justify-content-center align-items-center flex-column text-center align-items-lg-baseline text-lg-start">Welcome to YourBank
            Empowering Your <span class="d-flex justify-content-center align-items-center">Financial Journey</span></h1>
            <p class="d-flex justify-content-center align-items-center text-center text-lg-start pt-3 w-75">At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
            <button class="rounded-5 border-0 px-3 py-2 fs-5 mt-4">Open Account</button>
        </div>
    </div>
    <div class="img d-flex justify-content-center align-items-center mt-5 mt-lg-4" >
        <img class="w-100" src="../assets/main-image.png" alt="">
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
.verification {
    background: #262626;
}
.text p {
    color: #fff;
}
.main-text h1 {
    color: #fff;
}
.main-text span {
    color: #CAFF33;
}
.main-text p {
    color: #E4E4E7;
}
button {
    background: #CAFF33;
    color: #1C1C1C;
    font-family: 'Lexend', sans-serif;
}
</style>