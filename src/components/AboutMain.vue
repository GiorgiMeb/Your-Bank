<template>
  <div class="all d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row pt-lg-5">
    <div class="text d-flex justify-content-center align-items-center flex-column pt-4 pt-lg-0 align-items-lg-start rounded-5">
        <p class="text-center text-lg-start w-75 p-lg-4 m-0" style="color: #fff;">Welcome to YourBank</p>
        <h1 class="text-center text-lg-start w-75 p-lg-3">Where Banking Meets<span>Excellence!</span></h1>
        <p class="text-center text-lg-start p-lg-2">At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
    </div>
    <div class="img d-flex justify-content-center align-items-center pt-5">
        <img src="../assets/aboutmain.png" alt="">
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
h1 {
    color: #fff;
}
p {
    color: #B3B3B3;
}
span {
    color: #CAFF33;
}
img {
    width: 350px;
}
.text {
        background: #262626;
    }
@media (min-width: 992px) {
    .all {
        height: 35rem;
    }
    .text {
        width: 500px;
        position: absolute;
        margin-right: 400px;
        margin-bottom: 100px;
    }
    img {
        margin-left: 400px;
        width: 500px;
    }
    h1 {
        width: 500px !important;
    }
}
@media (min-width: 1200px) {
    .text {
        margin-right: 500px;
        background: #262626;
    }
}
</style>