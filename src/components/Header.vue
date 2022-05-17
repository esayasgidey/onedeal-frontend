

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
                <img src="img/onedeallogo.png" alt="" />
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
              <li class="active"><a href="#">Clothing</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Furniture</a></li>
            </ul>
          </div>
        </div>
        <nav class="nav-menu mobile-menu">
          <ul>
            <li
              v-for="route in showRoutes"
              :key="route.path"
              :class="{ active: isActive(route.path) }"
            >
              <router-link :to="route.path" :title="route.name">
                {{ route.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap">
          <div class="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
              role="button"
              tabindex="0"
              class="slicknav_btn slicknav_collapsed"
              style="outline: none"
              ><span class="slicknav_menutxt">MENU</span
              ><span class="slicknav_icon"
                ><span class="slicknav_icon-bar"></span
                ><span class="slicknav_icon-bar"></span
                ><span class="slicknav_icon-bar"></span></span
            ></a>
            <nav
              class="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              style="display: none"
            >
              <ul>
                <li class="active">
                  <a href="./index.html" role="menuitem">Home</a>
                </li>

                <li><a href="./shop.html" role="menuitem">Collection</a></li>
                <li><a href="./shop.html" role="menuitem">Deals Alert</a></li>
                <li><a href="./contact.html" role="menuitem">Profile</a></li>
              </ul>
            </nav>
          </div>
        </div>
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

    console.log(routes);
    const router = useRouter();

    const showRoutes = routes.filter((route) => route.meta.showOnHeader);

    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = (path) => path === activeRoute.value;

    console.log(showRoutes);
    return { isActive, showRoutes };
  },
};
</script>

<style scoped>
</style>




