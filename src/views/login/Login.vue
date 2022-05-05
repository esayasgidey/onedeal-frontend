<template >
  <img src="../../assets/onedeallogo.png" class="img" alt="sing up image" />
  <div class="font-poppins">
    <!-- <div class="wrapper wrapper--w680"> -->

    <div class="card card-4">
      <div class="card-body">
        <h2 class="title">Login</h2>
        <form method="POST">
          <div class="row row-space">
            <div class="col-2">
              <div class="input-group">
                <label class="label">Email</label>
                <div class="input-group-icon">
                  <i class="zmdi zmdi-email input-icon"></i>
                  <input
                    class="input--style-4 js-datepicker"
                    type="text"
                    name="birthday"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row row-space">
            <div class="col-2">
              <div class="input-group">
                <label class="label">Password</label>
                <div class="input-group-icon">
                  <i class="zmdi zmdi-lock input-icon"></i>
                  <input
                    class="input--style-4 js-datepicker"
                    type="text"
                    name="birthday"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="p-t-15">
            <button
              class="btn btn--radius-2 btn--blue"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              type="submit"
            >
              Login
            </button>
          </div>

          <div class="backlog">
            <h6>
              Doesn't have an account?
              <a href="/SignUp">Signup</a>
            </h6>
          </div>

          <div class="backlog">
            <h6>
              Forgot Password?
              <a href="/resetPassword">Reset Password</a>
            </h6>
          </div>

          <div class="p-t-15">
            <button
              class="btn btn--radius-2 btn--blue google"
              v-on:click="hello"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              type="submit"
            >
              Login with Google
            </button>
          </div>
          <div class="p-t-15">
            <button
              class="btn btn--radius-2 btn--blue facebook"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              type="submit"
            >
              Login with Facebook
            </button>
          </div>

          <!-- <div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  </div> -->
        </form>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "Login",
};
</script>


<style scoped>
@import "../../assets/base.css";
@import "../../assets/LoginandSignup.css";
</style>

