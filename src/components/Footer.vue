<template>
  <!-- FOOTER -->
  <div
    class="bg-black-100
      h-auto
      w-100
      pt-8
      md:px-32
      px-8
      md:pb-14
      lg:pt-24
      pb-8"
  >
    <div class="container mx-auto text-center">
      <div class="w-16 mx-auto">
        <img :src="logoUtama" alt="" class="w-100" />
      </div>
      <p class="text-white font-ligth mt-3">Get in touch</p>
      <p class="text-white mx-auto font-ligth    ">
        For business inquiry please send email to wahyupurnama434@gmail.com
      </p>
    </div>
  </div>
  <!-- END FOOTER -->
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      logoUtama: require("../assets/logo.png")
    };
  }
};
</script>
