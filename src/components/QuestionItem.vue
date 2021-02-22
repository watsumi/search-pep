<template>
    <div
      :id="'q-'+question.id"
      class="float-left md:float-left"
    >
      <span class="h-12 w-12">
        <img class='hover:opacity-50 container mx-auto h-20 w-20' :src="question.img">
      </span>
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