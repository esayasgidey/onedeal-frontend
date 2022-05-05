<template >
  <img src="../../assets/onedeallogo.png" class="img" alt="sing up image" />
  <div class="font-poppins">
    <!-- <div class="wrapper wrapper--w680"> -->

    <div class="card card-4">
      <div class="card-body">
        <h2 class="title">Reset Password</h2>
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

          <div class="p-t-15">
            <a href="/forgotPassword" class="btn btn--blue">
              Send Reset Link
              <!-- <button
                class=""
                data-toggle="modal"
                data-target="#exampleModalCenter"
                type="submit"
              > -->
              <!-- </button> -->
            </a>
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
  name: "ResetPassword",
};
</script>


<style scoped>
@import "../../assets/base.css";
@import "../../assets/LoginandSignup.css";
</style>

