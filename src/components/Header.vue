

<template >
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="mail-service">
            <i class="fa fa-envelope"></i>
            OneDeal@gmail.com
          </div>
          <div class="phone-service">
            <i class="fa fa-phone"></i>
            +251939910065
          </div>
        </div>
        <div class="ht-right">
          <a href="/login" class="login-panel"
            ><i class="fa fa-user"></i>Login</a
          >
          <div class="lan-selector"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <a href="/">
                <img src="../assets/onedeallogo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-7 col-md-7">
            <div class="advanced-search">
              <button type="button" class="category-btn">All Categories</button>
              <div class="input-group">
                <input type="text" placeholder="What do you need?" />
                <button type="button"><i class="ti-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-item">
      <div class="container">
        <div class="nav-depart">
          <div class="depart-btn">
            <span>All items</span>
            <ul class="depart-hover">
              <li class="active"><a href="#">Women’s </a></li>
              <li><a href="#">Men’s Clothing</a></li>
              <li><a href="#">Cosmotics</a></li>
              <li><a href="#">Kid's Clothing</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">HouseHold</a></li>
              <li><a href="#">Automotive</a></li>
              <li><a href="#">Commercial Equipment and Tools</a></li>
              <li><a href="#">Health and Wellness</a></li>
              <li><a href="#">Holidays</a></li>
              <li><a href="#">Animal and Pets</a></li>
              <li><a href="#">Stationary</a></li>
              <li><a href="#">Food</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">School</a></li>
              <li><a href="#">General</a></li>
            </ul>
          </div>
        </div>
        <nav class="nav-menu mobile-menu">
          <ul>
            <li class="active"><a href="./index.html">Home</a></li>

            <li><a href="#">Collection</a></li>
            <li><a href="./shop.html">Deals Alert</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { routes as rts } from "../router";

export default {
  setup() {
    const routes = rts;

    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = (path) => path === activeRoute.value;

    return { isActive, routes };
  },
};
</script>

<style scoped>
@import "../assets/home.css";

@import "../assets/themify-icons.css";
@import "../assets/bootstrap.min.css";
@import "../assets/elegant-icons.css";
@import "../assets/font-awesome.min.css";
@import "../assets/jquery-ui.min.css";
@import "../assets/nice-select.css";
@import "../assets/slicknav.min.css";
#app {
  margin: 0 auto;
  padding: 2rem;
  display: contents;
  font-weight: normal;
}

@media (min-width: 1024px) {
  #app {
    display: contents;
    width: 100%;
  }
}
</style>




