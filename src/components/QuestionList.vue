<template>
  <div :id="questionListId">
    <template v-for="question in questions">
      <QuestionItem
        :key="question.id"
        :question="question"
        @handleCorrectWrongJudgment="handleCorrectWrongJudgment"
      />
    </template>
  </div>
</template>

<script>
import QuestionItem from "./QuestionItem"

export default {
  name: "QuestionList",
  components:{
    QuestionItem
  },
  props:{
    questions:{
      required: true
    },
    questionListId:{
      type: String,
      required: true
    }
  },
  methods: {
    handleCorrectWrongJudgment(question){
      this.$emit('handleCorrectWrongJudgment', question)
    }
  },
  computed: {
    questionLists(){
      return this.questions
    }
  }
}
</script>