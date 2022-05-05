<template >
  <img src="../../assets/onedeallogo.png" class="img" alt="sing up image" />
  <div class="font-poppins">
    <!-- <div class="wrapper wrapper--w680"> -->

    <div class="card card-4">
      <div class="card-body">
        <h2 class="title">Enter a New Password</h2>
        <form method="POST">
          <div class="row row-space">
            <div class="col-2">
              <div class="input-group">
                <label class="label">New Password</label>
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
            <a href="/login" class="btn btn--blue">
              <!--            
            <button
              class="btn btn--radius-2 btn--blue"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              type="submit"
            > -->
              Change Password
            </a>
            <!-- </button> -->
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
  name: "ForgotPassword",
};
</script>


<style scoped>
@import "../../assets/base.css";
@import "../../assets/LoginandSignup.css";
</style>

