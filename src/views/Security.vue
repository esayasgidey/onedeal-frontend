<template>
  <nav class="nav nav-borders">
    <a class="nav-link" href="/profile" target="__blank">Profile</a>
    <a class="nav-link active" href="/security" target="__blank">Security</a>
  </nav>
  <hr class="mt-0 mb-4" />

  <div class="row">
    <div class="col-lg-8">
      <!-- Change password card-->
      <div class="card mb-4">
        <div class="card-header">Change Password</div>
        <div class="card-body">
          <form>
            <!-- Form Group (current password)-->
            <div class="mb-3">
              <label class="small mb-1" for="currentPassword"
                >Current Password</label
              >
              <input
                class="form-control"
                id="currentPassword"
                type="password"
                placeholder="Enter current password"
              />
            </div>
            <!-- Form Group (new password)-->
            <div class="mb-3">
              <label class="small mb-1" for="newPassword">New Password</label>
              <input
                class="form-control"
                id="newPassword"
                type="password"
                placeholder="Enter new password"
              />
            </div>
            <!-- Form Group (confirm password)-->
            <div class="mb-3">
              <label class="small mb-1" for="confirmPassword"
                >Confirm Password</label
              >
              <input
                class="form-control"
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
              />
            </div>
            <button class="btn btn-primary" type="button">Save</button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <!-- Delete account card-->
      <div class="card mb-4">
        <div class="card-header">Delete Account</div>
        <div class="card-body">
          <p>
            Deleting your account is a permanent action and cannot be undone. If
            you are sure you want to delete your account, select the button
            below.
          </p>
          <button class="btn btn-danger-soft text-danger" type="button">
            I understand, delete my account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>


<style scoped>
body {
  margin-top: 20px;
  background-color: #f2f6fc;
  color: #69707a;
}
.img-account-profile {
  height: 10rem;
}
.rounded-circle {
  border-radius: 50% !important;
}
.card {
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
  font-weight: 500;
}
.card-header:first-child {
  border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
  padding: 1rem 1.35rem;
  margin-bottom: 0;
  background-color: rgba(33, 40, 50, 0.03);
  border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control,
.dataTable-input {
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c5ccd6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
  color: #0061f2;
  border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
  color: #69707a;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>

