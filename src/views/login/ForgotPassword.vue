<template >
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <img
              src="../../assets/onedeallogo.png"
              class="img"
              alt="sing up image"
            />

            <h5 class="card-title text-center mb-5 fw-light fs-5">
              Change Password
            </h5>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Confirm Password</label>
              </div>

              <div class="d-grid">
                <button
                  class="btn btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <a href="/login"> Change Password </a>
                </button>
                <hr class="my-4" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgotPassword",
};
</script>


<style scoped>
.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  background-color: #f4c07a;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}
</style>

