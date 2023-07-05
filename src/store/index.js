import { createStore } from 'vuex'
const DataURL = ('https://zubszero.github.io/vue-eomp-link/index.json')
export default createStore({
  state: {
    skills:null,
    projects:null,
    education:null,
    testimonials:null,
  },
  getters: {
  },
  mutations: {
    setTestimonial(state,testimonials){
      state.testimonials = testimonials
    }
  },
  actions: {
    async fetchTestimonial(context){
      try{
        let res = await fetch(DataURL)
        let {testimonials} = await res.json()
        context.commit('setTestimonial',testimonials)
      } catch (e){
        console.log(e.message);
      }
        }}})
