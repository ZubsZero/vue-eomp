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
.img {
    width: 15rem;
    height: 16rem;
    border-radius: 20px;
}

.card {
    height: 30rem !important;
    border: 1px solid  rgb(229, 30, 63) !important;
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

@media only screen and (max-width: 300px) {
    .img {
        width: 13.8rem;
    }
}
</style>