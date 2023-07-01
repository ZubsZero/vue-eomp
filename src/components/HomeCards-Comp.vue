<template>
  <div class="cards">
    <div class="card">
      <div class="circle">.</div>
      <div class="card-content">
        <h1 class="h-1">Skills</h1>
      </div>
    </div>
    <div class="card-2">
      <div class="circle-2">.</div>
      <div class="card-content">
        <h1 class="h-1">Projects</h1>
      </div>
    </div>
    <div class="card-3">
      <div class="circle-3">.</div>
      <div class="card-content">
        <h1 class="h-1">Education</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.card {
  background-color: rgb(0, 0, 0) !important;
  width: 22rem;
  border-radius: 20px;
  height: 24rem !important;
  border: 1px solid rgb(0, 0, 255) !important;
  margin-top: 50px;
  margin: 30px;
}

.circle {
  background-color: rgb(17, 0, 255);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}

.h-1 {
  font-weight: 800;
  font-size: 2rem;
  background-image: linear-gradient(
    to right,
    yellow 25%,
    red 30%,
    blue 40%,
    rgb(111, 5, 60) 50%,
    green 70%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #000000 !important;
  font-weight: 800;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: rgb(53, 53, 53);
}

.card-2 {
  background-color: rgb(0, 0, 0) !important;
  width: 22rem;
  border-radius: 20px;
  height: 24rem !important;
  border: 1px solid rgb(207, 230, 0) !important;
  margin-top: 50px;
  margin: 30px;
}

.circle-2 {
  background-color: rgb(243, 255, 6);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  margin-left: 10rem;
}

.card-3 {
  background-color: rgb(0, 0, 0) !important;
  width: 22rem;
  border-radius: 20px;
  height: 24rem !important;
  border: 1px solid rgb(255, 0, 0) !important;
  margin-top: 50px;
  margin: 30px;
}

.circle-3 {
  background-color: rgb(255, 0, 0);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  margin-left: 19rem ;
}

.cards {
    display: flex;
    align-items:center ;
    justify-content: center;
  
}
</style>
