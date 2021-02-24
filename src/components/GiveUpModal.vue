<template>
<div class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75" @click.self="handleCloseGiveUpModal"></div>
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="flex justify-center mt-16">
          <NeverTweet />
        </div>
      </div>
      <button 
        class="py-4 px-6 border-4 border-black rounded hover:opacity-50"
        @click="twitterShare"
      >
        結果をTweetする
      </button>
      <div class="px-4 sm:flex sm:flex-row-reverse">
        <router-link to="/" class="object-contain h-48 w-full hover:opacity-50">  
          <div class="flex justify-center mt-16">
            <Quit 
              @click.native="reload"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NeverTweet from './images/NeverTweet'
import Quit from './images/Quit'
export default {
  name: "GiveUp",
  components:{
    NeverTweet,
    Quit
  },
  methods:{
    reload(){
        this.$router.go({path: this.$router.push('/'), force: true});
    },
    twitterShare(){
      this.$emit('twitter-share')
    },
    handleCloseGiveUpModal(){
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
}
</style>
