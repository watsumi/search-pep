<template>
  <div>
    <h1>QuestionList</h1>
    <div :id="questionListId">
      <template v-for="question in questions">
        <QuestionItem
          :key="question.id"
          :question="question"
        />
      </template>
    </div>
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
      type: Array,
      required: true
    },
    questionListId:{
      type: String,
      required: true
    }
  },
}
</script>