<template>
  <div>
    <QuestionList
      :questions="questions"
      question-list-id="question-list"
      @handleCorrectWrongJudgment="handleCorrectWrongJudgment"
    >
    </QuestionList>
    <CorrectModal 
      v-if="isVisibleCorrectModal"
      @next-question="handleCloseCorrectModal"
    />
    <WrongModal
      v-if="isVisibleWrongModal"
      @close-wrong-modal="handleCloseWrongModal"
      @click.self="handleCloseWrongModal"
    />
  </div>
</template>

<script>
import Vuex from "vuex"
import QuestionList from "../components/QuestionList"
import CorrectModal from "../components/CorrectModal"
import WrongModal from '../components/WrongModal.vue';

export default {
  name: 'Question',
  components:{
    QuestionList,
    CorrectModal,
    WrongModal,
  },
  data(){
    return {
      isVisibleCorrectModal: false,
      isVisibleWrongModal: false,
    }
  },
  computed: {
    ...Vuex.mapGetters(["questions"])
  },
  methods:{
    handleCorrectWrongJudgment(question){
      if(question.title === 'pep'){
        this.isVisibleCorrectModal = true;
      } else {
        this.isVisibleWrongModal = true;
        setTimeout(
            function() {
              this.isVisibleWrongModal = false
            }.bind(this),
            1000
          );
      }
    },
    handleCloseCorrectModal(){
      this.isVisibleCorrectModal = false;
    },
    handleCloseWrongModal(){
      this.isVisibleWrongModal = false;
    }
  }
};
</script>