<template>
<div class="all">
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-content">
       <img src="../assets/brackets.png" class="d-block" alt="...">
       <p>I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</p>
       <span>John D</span>
       </div>
       <div class="carousel-caption d-none d-md-block">
       </div>
      </div>
    <div class="carousel-item">
      <div class="carousel-content">
       <img src="../assets/brackets.png" class="d-block" alt="...">
       <p>YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</p>
       <span>Sara T</span>
       </div>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-content">
        <img src="../assets/brackets.png" class="d-block" alt="...">
        <p>I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.</p>
        <span>Emily G</span>
      </div>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
p {
    color: #fff;
    width: 300px;
    text-align: center;
    margin-top: 30px;
}
span {
  color: #CAFF33;
}
img {
    width: 300px;
}
h5 {
  color: #B3B3B3;
}
.carousel {
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-content {
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
}
@media (min-width: 992px) {
  p {
    margin-top: 40px;
    width: 650px;
    font-size: 18px;
  }
  span {
    margin-top: 25px;
  }
  img {
    margin-top: 40px;
  }
}
</style>