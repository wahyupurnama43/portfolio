<template>
  <div
    class="abosolute fixed w-screen z-50 transition-all"
    :class="scrolled ? 'scroll' : ''"
  >
    <nav class="container mx-auto py-4 px-10 md:px-16">
      <div class="logo">
        <img :src="logo" alt="" class="w-3/4" />
      </div>

      <ul :class="open ? 'slide' : 'a'" class="my-auto">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <div class="menu-toggle my-auto" @click="toggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false,
      logo: require("../assets/logo.png"),
      scrolled: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
