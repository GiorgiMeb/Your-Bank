<template>
  <div class="all d-flex flex-column justify-content-center align-items-center pt-5">
    <div class="text d-flex justify-content-center align-items-center flex-column align-items-lg-baseline pe-xl-5 mt-4">
        <h1 class="">Our <span>Features</span></h1>
        <p class="text-center text-lg-start">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
    </div>
    <div class="background d-flex flex-column flex-lg-row align-items-lg-baseline">
        <!----------------slider----------->
        <div class="sidebar d-flex justify-content-center align-items-center mt-5">
            <ul class="d-flex overflow-x-auto rounded-4 justify-content-start align-items-center flex-lg-column p-lg-0">
                <li><a class="text-decoration-none rounded-3 px-4 py-1" style="color: #CAFF33;" href="#">Online Banking</a></li>
                <li><a class="text-decoration-none rounded-3 px-4 py-1" href="#">Financial Tools</a></li>
                <li><a class="text-decoration-none rounded-3 px-4 py-1" href="#">Customer Support</a></li>
            </ul>
        </div>
            <!----------------container----------->
            <div class="containers d-flex justify-content-center align-items-center flex-column">

                <!-- first row -->
                <div class="first-row d-flex justify-content-center align-items-center flex-column flex-lg-row">

                    <div class="card-1 d-flex flex-column justify-content-center align-items-start rounded-3 mt-4">
                        <div class="content d-flex justify-content-between align-items-center">
                            <h1 class="p-3">24/7 Account Access</h1>
                            <img class="d-flex pe-3 pb-2" src="../assets/arrowup.png" alt="">
                        </div>
                        <p class="p-3">Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.</p>
                    </div>
                    <div class="card-1 d-flex flex-column justify-content-center align-items-start rounded-3 mt-5">
                        <div class="content d-flex justify-content-between align-items-center">
                            <h1 class="p-3">Mobile Banking App</h1>
                            <img class="d-flex pe-3 pb-2" src="../assets/arrowup.png" alt="">
                        </div>
                        <p class="p-3">Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.</p>
                    </div>
                </div>
                <!-- second row -->
                <div class="second-row d-flex justify-content-center align-items-center flex-column flex-lg-row mt-4">

                <div class="card-1 d-flex flex-column justify-content-center align-items-start rounded-3 mt-4">
                    <div class="content d-flex justify-content-between align-items-center">
                        <h1 class="p-3">Secure Transactions</h1>
                        <img class="d-flex pe-3 pb-2" src="../assets/arrowup.png" alt="">
                    </div>
                    <p class="p-3">Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.</p>
                </div>
                <div class="card-1 d-flex flex-column justify-content-center align-items-start rounded-3 mt-5">
                    <div class="content d-flex justify-content-between align-items-center">
                        <h1 class="p-3">Bill Pay and Transfers</h1>
                        <img class="d-flex pe-3 pb-2" src="../assets/arrowup.png" alt="">
                    </div>
                    <p class="p-3">Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.</p>
                </div>
                </div>
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
    color: #fff;
}
.text span {
    color: #CAFF33;
}
.text p {
    color: #B3B3B3;
}
li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    list-style: none;
    min-width: 200px;
    min-height: 50px;
}
ul {
    background: #262626;
    max-width: 300px;
}
a {
    border: 1px solid #B3B3B3;
    background: #1A1A1A;
    color: #fff;
}
::-webkit-scrollbar {
    width: 0;
    height: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
/* -----------------container---------------*/

.card-1 h1 {
    color: #fff;
    font-size: 24px;
}
.card-1 p {
    color: #fff;
}
.card-1 {
    width: 370px;
    background: #262626
}
.content {
    width: 350px;
}
img {
    display: flex;
}
@media (min-width: 992px) {
    .card-1 {
        margin: 0 !important;
        margin-left: 10px !important;
        margin-top: 10px !important;
    }
}
@media (min-width: 1200px) {
    .card-1 {
        margin: 0 !important;
        margin-left: 40px !important;
        margin-top: 30px !important;
    }
    .text {
        width: 1000px;
        margin-right: 100px;
        margin-top: 80px;
    }
    .sidebar {
        margin-right: 50px;
    }
}
</style>