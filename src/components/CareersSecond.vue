<template>
    <div class="text d-flex justify-content-center align-items-center flex-column pt-4 pt-lg-0 align-items-lg-start">
        <h1 class="text-center text-lg-start w-75 p-lg-4">Our <span>Values</span></h1>
        <p class="text-center text-lg-start p-lg-4">JAt YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
    </div>
    <div class="containers d-flex flex-column justify-content-center align-items-center pt-5">
        <div class="row-1 d-flex flex-column flex-lg-row">
            <div class="card-1 d-flex flex-column ms-4 ps-4">
                <h1>Integrity</h1>
                <p class="pt-3">We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
            </div>
            <div class="card-2 d-flex flex-column ms-4 ps-4 mt-5 mt-lg-0 ms-lg-5">
                <h1>Customer Centricity</h1>
                <p class="pt-3">Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
            </div>
        </div>
        <div class="row-2 d-flex flex-column flex-lg-row">
            <div class="card-1 d-flex flex-column ms-4 ps-4 mt-5">
                <h1>Collaboration</h1>
                <p class="pt-3">We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
            </div>
            <div class="card-2 d-flex flex-column ms-4 ps-4 mt-5 ms-lg-5">
                <h1>Innovation</h1>
                <p class="pt-3">We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
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
.card-1 {
    border-left: 1px solid #CAFF33;
    width: 350px;
}
.card-2 {
    border-left: 1px solid #CAFF33;
    width: 350px;
}
.text h1 {
    color: #fff;
}
.containers h1 {
    color: #4C4C4D;
}
p {
    color: #B3B3B3;
}
span {
    color: #CAFF33;
}
@media (min-width: 992px) {
    .card-1 {
        width: 450px;
    }
    .card-2 {
        width: 450px;
    }
}
@media (min-width: 1200px) {
    .card-2 {
        margin-left: 250px !important;
    }
    .text {
        padding-left: 40px;
    }
}
</style>