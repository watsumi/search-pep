<template>
  <div>
    <header class="flex justify-between p-4 border-b items-center">
      <button 
        class="py-1 px-4 border-4 border-black rounded hover:opacity-50"
        @click="handleOpenGiveUpModal"
      >
        GIVE UP
      </button>
      <button 
        class="py-1 px-4 border-4 border-black rounded hover:opacity-50"
        @click="handleOpenTweetModal"
      >
        Tweet
      </button>
    </header>
    <h1 class="text-6xl text-center">STAGE-{{countNum}}</h1>
    <span class="p-5"/>
    <QuestionList
      :questions="questions"
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
    <GiveUpModal
      v-if="isVisibleGiveUpModal"
      @twitter-share="twitterShare"
      @click="handleCloseGiveUpModal"
    />
    <Tweet
      v-if="isVisibleTweetModal"
      @twitter-share="twitterShare"
      @click="handleCloseTweetModal"
    />
  </div>
</template>

<script>
import Vuex from "vuex"
import QuestionList from "../components/QuestionList"
import CorrectModal from "../components/CorrectModal"
import WrongModal from '../components/WrongModal.vue';
import GiveUpModal from '../components/GiveUpModal.vue';
import Tweet from '../components/Tweet';

export default {
  name: 'Question',
  components:{
    QuestionList,
    CorrectModal,
    WrongModal,
    GiveUpModal,
    Tweet,
  },
  data(){
    return {
      isVisibleCorrectModal: false, //正解時のモーダル表示切り替え
      isVisibleWrongModal: false, //不正解時のモーダル表示切り替え
      isVisibleGiveUpModal: false, //ギブアップ時のモーダル表示切り替え
      isVisibleTweetModal: false, //ギブアップ時のモーダル表示切り替え
      countNum: 1, //ステージの番号
    }
  },
  head() {
    return{
    meta: [
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@watsumi_'},
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'SearchForPep'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://watsumi.github.io/search-pep/'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '人混みに紛れていくPepを探して！'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://watsumi.github.io/search-pep/images/pep.png'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Pepを探して！'}
    ]}
  },
  computed: {
    ...Vuex.mapGetters(["questions"]),
    pow_num(){
      return Math.pow(1.5, this.countNum); //問題数を1.5のステージ数の累乗分増やすための数値
    },
  },
  methods:{
    ...Vuex.mapActions([
      'increaseQuestion', //Vuexのactions-問題を1.5のステージ数の累乗分増やす
    ]),
    handleCorrectWrongJudgment(question){
      if(question.title === 'pep'){
        this.isVisibleCorrectModal = true; //選択した画像のタイトルがpepであれば正解時のモーダル表示
      } else {
        this.isVisibleWrongModal = true; //選択した画像のタイトルがpepでなければ不正解時のモーダル表示
        setTimeout(
            function() {
              this.handleCloseWrongModal() //不正解時のモーダルを１秒間表示
            }.bind(this),
            1000
          );
      }
    },
    handleOpenCorrectModal(){
      this.isVisibleCorrectModal = true;
    },
    handleCloseCorrectModal(){
      this.isVisibleCorrectModal = false;
    },
    handleCloseWrongModal(){
      this.isVisibleWrongModal = false;
    },
    handleOpenGiveUpModal(){
      this.isVisibleGiveUpModal = true;
    },
    handleCloseGiveUpModal(){
      this.isVisibleGiveUpModal = false;
    },
    handleOpenTweetModal(){
      this.isVisibleTweetModal = true;
    },
    handleCloseTweetModal(){
      this.isVisibleTweetModal = false;
    },
    async clickCountUp(pow_num){
      this.countNum++;
      pow_num = this.pow_num;
      this.increaseQuestion(pow_num);
      this.handleCloseCorrectModal();
      this.shuffle(pow_num); 
    },
    shuffle(pow_num) {
      for (let i = Math.floor(pow_num)-1; i > 0; i--) { //フィッシャー–イェーツのシャッフルアルゴリズム
        let r = Math.floor(Math.random() * (i + 1))
        let tmp = this.questions[i]
        this.questions[i] = this.questions[r]
        this.questions[r] = tmp
        console.log(this.questions[1])
      }
      return this.questions
    },
    twitterShare(){
      var shareURL = 'https://twitter.com/intent/tweet?text=' + `Pepを${this.countNum-1}回見つけました！` + `%20%23Pepを探して%20%23SearchForPep%20%23web1week` + '&url=' + "https://watsumi.github.io/search-pep/";  

      location.href = shareURL //シェア用の画面へ遷移
    }
  },
};
</script>