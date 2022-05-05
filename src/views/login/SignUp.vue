<template>
  <img src="../assets/onedeallogo.png" class="img" alt="sing up image" />
  <div class="font-poppins">
    <!-- <div class="wrapper wrapper--w680"> -->

    <div class="card card-4">
      <div class="card-body">
        <h2 class="title">SIGN UP</h2>
        <form method="POST">
          <div class="row row-space">
            <div class="col-2">
              <div class="input-group">
                <div class="form-group">
                  <label class="label">Full Name</label>
                  <div class="input-group-icon">
                    <i class="zmdi zmdi-account input-icon"></i>
                    <input
                      class="input--style-4 js-datepicker"
                      type="text"
                      name="birthday"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <label class="label">Gender</label>
                <div class="input-group-icon">
                  <i class="zmdi zmdi-phone input-icon"></i>
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
          <div class="row row-space">
            <div class="col-2">
              <div class="input-group">
                <label class="label">Confirm Password</label>
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
              SIGN UP
            </button>
          </div>

          <div class="backlog">
            <h6>Already have an account? <a href="/login">Login</a></h6>
          </div>
        </form>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "SignUp",
};
</script>


<style scoped>
@import "../../assets/LoginandSignup.css";
</style>

