<template>
  <div class="bg-stone-950 hover:bg-stone-900 flex flex-col justify-center items-center p-4 rounded-[4px] cursor-pointer">
    <div class="flex m-4 max-w-full">
      <p class="text-white text-[1.5rem] font-bold truncate">{{title}}</p>
    </div>
    <img src="../assets/img/horz-line-chart.svg" alt="" class="my-3">
    <p class="text-white text-sm opacity-50">{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "CardCustom",
  props: {
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
  }
}
</script>

<style scoped>
</style>