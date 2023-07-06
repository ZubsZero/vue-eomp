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
    },
    setProject(state,projects){
      state.projects = projects
    },
    setEducation(state,education){
      state.education = education
    },
    setSkills(state,skills){
      state.skills = skills
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
        },
        async fetchProject(context){
          try{
            let res = await fetch(DataURL)
            let {projects} = await res.json()
            context.commit('setProject',projects)
          } catch (e){
            console.log(e.message);
          }
            },
            async fetchEducation(context){
              try{
                 let res = await fetch(DataURL)
              let {education} = await res.json()
              context.commit('setEducation',education)
              } catch(e){
                console.log(e.message)
              }
             
            },
            async fetchSkills(context){
              try{
                let res = await fetch(DataURL)
                let {skills} = await res.json()
                context.commit('setSkills',skills)
              } catch(e){
                console.log(e.message)
              }
            }
        
      
      }})
