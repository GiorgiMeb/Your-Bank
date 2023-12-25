<template>
  <div class="all d-flex justify-content-center align-items-center flex-column px-4">
    <div class="text d-flex justify-content-center align-items-center flex-column align-items-lg-baseline">
        <h1 class="">Use Cases</h1>
        <p class="text-center text-lg-start">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
    </div>

    <div class="background d-flex align-items-center justify-content-center flex-column flex-lg-row mt-md-5">

        <!-------------CARDS----------------------->
        <div class="containers d-flex justify-content-center align-items-center flex-column">
            <div class="container-1 d-flex justify-content-center align-items-center">
                <div class="first d-flex justify-content-center align-items-center flex-column py-2 py-lg-4 rounded-4">
                    <img src="../assets/thirdimg1.png" alt="">
                    <p class="w-75 text-center">Managing Personal Finances</p>
                </div>
                <div class="second d-flex justify-content-center align-items-center py-2 ms-4 rounded-4 py-lg-4">
                    <div class="d-flex justify-content-center align-items-center flex-column ">
                        <img src="../assets/thirdimg2.png" alt="">
                        <p class="w-75 text-center">Saving for the Future</p>
                    </div>
                </div>
            </div>
            <div class="container-1 d-flex justify-content-center align-items-center mt-4">
                <div class="second d-flex justify-content-center align-items-center py-2 rounded-4">
                    <div class=" d-flex justify-content-center align-items-center flex-column py-lg-4">
                        <img src="../assets/thirdimg3.png" alt="">
                        <p class="w-75 text-center">Saving for the Future</p>
                    </div>
                </div>
                <div class="second d-flex justify-content-center align-items-center py-2 ms-4 rounded-4">
                    <div class=" d-flex justify-content-center align-items-center flex-column py-lg-4">
                        <img src="../assets/thirdimg4.png" alt="">
                        <p class="w-75 text-center">Saving for the Future</p>
                    </div>
                </div>
            </div>
        </div>
        <!----------------FOR INDIVIDUALS-------------->
        <div class="individuals d-flex justify-content-center align-items-center flex-column mt-5 mt-lg-0">
            <div class="i-text d-flex justify-content-center align-items-center flex-column align-items-lg-start">
                <h1 style="color: #fff;">For Individuals</h1>
                <p class="paragraph text-center fs-6 text-lg-start " style="color: #B3B3B3;">For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
            </div>
            <div class="d-flex justify-content-center align-items-center flex-column flex-lg-row">

                <div class="cards d-flex justify-content-center align-items-center flex-column py-4">
                    <h1 style="color: #CAFF33;">78%</h1>
                    <p class="text-center w-75" style="color: #B3B3B3;">Secure Retirement Planning</p>
                </div>
                <div class="cards d-flex justify-content-center align-items-center flex-column py-4">
                    <h1 style="color: #CAFF33;">63%</h1>
                    <p class="text-center w-75" style="color: #B3B3B3;">Manageable Debt Consolidation</p>
                </div>
                <div class="cards d-flex justify-content-center align-items-center flex-column py-4">
                    <h1 style="color: #CAFF33;">91%</h1>
                    <p class="text-center w-75" style="color: #B3B3B3;">Reducing financial burdens</p>
                </div>
            </div>
            <button class="px-3 py-1 rounded-4" style="background: #262626; color: #fff; border: 1px solid #B3B3B3;">Learn More</button>
        </div>
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
.text h1 {
    color: #CAFF33;
}
.text p {
    color: #B3B3B3;
}
.container-1, .second, .container-2 p {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
}
.first, .first-sm {
    border: 1px solid #262626;
    width: 150px;
}
.second {
    border: 1px solid #262626;
    width: 150px;
}
@media (min-width: 992px) {
    .text {
        width: 90%;
    }
    .i-text p {
        font-size: 10px;
    }
    .paragraph {
        width: 550px;
    }
}
@media (min-width: 1200px) {
    .individuals {
        margin-left: 50px;
    }
    .paragraph {
        width: 600px;
    }
}
</style>