<template>
  <div class="information">
    <div class="information-content">
      <div class="bio">
        <h1 class="headings">Biography</h1>
        <p class="text">
          The words to describe me best is observant , I visually learn from my
          surroundings , I am patient , I love solving problems . All my life I
          grew up around technology Xbox and PlayStation both ,with that have
          been infatuated with anything technologically made
        </p>
      </div>
       <hr class="line" height="30px">
      <div class="passion-board">
        <h1 class="headings">Passion-Board</h1>
        <p class="text">
          I enjoy playing games on the pc I have been bought recently , which is
          also the PC I use to practice my code , I also enjoy watching Anime
          which is a Japanese styled series , I like listening to music that
          gives motivation and music that makes you relax
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
.information {
    width: 25rem;
    text-align: center;
    margin-left: 34rem;
    margin-top: 2rem;
    border-left: 1px solid blue;
    border-right: 1px solid yellow  ;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
}

.information-content {
    margin: 2rem;
}


.text {
    color:white;
}

.line {
    color: red;
}

.headings {
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
 
    .information {
        width: 18.5rem;
        margin-left: 0;
    }

 
}

</style>
