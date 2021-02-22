<template>
  <div>
    <QuestionList
      :questions="questions"
      question-list-id="question-list"
    >
    </QuestionList>
  </div>
</template>

<script>
import Vuex from "vuex"
import QuestionList from "../components/QuestionList"

export default {
  name: 'Question',
  components:{
    QuestionList,
  },
  data(){
    return {
    }
  },
  computed: {
    ...Vuex.mapGetters(["questions"])
  }
};
</script>