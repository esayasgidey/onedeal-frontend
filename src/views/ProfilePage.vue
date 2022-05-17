<template>
  <div class="container">
    <ul class="nav nav-pills">
      <li class="active"><a data-toggle="pill" href="#basic">Basic</a></li>
      <li><a data-toggle="pill" href="#security">Security</a></li>
    </ul>

    <hr class="mt-0 mb-4" />

    <div class="tab-content">
      <div id="basic" class="tab-pane active">
        <div class="row">
          <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">Profile Picture</div>
              <div class="card-body text-center">
                <!-- Profile picture image-->
                <img
                  class="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <!-- Profile picture help block-->
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <!-- Profile picture upload button-->
                <button class="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <form>
                  <!-- Form Group (username)-->
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername"
                      >Username (how your name will appear to other users on the
                      site)</label
                    >
                    <input
                      class="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      value="username"
                    />
                  </div>
                  <!-- Form Row-->
                  <div class="row gx-3 mb-3">
                    <!-- Form Group (first name)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName"
                        >First name</label
                      >
                      <input
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value="Abebe"
                      />
                    </div>
                    <!-- Form Group (last name)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName"
                        >Last name</label
                      >
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value="Kebede"
                      />
                    </div>
                  </div>
                  <!-- Form Row        -->
                  <div class="row gx-3 mb-3">
                    <!-- Form Group (organization name)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone"
                        >Phone number</label
                      >
                      <input
                        class="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value="251-912-345678"
                      />
                    </div>
                    <!-- Form Group (location)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation"
                        >Location</label
                      >
                      <input
                        class="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        value="Kality, Addis Ababa, Ethiopia"
                      />
                    </div>
                  </div>
                  <!-- Form Group (email address)-->
                  <div class="mb-3">
                    <label class="small mb-1" for="inputEmailAddress"
                      >Email address</label
                    >
                    <input
                      class="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value="name@example.com"
                    />
                  </div>
                  <!-- Form Row-->
                  <div class="row gx-3 mb-3">
                    <!-- Form Group (gender)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputGender">Gender</label>
                      <select
                        class="form-control"
                        id="inputGender"
                        type="text"
                        name="gender"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <!-- Form Group (birthday)-->
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday"
                        >Birthday</label
                      >
                      <input
                        class="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value="06/09/1969"
                      />
                    </div>
                  </div>
                  <!-- Save changes button-->
                  <button class="btn btn-primary" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="security" class="tab-pane">
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
                    <label class="small mb-1" for="newPassword"
                      >New Password</label
                    >
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
                  Deleting your account is a permanent action and cannot be
                  undone. If you are sure you want to delete your account,
                  select the button below.
                </p>
                <button class="btn btn-danger-soft text-danger" type="button">
                  I understand, delete my account
                </button>
              </div>
            </div>
          </div>
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
</style>

