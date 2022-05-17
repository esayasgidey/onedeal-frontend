<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "LoginLayout",
  components: {},
};
</script>



<style>
/* @import "../assets/base.css"; */

/* #app {
  margin: 0 auto;
  width: 100%;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

body {
  display: flex;
  place-items: center;
}

#app {
  padding: 0%;
 
}

header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.logo {
  margin: 0 2rem 0 0;
} */
</style>
