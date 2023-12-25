<template>
  <div class="text d-flex justify-content-center align-items-center flex-column pt-5 pt-lg-0 align-items-lg-start">
        <h1 class="text-center text-lg-start w-75 p-lg-4 pt-4">Our <span>Benefits</span></h1>
        <p class="text-center text-lg-start p-lg-4">At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
    </div>
    <div class="containers d-flex flex-column pt-5">
        <div class="row-1 d-flex justify-content-center align-items-center flex-column flex-lg-row">
                <div class="card-1 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4">
                    <div class="title d-flex justify-content-start align-items-center p-3">
                        <img src="../assets/careercard1.png" alt="">
                        <h2 class="d-flex ps-4">Competitive Compensation</h2>
                    </div>
                    <p class="p-3">We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                </div>
                <div class="card-2 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4 mt-5 mt-lg-0">
                    <div class="title d-flex justify-content-start align-items-center p-3">
                        <img src="../assets/careercard2.png" alt="">
                        <h2 class="d-flex ps-4">Health and Wellness</h2>
                    </div>
                    <p class="p-3">We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
                </div>
            </div>
            <div class="row-2 d-flex justify-content-center align-items-center flex-column flex-lg-row mt-5">
                <div class="card-1 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4">
                    <div class="title d-flex justify-content-start align-items-center p-3">
                        <img src="../assets/careercard3.png" alt="">
                        <h2 class="d-flex ps-4">Retirement Planning</h2>
                    </div>
                    <p class="p-3">YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
                </div>
                <div class="card-2 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4 mt-5 mt-lg-0">
                    <div class="title d-flex justify-content-start align-items-center p-3">
                        <img src="../assets/careercard4.png" alt="">
                        <h2 class="d-flex ps-4">Work-Life Balance</h2>
                    </div>
                    <p class="p-3">We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
                </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text {
    background: #1C1C1C;
}
.containers {
    background: #1C1C1C;
}
h2 {
    color: #fff;
}
h1 {
    color: #fff;
}
span {
    color: #CAFF33;
}
p {
    color: #B3B3B3;
}
.card-1, .card-2 {
    width: 350px;
    background: #2c2c2d;
}
@media (min-width: 992px) {
    h2 {
        font-size: 22px;
    }
    .card-1, .card-2 {
        width: 450px;
        background: #2c2c2d;
        height: 300px;
    }
    .card-2 {
        margin-left: 30px;
    }
    .row-2 {
        margin-top: 30px;
    }
    .text {
        padding-top: 100px !important;
    }
}
@media (min-width: 1200px) {
    .card-1, .card-2 {
        width: 550px;
        background: #2c2c2d;
        height: 300px;
    }
    .card-2 {
        margin-left: 40px;
    }
    .row-2 {
        margin-top: 40px;
    }
    .text {
        padding-left: 40px;
        padding-top: 70px !important;
    }
}
</style>