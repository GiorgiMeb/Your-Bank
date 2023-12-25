<template>
  <div class="all d-flex flex-column justify-content-center align-items-center">
    <div class="container-1 d-flex flex-column flex-lg-row justify-content-center align-items-start align-items-lg-center px-lg-5 mt-lg-5">
        <img class="mt-5 mt-lg-0" src="../assets/aboutcontainer1.png" alt="">
        <div class="card-1 d-flex flex-column ms-lg-5 ">
                <h1 class="mt-4 ms-lg-4">Mission</h1>
                <p class="pt-3 ms-lg-4">At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
            </div>
    </div>
    <div class="container-2 d-flex flex-column flex-lg-row-reverse justify-content-center align-items-start align-items-lg-center px-lg-5 mt-lg-5">
        <img class="mt-5 mt-lg-0" src="../assets/aboutcontainer2.png" alt="">
        <div class="card-1 d-flex flex-column me-lg-5 ">
                <h1 class="mt-4 ms-lg-4">Vision</h1>
                <p class="pt-3 ms-lg-4">Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
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
.container-1, .container-2 {
  width: 350px;
}
img {
  width: 350px;
}
h1 {
  color: #fff;
}
p {
  color: #B3B3B3;
}
.card-1 {
  border-top: 1px solid #CAFF33;
}
@media (min-width: 992px) {
  .container-1, .container-2 {
    width: 100%;
  }
  .card-1 {
    border-top: none;
    border-left: 1px solid #CAFF33;
  }
}
@media (min-width: 1200px) {
  img {
    width: 450px;
  }
}
</style>