<template>
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom rounded-lg overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true">
      <div class="sm:flex sm:flex-row-reverse">
        <div class="object-contain h-48 w-full">
          <div class="flex justify-center mt-16">
            <Monster />
            <NotPep />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NotPep from './images/NotPep'
import Monster from './images/Monster'

export default {
  name: "CorrectComponent",
  components:{
    NotPep,
    Monster,
  },
}
</script>

<style scoped>
.modal {
  display: block;
}
</style>
