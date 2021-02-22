<template>
  <div>
    <QuestionList
      :questions="questions"
      question-list-id="question-list"
    >
    </QuestionList>
    <CorrectModal />
  </div>
</template>

<script>
import Vuex from "vuex"
import QuestionList from "../components/QuestionList"
import CorrectModal from "../components/CorrectModal"

export default {
  name: 'Question',
  components:{
    QuestionList,
    CorrectModal,
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