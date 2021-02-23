<template>
  <div>
    <h1 class="text-6xl text-center">STAGE-{{countNum}}</h1>
    <QuestionList
      :questions="shuffleQuestions"
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
      countNum: 1,
      shuffleQuestions: [],
    }
  },
  computed: {
    ...Vuex.mapGetters(["questions"]),
    pow_num(){
      return Math.pow(1.5, this.countNum);
    },
  },
  mounted(){
    this.shuffleQuestions = this.questions
  },
  updated(){
    this.shuffleQuestions = this.shuffle(this.questions)
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
      this.countNum++;
      pow_num = this.pow_num;
      await this.increaseQuestion(pow_num);
      this.handleCloseCorrectModal();
    },
    shuffle: function(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1))
        let tmp = array[i]
        array[i] = array[r]
        array[r] = tmp
      }
      return array
    }
  }
};
</script>
