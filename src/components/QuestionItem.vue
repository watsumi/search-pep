<template>
  <div
    :id="'q-'+question.id"
  >
    <span>{{ question.title }}</span>
    <img :src="question.img">
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
  }
}
</script>>