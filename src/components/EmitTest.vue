<template>
  <slot-button @click="createTitle">
    console.log
  </slot-button>
</template>

<script>
import SlotButton from "@/components/SlotButton.vue";

export default {
  name: "EmitTest",
  components: {SlotButton},
  props: {
    count: {
      type: Number,
      required: true

    }
  },
  methods: {
    createTitle() {
      this.$emit("createTitle", this.count)
    }
  }
}
</script>

<style scoped>

</style>