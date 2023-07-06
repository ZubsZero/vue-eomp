<template>
  <div class="cards">
    <div class="card">
      <div class="circle">1</div>
      <div class="card-content">
        <h1 class="h-1">Skills</h1>
        <div class="img">
          <img src="https://i.postimg.cc/C1Ywt4WF/Screenshot-2023-07-03-092641-removebg-preview.png" alt="" class="icons">
        </div>
      </div>
    </div>
    <div class="card-2">
      <div class="circle-2">2</div>
      <div class="card-content">
        <h1 class="h-1">Projects</h1>
        <div class="img">
          <img src="https://i.postimg.cc/cJV69Ych/Screenshot-2023-07-03-093709-removebg-preview.png" alt="" class="icons-2">
        </div>
      </div>
    </div>
    <div class="card-3">
      <div class="circle-3">3</div>
      <div class="card-content">
        <h1 class="h-1">Education</h1>
        <div class="img">
          <img src="https://i.postimg.cc/MKh8MSzc/Screenshot-2023-07-03-095724-removebg-preview.png" alt="" class="icons-3">
        </div>
       
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
  border-radius: 20px !important;
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
  color: white;
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
  color:white;
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

.icons {
  width: 17rem;
}

.icons-2 {
  width: 11.5rem;
  margin-top: 2rem;
}

.icons-3 {
  width: 11rem;
  margin-top: 2rem;
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
  color: white;
}

.cards {
    display: flex;
    align-items:center ;
    justify-content: center;
  
}

@media only screen and (max-width: 300px) {
  .cards {
    display:flex;
    flex-direction: column;
  }

  .card, .card-2, .card-3 {
    width: 14rem;
  }

  .circle-2 {
    margin-left: 6.3em
  }

  .circle-3 {
    margin-left: 11rem;
  }

  .icons {
    width: 15rem;
    height: 14rem;
    padding-top: 1rem ;
    
  }
}

@media only screen and (max-width: 600px) {
  .cards {
    display:flex;
    flex-direction: column;
  }

  .card, .card-2, .card-3 {
    width: 14rem;
  }

  .circle-2 {
    margin-left: 6.3em
  }

  .circle-3 {
    margin-left: 11rem;
  }

 
}
</style>
