<template>
    <div class="all d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row pt-lg-3">
      <div class="text d-flex justify-content-center align-items-center flex-column pt-4 pt-lg-0 align-items-lg-start rounded-5">
          <h1 class="text-center text-lg-start w-75 p-lg-4">Your Security is Our <span>Top Priority</span></h1>
          <p class="text-center text-lg-start p-lg-4">At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
      </div>
      <div class="img d-flex justify-content-center align-items-center pt-5">
          <img src="../assets/securitymain.png" alt="">
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
  @media (min-width: 992px) {
      .all {
          height: 35rem;
      }
      .text {
          width: 500px;
          position: absolute;
          background: #1C1C1C;
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