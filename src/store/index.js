import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:[{title: 'pep', img: require('/public/images/pep.svg')}],
  },
  getters: {
    questions: state => state.questions
  },
  mutations: {
    addQuestion: (state, add_q) => {
      console.log(add_q);
      let tmp = state.questions
      state.questions = {...add_q,...tmp};
      console.log(state.questions);
    }
  },
  actions: {
    increaseQuestion(state,pow_num){
      let add_q = [];
      for (let i = 0; i < pow_num; i++){
        let num = Math.floor(Math.random() * 90 + 1 );
        if (num < 10) {num = '0'+num}
        add_q[add_q.length] = {title: i+92, img: require(`/public/images/${num}.svg`)};
      }
      console.log(add_q);
      console.log(pow_num);
      return state.commit('addQuestion',add_q)
    }
  },
})
