<template>
  <div class="bg-black-100 w-100 text-center lg:text-left">
    <div class="text-center pt-36 text-white">
      <h1 class="text-4xl font-bold mb-4">All Project</h1>
      <p class="font-normal md:w-2/4 w-full mx-auto">
        I am a traveling lifestyle blogger and fashion photographer. I love to
        capture moments that become treasured memories.
      </p>
    </div>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 w-4/5 mx-auto py-10">
      <!-- col-6 -->
      <div class=" mx-auto lg:mt-4 mt-6 relative">
        <img src="../assets/projek1.jpg" alt="" class="w-100" />
        <div
          class="flex mt-4 lg:w-40 w-full transform delay-100 hover:scale-110"
        >
          <p class="font-bold md:text-center text-white">Dewa Coffeeshop</p>
        </div>
        <a
          href="https://dewacoffee.xyz/"
          target="_blank"
          class="stretched-link"
        ></a>
      </div>
      <!-- end col-6 -->

      <!-- col-6 -->
      <div class=" mx-auto lg:mt-4 mt-6 relative">
        <img src="../assets/projek2.jpg" alt="" class="w-100" />
        <div
          class="flex mt-4 lg:w-40 w-full transform delay-100 hover:scale-110"
        >
          <p class="font-bold md:text-center text-white">Villa Bali</p>
        </div>
        <a
          href="https://villa-bali.netlify.app/"
          target="_blank"
          class="stretched-link"
        ></a>
      </div>
      <!-- end col-6 -->

      <!-- col-6 -->
      <div class=" mx-auto lg:mt-4 mt-6 relative">
        <img src="../assets/projek3.jpg" alt="" class="w-100" />
        <div
          class="flex mt-4 lg:w-40 w-full transform delay-100 hover:scale-110"
        >
          <p class="font-bold md:text-center text-white">Dcreat</p>
        </div>

        <a
          href="https://dcreat.netlify.app/"
          target="_blank"
          class="stretched-link"
        ></a>
      </div>
      <!-- end col-6 -->

      <!-- col-6 -->
      <div class=" mx-auto lg:mt-4 mt-6 relative">
        <img
          src="../assets/projek4.jpg"
          alt=""
          class="w-100 "
          style="height:88%"
        />
        <div
          class="flex mt-4 lg:w-40 w-full transform delay-100 hover:scale-110"
        >
          <p class="font-bold md:text-center text-white">Kopi Bhineka</p>
        </div>

        <a
          href="https://bhineka-kopi.netlify.app/"
          target="_blank"
          class="stretched-link"
        ></a>
      </div>
      <!-- end col-6 -->

      <!-- col-6 -->
      <div class=" mx-auto lg:mt-4 mt-6 relative">
        <img
          src="../assets/projek5.jpg"
          alt=""
          class="w-100 "
          style="height:88%"
        />
        <div
          class="flex mt-4 lg:w-40 w-full transform delay-100 hover:scale-110"
        >
          <p class="font-bold md:text-center text-white">Mulai Merintis</p>
        </div>

        <a
          href="https://mulaimerintis.netlify.app/"
          target="_blank"
          class="stretched-link"
        ></a>
      </div>
      <!-- end col-6 -->
    </div>
  </div>

  <div class="bg-black-200 md:h-80 ">
    <div class="relative">
      <div
        class="md:absolute lg:top-3/4 md:top-1/2  md:left-2/4 md:transform md:-translate-x-2/4 md:translate-y-1/2 lg:translate-y-3/4 h-auto md:h-100 lg:w-2/4 md:w-3/4 w-full bg-black-200 md:bg-black-100"
      >
        <div class="md:flex block md:justify-between text-center">
          <Tilt>
            <img
              src="./../assets/product.png"
              alt=""
              class="w-60 lg:-mt-22 md:-mt-20 mx-auto md:mx-0 cursor-move"
            />
          </Tilt>

          <div class="p-6 text-white md:text-right my-auto">
            <p class="text-xl">Interested working with me ?</p>
            <button class="border border-white px-4 py-1 mt-4">
              <a
                target="_blank"
                href="https://wa.me/087810202578?text=Hi,wahyu%20purnama%20Saya%20tertarik%20dengan%20website%20Anda%20buat"
                >Contact Me</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tilt from "vanilla-tilt-vue";
export default {
  name: "Product",
  components: {
    Tilt
  }
};
</script>
