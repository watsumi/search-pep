<template>
  <div>
    <h1 class="text-6xl text-center">STAGE-{{count_num}}</h1>
    <QuestionList
      :questions="questions"
      question-list-id="question-list"
      @handleCorrectWrongJudgment="handleCorrectWrongJudgment"
    >
    </QuestionList>
    <CorrectModal 
      v-if="isVisibleCorrectModal"
      @count-up="clickCountUp"
    />
    <WrongModal
      v-if="isVisibleWrongModal"
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
      count_num: 1,
    }
  },
  computed: {
    ...Vuex.mapGetters(["questions"]),
    pow_num(){
      return Math.pow(1.5, this.count_num);
    },
  },
  methods:{
    ...Vuex.mapActions([
      'increaseQuestion',
      'fetchQuestions'
    ]),
    handleCorrectWrongJudgment(question){
      if(question.title === 'pep'){
        this.isVisibleCorrectModal = true;
      } else {
        this.isVisibleWrongModal = true;
        setTimeout(
            function() {
              this.handleCloseWrongModal()
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
    },
    async clickCountUp(pow_num){
      // console.log(this.questions);
      this.count_num++;
      pow_num = this.pow_num;
      await this.increaseQuestion(pow_num);
      this.handleCloseCorrectModal();
      console.log(this.questions);
    },
  }
};
</script>
