<template>
  <section class="mb-4">
    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description--><br>
    <p class="text-center w-responsive mx-auto mb-5">
     Contact Me
    </p>

    <div>
      <!--Grid column-->
      <div
        class="col-md-4 mb-md-0 mb-5 d-flex flex-column justify-content-center align-items-center"
      >
        <form
          id="contact-form"
          name="contact-form"
          action="https://formspree.io/f/xleyrkvj"
          method="POST"
        >
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  placeholder="Type in your name...."
                  required oninvalid="this.setCustomValidity('Please enter your full name')"
                />
                <label for="name" class="">Your Full Name</label>
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-6">
              <div class="md-form mb-0">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Type in your Email..."
                  required oninvalid="this.setCustomValidity('Please enter a valid email address')"
                >
                <label for="email">Your email</label>
              </div>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">
            <div class="col-md-12">
              <div class="md-form mb-0">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  class="form-control"
                  placeholder="What is the subject...."
                />
                <label for="subject" class="">Subject</label>
              </div>
            </div>
          </div>
          <!--Grid row-->

          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-12">
              <div class="md-form">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  class="form-control md-textarea"
                  placeholder="type in your message...."
                ></textarea>
                <label for="message">Your message</label>
              </div>
            </div>
          </div>
          <!--Grid row--><br>
          <div class="text-center text-md-left">
         <button class="button">
            Send
         </button>
          
        </div>
        </form>

        
      <!--Grid column-->
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.col-md-4.mb-md-0.mb-5.d-flex.flex-column.justify-content-center.align-items-center {
  margin-left: 32rem;
}

input,
textarea {
  background-color: transparent !important ;
  border: none !important;
  color: white !important;
}

#name {
  border-bottom: 1px solid yellow !important;
}

#email {
  border-bottom: 1px solid rgb(255, 0, 0) !important;
}

#subject {
  border-bottom: 1px solid rgb(13, 0, 255) !important;
}

#message {
  border-bottom: 1px solid rgb(255, 0, 85) !important;
}

.h1-responsive.font-weight-bold.text-center.my-4 {
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
  -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: rgb(52, 52, 52) ;
    text-shadow: 0 0 50px rgb(255, 0, 0);
    margin: 1.5rem !important;
}

p {
    color: white;
}

label {
  color: white;
  margin: 1px;
  font-size: 12px;
}

input::placeholder {
  color: rgb(134, 134, 134) !important;
  font-size: 12px;
}

textarea::placeholder {
  color: rgb(125, 125, 125) !important;
  font-size: 12px;
}

.button{
    border: 1px solid white;
    background-color: black;
    color: white !important;
}

.button:hover {
    transform: scale(1.3);
    transition: 300ms all;
    border-bottom: 1px solid blue !important;
    border-top: 1px solid rgb(255, 0, 0) !important;
    border-left: 1px solid rgb(238, 255, 0) !important;
    border-right: 1px solid rgb(255, 0, 157) !important;
    color:rgb(192, 13, 28) !important;

}

@media only screen and (max-width: 800px) {
  .col-md-4.mb-md-0.mb-5.d-flex.flex-column.justify-content-center.align-items-center {
    margin-left: 0rem;
    width: auto;
  }
}
</style>
