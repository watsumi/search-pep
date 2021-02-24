<template>
  <div>
    <TopPage 
      v-if="isVisibleTopPage"
      @click.native="handleCloseTopPageOpenQuestion"
    />
    <Question 
      v-if="isVisibleQuestion"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TopPage from './TopPage.vue'
import Question from './Question.vue'

export default {
  name: 'Home',
  data(){
    return{
      isVisibleTopPage: true, 
      isVisibleQuestion: false, 
    }
  },
  components: {
    TopPage,
    Question
  },
  methods: {
    handleCloseTopPageOpenQuestion(){
      this.isVisibleTopPage = false; //TopPageを非表示
      this.isVisibleQuestion = true; //Questionを表示
    },
  }
}
</script>
