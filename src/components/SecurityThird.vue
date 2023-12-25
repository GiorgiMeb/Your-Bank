<template>
      <div class="containers d-flex flex-column pt-5">
          <div class="row-1 d-flex justify-content-center align-items-center flex-column flex-lg-row">
                  <div class="card-1 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4">
                      <div class="title d-flex justify-content-start align-items-center p-3">
                          <img src="../assets/securitycard1.png" alt="">
                          <h2 class="d-flex ps-4">Secure Online Banking Platform</h2>
                      </div>
                      <p class="p-3">Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.</p>
                  </div>
                  <div class="card-2 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4 mt-5 mt-lg-0">
                      <div class="title d-flex justify-content-start align-items-center p-3">
                          <img src="../assets/securitycard2.png" alt="">
                          <h2 class="d-flex ps-4">Multi-Factor Authentication</h2>
                      </div>
                      <p class="p-3">To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.</p>
                  </div>
              </div>
              <div class="row-2 d-flex justify-content-center align-items-center flex-column flex-lg-row mt-5">
                  <div class="card-1 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4">
                      <div class="title d-flex justify-content-start align-items-center p-3">
                          <img src="../assets/securitycard3.png" alt="">
                          <h2 class="d-flex ps-4">Fraud Monitoring</h2>
                      </div>
                      <p class="p-3">We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.</p>
                  </div>
                  <div class="card-2 d-flex justify-content-center align-items-start flex-column py-2 py-lg-4 rounded-4 mt-5 mt-lg-0">
                      <div class="title d-flex justify-content-start align-items-center p-3">
                          <img src="../assets/securitycard4.png" alt="">
                          <h2 class="d-flex ps-4">Secure Mobile Banking</h2>
                      </div>
                      <p class="p-3">Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.</p>
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