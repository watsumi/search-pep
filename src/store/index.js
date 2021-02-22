import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:[
      {id: 1, title: 'logo', img: '../start.svg', answer: 'true'},
      {id: 2, title: 'pep', img: '../pep.svg', answer: 'false'},
    ],
  },
  getters: {
    questions: state => state.questions
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
