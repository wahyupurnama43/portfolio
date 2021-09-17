<template>
  <div class="bg-black-100 w-100 ">
    <div class="text-center pt-36 text-white ">
      <h1 class="text-4xl font-bold mb-4">Get in Touch</h1>
      <p class="font-normal md:w-2/4 w-full mx-auto">
        We want to hear from you. Let us know how we can help.
      </p>
    </div>

    <div class="lg:w-2/5 w-11/12 mx-auto py-10">
      <div class="py-3">
        <label class="block  text-white text-sm font-bold mb-2" for="username">
          Full Name *
        </label>
        <input
          class="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          autofocus
        />
      </div>

      <div class="py-3">
        <label class="block  text-white text-sm font-bold mb-2" for="username">
          Mail *
        </label>
        <input
          class="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
        />
      </div>

      <div class="py-3">
        <label class="block  text-white text-sm font-bold mb-2" for="username">
          Message * *
        </label>
        <textarea
          class="shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div class="md:flex md:flex-row-reverse ">
        <button
          class="py-2 px-10 text-black font-medium rounded-lg md:w-auto w-full bg-white"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>
