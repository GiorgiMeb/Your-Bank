<template>
  <div class="text d-flex justify-content-center align-items-center flex-column pt-5 pt-lg-5 align-items-lg-start">
        <h1 class="text-center text-lg-start w-75 p-lg-4 pt-4">Press Releases</h1>
        <p class="text-center text-lg-start p-lg-4">Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
    </div>
    <div class="all d-flex justify-content-center align-items-center flex-column">
        <div class="row-1 d-flex flex-column flex-lg-row mt-5">

            <div class="card-1">
                <img class="p-2 m-0" src="../assets/aboutcard1.png" alt="">
                <h5 class="mt-3 p-3">YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h5>
                <div class="paragraphs d-flex mx-3">
                    <p class="p-2 rounded-5">Location: India</p>
                    <p class="ms-3 p-2 rounded-5">Date: 06/11/2024</p>
                </div>
                <p class="mb-0 px-3 py-2">YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
            </div>

            <div class="card-2 mt-5 mt-lg-0 ms-lg-5">
                <img class="p-2 m-0 " src="../assets/aboutcard2.png" alt="">
                <h5 class="mt-3 p-3">YourBank Expands Branch Network with Opening of New Location in Chennai</h5>
                <div class="paragraphs d-flex mx-3">
                    <p class="p-2 rounded-5">Location: India</p>
                    <p class="ms-3 p-2 rounded-5">Date: 12/11/2024</p>
                </div>
                <p class="mb-0 px-3 py-2">YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.</p>
            </div>
        </div>

        <div class="row-2 d-flex flex-column flex-lg-row mt-5">

            <div class="card-1">
                <img class="p-2 m-0" src="../assets/aboutcard3.png" alt="">
                <h5 class="mt-3 p-3">YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h5>
                <div class="paragraphs d-flex mx-3">
                    <p class="p-2 rounded-5">Location: India</p>
                    <p class="ms-3 p-2 rounded-5">Date: 24/12/2024</p>
                </div>
                <p class="mb-0 px-3 py-2">YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
            </div>

            <div class="card-2 mt-5 mt-lg-0 ms-lg-5">
                <img class="p-2 m-0 " src="../assets/aboutcard4.png" alt="">
                <h5 class="mt-3 p-3">YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h5>
                <div class="paragraphs d-flex mx-3">
                    <p class="p-2 rounded-5">Location: India</p>
                    <p class="ms-3 p-2 rounded-5">Date: 28/12/2024</p>
                </div>
                <p class="mb-0 px-3 py-2">YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
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
.all {
    background: #1C1C1C;
}
h1 {
    color: #CAFF33;
}
h5 {
    color: #fff;
}
p {
    color: #B3B3B3;
}
img {
    width: 350px;
}
.card-1, .card-2, .card-3, .card-4 {
    width: 350px;
    border: 1px solid #B3B3B3;
    border-radius: 20px;
}
.paragraphs p {
    border: 1px solid #B3B3B3;
}
@media (min-width: 992px) {
    .card-1, .card-2, .card-3, .card-4 {
    width: 400px;
    border: 1px solid #B3B3B3;
}
img {
    width: 400px;
}
}
@media (min-width: 1200px) {
    .card-1, .card-2, .card-3, .card-4 {
    width: 550px;
    border: 1px solid #B3B3B3;
}
img {
    width: 550px;
}
}
</style>