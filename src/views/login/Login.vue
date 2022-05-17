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

            <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="d-grid">
                <button
                  class="btn btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <a href="/"> Login </a>
                </button>
                <hr class="my-4" />
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

              <hr class="my-4" />
              <div class="d-grid mb-2">
                <button
                  class="btn btn-google btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <i class="fa fa-google me-2"></i> Login with Google
                </button>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-facebook btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <i class="fa fa-facebook-f me-2"></i> Login with Facebook
                </button>
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
  name: "Login",
};
</script>


<style>
/* body {
  background: #f4c07a;
  background: linear-gradient(to right, #0062e6, #33aeff);
} */

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

