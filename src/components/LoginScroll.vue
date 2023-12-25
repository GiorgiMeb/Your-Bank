<template>
  <div class="products pt-5 d-flex justify-content-center align-items-center flex-column flex-lg-row px-lg-5 pb-5">
        <div class="text d-flex justify-content-center align-items-center flex-column align-items-lg-baseline">
            <h1>Our <span>Testimonials</span></h1>
            <p class="text-center w-75 mt-3 text-lg-start">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
         </div>
        <div class="switch d-flex justify-content-center align-items-center rounded-5 mt-3">
            <button class="btn-1 my-2 rounded-5 border-0 px-3 py-1">For Individuals</button>
            <button class="btn-2 rounded-5 border-0 px-3 py-1 ">For Businesses</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .switch {
        width: 330px;
    }
.products {
    background: #1C1C1C;
}
.text h1 {
    color: #fff;
}
.text span {
    color: #CAFF33;
}
.text p {
    color: #B3B3B3;
}
.switch {
    background: #262626;
}
.btn-1 {
    background: #CAFF33;
}
.btn-2 {
    background: #262626;
    color: #fff;
}
.containers h1 {
    color: #fff;
}
.containers p {
    color: #B3B3B3;
}
.container-1 {
    border-bottom: 1px solid #262626;
}
@media (min-width: 992px) {
    .container-1 {
        border-bottom: none;
    }
    .switch {
        width: 750px !important;
    }
}
@media (min-width: 1200px) {
    .switch {
        width: 500px !important;
    }
}
</style>