<template>
  <div class="head">
      <h1 class="project-heading">Projects</h1>
  </div>
  <div class="cards">
    <div
      class="card"
      style="width: 18rem"
      v-for="projects in projects"
      :key="projects.id"
    >
      <img class="card-img-top" :src="projects.Image" :alt="projects.Title" />
      <div class="card-body">
        <h5 class="project">{{ projects.Title }}</h5>

        <button class="button-live">
          <a :href="projects.URL" class="link">Live Website</a>
        </button>
        <button class="button-github">
          <a :href="projects.Github" class="link">Github</a>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProject");
  },
};
</script>
<style scoped>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
}

.project-heading{
  background-image: linear-gradient(
    to right,
    yellow 40%,
    red 50%,
    blue 60%,
    rgb(111, 5, 60)70%,
    green 80%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: .4px rgb(0, 0, 0);
  color: #000000 !important;
  font-weight: 800;
}
.card {
  width: 35rem !important;
  border-left: 1px solid blue !important;
  border-right: 1px solid yellow !important;
  border-top:1px solid pink !important;
  border-bottom:1px solid green !important;

}
img {
  height: 17rem !important;
  border-radius: 20px;
}
a {
  text-decoration: none;
  background-image: linear-gradient(
    to right,
    yellow 25%,
    red 30%,
    blue 50%,
    rgb(111, 5, 60) 50%,
    green 40%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

button {
  margin-left: 10px;
}

.button-live {
  background-color: black !important ;
  font-size: 13px;
}

.button-github {
  background-color: black !important ;
  font-size: 13px;
}

.button-live:hover{
  transform: scale(1.1);
  transition: 300ms all;
  font-size: 14px;
  box-shadow: 0 0 4px rgb(246, 255, 0), 0 0 6px rgb(255, 0, 0), 0 0 8px rgb(55, 0, 255);


}
.button-github:hover{
  transform: scale(1.1);
  transition: 300ms all;
  font-size: 14px;
  box-shadow: 0 0 4px rgb(246, 255, 0), 0 0 6px rgb(255, 0, 0), 0 0 8px rgb(55, 0, 255);


  

}

.project {
  color: white;
}

@media only screen and (max-width: 300px){
  .cards{
    grid-template-columns: 1fr ;
  }
  .card {
    width: 18rem !important;

  }
  img {
    aspect-ratio: auto;
  }
}
</style>
