<template>
  <div class="my-4">
    <h1 class="text-white mb-3">Counter {{count}}</h1>
    <slot-button @click="plus">
      Plus one
    </slot-button>
    <slot-button @click="minus" class="mx-3">
      Minus one
    </slot-button>
    <emit-test @createTitle="title" :count="count"/>
  </div>
</template>

<script>

import EmitTest from "@/components/EmitTest.vue";
import SlotButton from "@/components/SlotButton.vue";

export default {
  name: 'App',
  components: {SlotButton, EmitTest},
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus() {
      this.count = this.count + 1;
    },
    minus() {
      this.count = this.count - 1;
    },
    title(count) {
      console.log("count", count)
    }
  }
}
</script>

<style>

</style>
