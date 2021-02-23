<template>
  <div>
    <QuestionList
      :questions="questions"
      question-list-id="question-list"
      @handleCorrectWrongJudgment="handleCorrectWrongJudgment"
    >
    </QuestionList>
    <CorrectModal 
      v-if="isVisibleModal"
      @next-question="handleCloseModal"
    />
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
      isVisibleModal: false,
    }
  },
  computed: {
    ...Vuex.mapGetters(["questions"])
  },
  methods:{
    handleCorrectWrongJudgment(question){
      if(question.title === 'pep'){
        this.isVisibleModal = true;
      } else {
        this.isVisibleModal = false;
      }
    },
    handleCloseModal(){
      this.isVisibleModal = false;
    }
  }
};
</script>