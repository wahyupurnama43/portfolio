<template>
  <Disclosure
    v-for="(item, idx) in items"
    :key="item.id"
    v-slot="{ open, close }"
  >
    <DisclosureButton
      class="
        flex
        justify-between
        align-content-center
        items-content-center
        w-full
        py-5
        text-base text-white
        font-medium
        border-b-2 border-gray-100 border-opacity-25
        focus:outline-none
        focus-visible:ring focus-visible:ring-opacity-75
      "
    >
      <span>{{ item.title }}</span>
      <div class="transition-all" :class="open ? 'transform rotate-90' : ''">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
            stroke="#ffffff"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </DisclosureButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <DisclosurePanel class="text-base py-4 px-3 text-white transition-all">
        {{ item.content }}
      </DisclosurePanel>
    </transition>
    <button
      :ref="(el) => (elements[idx] = el)"
      :data-id="item.id"
      v-show="false"
      @click="doClose(close)"
    ></button>
    <DisclosureStateEmitter :show="open" @show="hideOther(item.id)" />
  </Disclosure>
</template>

<script>
import { ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import DisclosureStateEmitter from "@/components/DisclosureStateEmitter";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    DisclosureStateEmitter
  },
  setup() {
    const items = [
      {
        id: 1,
        title: "Communicative",
        content:
          "I communicate what I struggle to make all crystal clear. I can communicate my ideas well,"
      },
      {
        id: 2,
        title: "Collaborative​",
        content:
          "I can work within a team, collaborate well with developers because I’m frontend-end myself, and I love feedbacks."
      },
      {
        id: 3,
        title: "Time Management",
        content:
          "I manage the whole process from getting clients, project schedule, to product delivery."
      }
    ];

    const elements = ref([]);

    const hideOther = (id) => {
      const items = elements.value.filter((elm) => {
        return elm.getAttribute("data-id") !== id.toString();
      });
      items.forEach((elm) => elm.click());
    };

    const doClose = (close) => {
      close();
    };

    return { items, hideOther, elements, doClose };
  }
};
</script>
