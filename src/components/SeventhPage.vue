<template>
  <div class="all">
    <div class="container d-flex flex-column justify-content-center align-items-center flex-lg-row">
        <div class="text d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start mt-5">
            <h1 class="text-center">Start your financial journey with <span>YourBank today!</span></h1>
            <p class="text-center mt-4">Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
        </div>
        <div class="btn d-flex justify-content-center align-items-center mt-5">
            <button class="rounded-5 border-0 px-3 py-2 fs-5 mt-lg-0">Open Account</button>
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
h1 {
    color: #fff;
}
span {
    color: #CAFF33;
}
p {
    color: #B3B3B3;
}
button {
    background: #CAFF33;
    color: #1C1C1C;
    font-family: 'Lexend', sans-serif;
}
@media (min-width: 992px) {
    .all {
        padding-top: 100px;
    }
    h1 {
        font-size: 28px;
        text-align: unset !important;
    }
    p {
        text-align: unset !important;
        width: 600px;
    }
    button {
        width: 200px;
        margin-left: 40px;
    }
}
@media (min-width: 1200px) {
    button {
        margin-left: 250px;
    }
    p {
        width: 700px;
    }
}

</style>