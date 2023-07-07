<template>
    <h1>Testimonials</h1>
<div class="cards">
    <div class="card" v-for="testimonials in testimonials" :key="testimonials.id">
        <div class="card-img">
            <img :src="testimonials.URL" :alt="testimonials.title" class="img" loading="lazy" >
        </div>
        <div class="card-content">
            <h5 class="h-5">{{ testimonials.Title }}</h5>
            <p class="h-text">{{ testimonials.Content }}</p>
        </div>

    </div>
</div>
</template>
<script>
export default {
    computed: {
        testimonials(){
            return this.$store.state.testimonials
        }
    },
    mounted(){
        this.$store.dispatch('fetchTestimonial')
    }
}
</script>
<style scoped>
.cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.img {
    width: 22rem;
    height: 22rem;
    border-radius: 6px;
}

.card {
    height: 35rem !important;
    width: 22rem !important;
    border: 1px solid  rgb(229, 30, 63) !important;
    display: grid;
    background-color: #000000;
    margin: 30px;
   
}

.h-5,h1{
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

.h-text{
    color: white;
    margin: 10px;
}

.card-content {
    margin: 10px;
}

@media only screen and (max-width: 800px) {
    .img {
        width: auto !important;
        height: 24rem;
        border-radius: 6px;
    }

    .card {
        width: auto !important;
        height: 40rem !important;
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr;
    }
}

@media only screen and (max-width: 420px) {
.img{
    width: 22.4rem !important;
}
}

</style>