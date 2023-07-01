<template>
   <div class="Hero">
    <div class="Hero-content">
        <h1 class="hero-heading">Hello World</h1>
        <p class="hero-subheading">To My Home</p>
     </div>
   </div>
</template>
<script>
export default {

}
</script>
<style>
.Hero {
    background-color: rgb(0, 0, 0) !important;
    height: 16rem;
    margin: 1.3rem;
    border-radius:30px;
    border: 0.1px solid white;
    animation:border-glow 6s infinite
}

@keyframes border-glow {
    0% {
    box-shadow: 0 0 10px yellow;
    border-color:yellow ;
  }
  25% {
    box-shadow: 0 0 10px blue;
    border-color: blue;
  }

  50% {
    box-shadow: 0 0 10px purple;
    border-color: purple;
  }

  75% {
    box-shadow:0 0 10px green;
    border-color: green
  }
  100% {
    box-shadow: 0 0 10px rgb(209, 19, 51);
    border-color: rgb(209, 19, 51);
  }
}

.Hero-content {
    display: flex ;
    flex-direction: column;
    padding: 4rem;
   

}

.hero-heading {
  animation: glow 6s infinite;
  font-weight: 800;
  font-size: 4rem;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 12px yellow;
    text-shadow: 0 0 40px rgb(164, 18, 103);
    text-shadow: 0 0 100px rgb(5, 120, 3);
  }
  50% {
    text-shadow: 0 0 9px yellow;
    text-shadow: 0 0 14px rgb(164, 18, 103);
    text-shadow: 0 0 100px rgb(5, 120, 3);
  }
  100% {
    text-shadow: 0 0 9px rgb(8, 0, 255);
    text-shadow: 0 0 14px rgb(99, 11, 62);
    text-shadow: 0 0 100px rgb(234, 6, 6);
  }
}

.hero-heading {
  animation: glow 6s infinite !important;
  text-shadow: 2px 0 0 rgb(255, 255, 255), 10px 0 0 rgb(13, 5, 71);
}

@keyframes glow {
  0% {
    color: yellow;
  }
  25% {
    color: blue;
  }

  50% {
    color: purple;
  }

  75% {
    color: green;
  }
  100% {
    color: rgb(209, 19, 51);
  }
}

.hero-subheading {
  animation: glow 6s infinite;
  font-weight: 600;
  font-size: 1rem;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 12px yellow;
    text-shadow: 0 0 40px rgb(164, 18, 103);
    text-shadow: 0 0 100px rgb(5, 120, 3);
  }
  50% {
    text-shadow: 0 0 9px yellow;
    text-shadow: 0 0 14px rgb(164, 18, 103);
    text-shadow: 0 0 100px rgb(5, 120, 3);
  }
  100% {
    text-shadow: 0 0 9px rgb(8, 0, 255);
    text-shadow: 0 0 14px rgb(99, 11, 62);
    text-shadow: 0 0 100px rgb(234, 6, 6);
  }
}

.hero-subheading {
  animation: glow 6s infinite !important;
}

@keyframes glow {
  0% {
    color: yellow;
  }
  25% {
    color: blue;
  }

  50% {
    color: purple;
  }

  75% {
    color: green;
  }
  100% {
    color: rgb(209, 19, 51);
  }
}

@media only screen and (max-width: 300px) {
    .Hero-content {
        margin-right: 0px;
        display: flex;
        flex-direction: column;
        place-items: center;
        padding: 30px;
    }
    .hero-heading {
        font-size: 3rem;
    }
    
}
</style>