<template>
  <div>
    <div class="flex justify-center mt-16">
      <Logo />
    </div>
    <div class="flex justify-center mt-16">
      <Pep />
    </div>
    <div class="flex justify-center mt-16">
      <div class="hover:opacity-50">
        <Start  @click.native="handleOpenQuestion"/>
      </div>
    </div>
    <Question 
      v-if="isVisibleQuestion"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '../components/images/Logo'
import Pep from '../components/images/Pep'
import Start from '../components/images/Start'
import Question from './Question.vue'

export default {
  name: 'TopPage',
  data(){
    return{
      isVisibleQuestion: false, 
    }
  },
  components: {
    Logo,
    Pep,
    Start,
    Question
  },
  methods: {
    handleOpenQuestion(){
      this.isVisibleQuestion = true;
    },
  }
}
</script>
