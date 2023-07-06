<template>
  <div class="Profile">
    <h6 class="profile-card">Profile card</h6>
    <div class="profile-content">
      <div class="img">
        <img
          src="https://i.postimg.cc/CK13FwY1/me.jpg"
          class="image"
          loading="lazy"
          alt="me"
        />
      </div>
      <div class="content">
        <ul class="text-light list-unstyled p-3">
          <li><span class="span">Full Name</span>: Zubair Matthee</li>
          <li><span class="span">Gender</span>: Male</li>
          <li><span class="span">Location</span>: Cape Town</li>
          <li><span class="span">Email Address</span>: zubairmatthee262@gmail.com</li>
          <li><span class="span">Github</span>: ZubsZero</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>

.Profile {
    width:34rem;
    display: grid;
    place-items: center;
    margin-left: 30rem;
    border: 3px solid rgba(107, 10, 10, 0.151) ;
    box-shadow: 0 0 16px rgb(3, 27, 94);
}

.profile-card{
    margin-top: 16px ;
    color: white;
    font-size: 17px;
}

.image {
    width:12rem;
    height: 12rem;
}

.profile-content {
    display: flex;
    flex-direction: row;
    align-items:center ;
    justify-content: center;
    margin: 2rem;
  
}

.span {
    background-image: linear-gradient(
    to right,
    yellow 25%,
    red 30%,
    blue 50%,
    rgb(111, 5, 60)50%,
    green 40%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #000000 !important;
  font-weight: 800;
}

@media only screen and (max-width: 300px) {
    .profile-content {
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content: center;
    width: 15rem;
  
}
    .Profile {
        border: none;
        box-shadow: none;
    }
 
}
@media only screen and (max-width: 500px) {
    .Profile {
    margin-left: 0px;
    width: 15rem;
    
}

    .profile-content {
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content: center;
    border: none;
}

 
}

</style>
