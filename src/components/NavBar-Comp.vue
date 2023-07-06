<template>
  <nav class="navbar navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Zubair Matthee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Zubair's Profile</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {

}

</script>
<style>
.navbar.navbar-dark.bg-dark.sticky-top {
    background-color: black !important;
}
.offcanvas-body {
    background-color: black;
}
.offcanvas-header {
    background-color: black;
}

.nav-link {
    text-decoration:none;
  
} 

.nav-item:hover {
  border-top: 1px solid pink ;
  border-left:1px solid Blue;
  border-bottom: 1px solid yellow;
  border-right: 1px solid red;
  transition: 300ms all;
  background-image: linear-gradient(
    to right,
    yellow 25%,
    red 30%,
    blue 40%,
    rgb(111, 5, 60)50%,
    green 70%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #000000 !important;

}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  font-weight: 800;
}

.navbar-nav.justify-content-end.flex-grow-1.pe-3 {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}


</style>