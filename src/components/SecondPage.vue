<template>
  <div class="all d-flex justify-content-center align-items-center flex-column py-5">
    <div class="products d-flex justify-content-center align-items-center flex-column flex-lg-row px-lg-5">
        <div class="text d-flex justify-content-center align-items-center flex-column align-items-lg-baseline">
            <h1>Our <span>Products</span></h1>
            <p class="text-center w-75 mt-3 text-lg-start">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
         </div>
        <div class="switch d-flex justify-content-center align-items-center rounded-5 mt-3">
            <button class="btn-1 my-2 rounded-5 border-0 px-3 py-1">For Individuals</button>
            <button class="btn-2 rounded-5 border-0 px-3 py-1 ">For Businesses</button>
        </div>
    </div>
    <div class="containers d-flex justify-content-center align-items-center flex-column py-5 flex-lg-row">
        <div class="container-1 d-flex justify-content-center align-items-center flex-column py-5 w-75">
            <img src="../assets/card1.png" alt="">
            <h1 class="mt-4 text-center fs-3">Checking Accounts</h1>
            <p class="text-center w-75 mt-2">Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
        </div>
        <div class="container-1 d-flex justify-content-center align-items-center flex-column py-5 w-75">
            <img src="../assets/card2.png" alt="">
            <h1 class="mt-4 text-center fs-3">Savings Accounts</h1>
            <p class="text-center w-75 mt-2">Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
        </div>
        <div class="container-1 d-flex justify-content-center align-items-center flex-column py-5 w-75">
            <img src="../assets/card3.png" alt="">
            <h1 class="mt-4 text-center fs-3">Loans and Mortgages</h1>
            <p class="text-center w-75 mt-2">Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.</p>
        </div>
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
.all {
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
        width: 700px !important;
    }
}
@media (min-width: 1200px) {
    .switch {
        width: 400px !important;
    }
}
 
</style>