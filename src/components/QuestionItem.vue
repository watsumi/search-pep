<template>
    <div
      class="float-left md:float-left"
      @click="handleCorrectWrongJudgment(question)"
    >
      <img class='hover:opacity-50 container mx-auto h-30 w-20' :src="question.img">
    </div>
</template>

<script>
export default {
  name: "QuestionItem",
  props:{
    question:{
      type: Object,
      require: true
    }
  },
  methods:{
    handleCorrectWrongJudgment(question){
      this.$emit('handleCorrectWrongJudgment', question)
    }
  }
}
</script>>