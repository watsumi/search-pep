import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions:[
      {title: 'pep', img: require('/public/images/pep.svg')},
      {title: '01', img: require('/public/images/01.svg')},
      {title: '02', img: require('/public/images/02.svg')},
      {title: '03', img: require('/public/images/03.svg')},
      {title: '04', img: require('/public/images/04.svg')},
      {title: '05', img: require('/public/images/05.svg')},
      {title: '06', img: require('/public/images/06.svg')},
      {title: '07', img: require('/public/images/07.svg')},
      {title: '08', img: require('/public/images/08.svg')},
      {title: '09', img: require('/public/images/09.svg')},
      {title: '10', img: require('/public/images/10.svg')},
      {title: '11', img: require('/public/images/11.svg')},
      {title: '12', img: require('/public/images/12.svg')},
      {title: '13', img: require('/public/images/13.svg')},
      {title: '14', img: require('/public/images/14.svg')},
      {title: '15', img: require('/public/images/15.svg')},
      {title: '16', img: require('/public/images/16.svg')},
      {title: '17', img: require('/public/images/17.svg')},
      {title: '18', img: require('/public/images/18.svg')},
      {title: '19', img: require('/public/images/19.svg')},
      {title: '20', img: require('/public/images/20.svg')},
      {title: '21', img: require('/public/images/21.svg')},
      {title: '22', img: require('/public/images/22.svg')},
      {title: '23', img: require('/public/images/23.svg')},
      {title: '24', img: require('/public/images/24.svg')},
      {title: '25', img: require('/public/images/25.svg')},
      {title: '26', img: require('/public/images/26.svg')},
      {title: '27', img: require('/public/images/27.svg')},
      {title: '28', img: require('/public/images/28.svg')},
      {title: '29', img: require('/public/images/29.svg')},
      {title: '30', img: require('/public/images/30.svg')},
      {title: '31', img: require('/public/images/31.svg')},
      {title: '32', img: require('/public/images/32.svg')},
      {title: '33', img: require('/public/images/33.svg')},
      {title: '34', img: require('/public/images/34.svg')},
      {title: '35', img: require('/public/images/35.svg')},
      {title: '36', img: require('/public/images/36.svg')},
      {title: '37', img: require('/public/images/37.svg')},
      {title: '38', img: require('/public/images/38.svg')},
      {title: '39', img: require('/public/images/39.svg')},
      {title: '40', img: require('/public/images/40.svg')},
      {title: '41', img: require('/public/images/41.svg')},
      {title: '42', img: require('/public/images/42.svg')},
      {title: '43', img: require('/public/images/43.svg')},
      {title: '44', img: require('/public/images/44.svg')},
      {title: '45', img: require('/public/images/45.svg')},
      {title: '46', img: require('/public/images/46.svg')},
      {title: '47', img: require('/public/images/47.svg')}
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
