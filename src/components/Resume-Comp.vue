<template>
    <div class="template">
    <div class="resume">
        <div class="resume-header">
            <img src="https://i.postimg.cc/7LT6Gy3P/me.jpg" alt="me" class="resume-image">
            <h4 class="Name">Zubair's Resume</h4>
            
        </div>
        <hr>
        <div class="resume-body">
            <div class="resume-profile">
                <h6>Profile</h6>
                <hr style="color: yellow;">
                <p>A aspiring full stack developer whi has experience in HTML,CSS,Bootstrap, Javascript and Vue.js, a diligent worker and punctual when it comes to deadlines, and has a excellent track-record of time management</p>

            </div>
            <div class="languages">
                <h6>Languages</h6>
                <hr style="color: pink;">
                 <p>English</p>
                 <p>Afrikaans</p>
            </div>
            <div class="skills">
                <h6>Skills</h6>
                <hr style="color: red;">
                <div class="skills-content" v-for="skills in skills" :key="skills.id">
                    <p class="skills-headings">{{ skills.title }} - Advanced</p>
                 
                </div>
            </div>
            <div class="contact">
                <h6 class="text-center">Contact Information</h6>
                <hr style="color: blue;">
                <ul class="li">
                    <li>Email: zubairmatthee262@gmail.com</li>
                    <li>Linked-in : Zubair Matthee</li>
                </ul>
            </div>
            <div class="education">
                <h6>Education</h6>
                <hr style="color: purple;">
                <div class="education-content" v-for="education in education" :key="education.id">
                    <p class="h-6">{{ education.title }} <span class="year">{{ education.year }}</span></p>
                    <p>{{ education.content }}.</p>
                </div>
                
            </div>
            <div class="technical-skills">
                <h6>Technical-Skills</h6>
                <hr style="color: green;">
                <ul class="list">
                    <li>Microsoft Word</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Access</li>
                    <li>PowerPoint</li>
                </ul>
            </div>

        </div>
        <div class="resume-footer"></div>
    </div>
    <div class="pie">
        
        <div class="progress html">
                 <span class="progress-left">
                                   <span class="progress-bar"></span>
                 </span>
                 <span class="progress-right">
                                   <span class="progress-bar"></span>
                 </span>
                 <div class="progress-value">Html 90%</div>
               </div>
               <div class="progress css">
                 <span class="progress-left-2">
                                   <span class="progress-bar"></span>
                 </span>
                 <span class="progress-right-2">
                                   <span class="progress-bar"></span>
                 </span>
                 <div class="progress-value">CSS 93%</div>
               </div>
               <div class="progress Javascript">
                 <span class="progress-left-3">
                                   <span class="progress-bar"></span>
                 </span>
                 <span class="progress-right-3">
                                   <span class="progress-bar"></span>
                 </span>
                 <div class="progress-value">JS 70%</div>
               </div>
               

    </div>
    </div>

</template>
<script>
export default {
    computed: {
        education(){
            return this.$store.state.education
            
        },
        skills(){
            return this.$store.state.skills
        }
    },
    mounted(){
        this.$store.dispatch('fetchEducation')
        this.$store.dispatch('fetchSkills')
    }
   
}
</script>
<style scoped>

.template {
    display: flex;
  
}

.pie {
 border: 1px solid white ;
height: 43rem;
width: 20rem;
}
.resume {
    border: 1px solid white;
    margin-left: 9rem;
    height: 43rem;
    width: 60rem
}

.resume-header {
    display: flex;
}

.list {
    list-style-type: none ;
    color: white;
    text-align: center;
    margin-right: 24px ;
}

.resume-body {
    margin-top: 0.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.Name {
    margin-top: 60px;
    color: white;
}

.resume-image {
    width: 7.5rem;
    height: 7rem;
    border-radius: 50%;
    float: left;
    margin: 20px;
    aspect-ratio: 1 ;
}

h6{
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
  font-weight: 800;
  text-align: center;
}

p{
    color: white;
}

.text-center{
    margin-left: 24px;
}

.li {
    list-style-type: none;
    color: white;
}

.h-6{
    color: rgb(116, 8, 138) !important;
}

.year {
    color:red;
}

.progress {
  width: 150px;
  height: 150px !important;
  float: left; 
  line-height: 150px;
  background: none;
  margin: 20px;
  box-shadow: none;
  position: relative;
}
.progress:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 12px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.progress>span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}
.progress .progress-left {
  left: 0;
}
.progress .progress-left-2 {
  left: 0;
}

.progress .progress-left-2 {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 12px;
  border-style: solid;
  position: absolute;
  top: 0;
}
.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.progress .progress-left-2 .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.progress .progress-left-3 .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}
.progress .progress-right {
  right: 0;
}
.progress .progress-right-2 {
  right: 0;
}
.progress .progress-right-3 {
  right: 0;
}
.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}
.progress .progress-right-2 .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}
.progress .progress-right-3 .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards;
}
.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: #000;
  font-size: 24px;
  color: #fff;
  line-height: 135px;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
}
.progress.html .progress-bar {
  border-color: #ffbc04;
}

.progress.css .progress-bar {
  border-color: #04ffd1;
}

.progress.Javascript .progress-bar {
  border-color: #f7ff04;
}

.progress.html .progress-left .progress-bar {
  animation: loading-2 1.5s linear forwards 1.8s;
}
.progress.css .progress-left-2 .progress-bar {
  animation: loading-4 1.5s linear forwards 1.8s;
}
.progress.Javascript .progress-left-3 .progress-bar {
  animation: loading-5 1.5s linear forwards 1.8s;
}

@keyframes loading-1 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes loading-2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(144deg);
    transform: rotate(122deg);
  }
}
@keyframes loading-3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(135deg);
    transform: rotate(130deg);
  }

  
}

@keyframes loading-4 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(135deg);
    transform: rotate(145deg);
  }
}

@keyframes loading-5 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(135deg);
    transform: rotate(80deg);
  }
}
.progress.html {
    margin-left: 5rem;
}
.progress.css {
    margin-left: 5rem;
}
.progress.Javascript {
    margin-left: 5rem;
}

@media only screen and (max-width: 300px){
    .resume {
        margin-left: 0rem;
        height: 40rem;
        width: 18rem ;
        border: none;
    }
    .template {
        display: flex;
        flex-direction: column;
    }
    .resume-body {
    margin-top: 0.2rem;
    display: grid;
    grid-template-columns: 1fr;
}
.pie {
    margin-top: 20rem;
    border:none;
    width: 18rem;
}
}

@media only screen and (max-width: 800px){
    .resume {
        margin-left: 0rem;
        height: 40rem;
        width: auto;
        border: none;
    }
    .template {
        display: flex;
        flex-direction: column;
    }
    .resume-body {
    margin-top: 0.2rem;
    display: grid;
    grid-template-columns: 1fr ;
}
.pie {
    margin-top: 5rem;
    border:none;
    width: auto;
}
}

@media only screen and (min-width: 500px),( max-width:800px) {
    .pie {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 3rem;
    }

    .resume {
        height: auto;
    }
}
</style>