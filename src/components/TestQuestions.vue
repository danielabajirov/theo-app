
<template>
    <div class="container-app">

        <div class="container-quiz">
          <div class="header-quiz">
            <h1>Quiz Time</h1>
            <img src="@/assets/biber-fmi.svg" width="80" height="70"/>
          </div>
          <div class="step-progress" :style="{'width':progress + '%'}"></div>
          <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz" >
              
              <div class="box-question">
                <img
                    max-height="50"
                    max-width="100"
                    :src="question.imageURL"
                />
                <h2>Question {{b}}/{{questions.length}}</h2>
                <p>{{question.question}}</p>

              </div>
              <div class="box-propositions">
                <ul>
                  
                  <li v-for="(proposition,index) in getValuesQuestions(question.props) " :key="index" class="li" @click="selectResponse(proposition,index, question.props)" :class=" correct ? check(proposition, question.props) : ''">

                    <h2  @pointerdown="selectResponse(proposition,index, questions.props)" :class=" correct ? check(proposition) : ''">{{proposition}}</h2>

                    <div class="fas fa-check" v-if="correct ?  proposition.correct: ''"></div>
                    <div class="fas fa-times" v-if="correct ?  !proposition.correct: ''"></div>
                    </li>
                  
                </ul>
               
              </div>
              
              
          </div>
          <div class="box-score" v-if="score_show">
              
              
              <h2>Your score is</h2>
              <h2>{{score}}/{{questions.length}}</h2>
              <div class="btn-restart">
                  <button @click="restartQuiz">Restart <i class="fas fa-sync-alt"></i></button>
              </div>
          </div>
          <div class="footer-quiz">
                <div v-if="progress < 100" class="box-button">
                    <button  v-if="questions.length" @click="skipQuestion()" :style="next ? 'background-color: rgb(106, 128, 202)' : ''">Skip</button>
                    <button  v-if="questions.length" @click="nextQuestion()" :style="!next ? 'background-color: rgb(106, 128, 202)' : ''">Next</button>
                    <button  v-if="!questions.length" @click="initializeDatabaseData()"  style="background-color: rgb(106, 128, 202)" >Start</button>
                </div>  
                  
                  
                  
          </div>
              
        </div>
  </div>
</template>


<script>
/* eslint-disable */
import db from '@/firebase'
import {MathLive} from "mathlive";

export default {
  data(){
    return{
      questions:[],
      storeVariable: "",
      storeArray: [],
      a:0,
      b:1,
      next:true,
      score_show:false,
      quiz:true,
      score:0,
      correct:false,
      progress:0,
      nextCount: 0
    }
  },
  name: 'TestQuestions',
  components: {
  },
  mounted()  {
     this.initializeDatabaseData()

  },
  methods:{
    shuffleArray (arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
    },
    renderMath() {
      this.$nextTick(() => {
        MathLive.renderMathInElement(this.$refs.testing);
      });
    },
    initializeDatabaseData(){
      let self = [];
      db.ref("/questions").on("value", function(snapshot) {
        let returnArr = [];
        snapshot.forEach(function(childSnapshot) {
          returnArr.push(childSnapshot.val());
          // Fill the local data property with Firebase data
          self = returnArr;
        }); 
      });
      this.shuffleArray(self);
      this.questions = self;
    },
    selectResponse(e, index, correctAnswer){
      this.correct = true;
      this.next = false;
      if (e == correctAnswer) {
        this.score = this.nextCount + 1;
      }
    },
    check(status, correctAnswer){
        if (status == correctAnswer) {
          return 'correct'
        }else{
          return 'incorrect' 
        }
    },
    getValuesQuestions(questionsArray) {
      if(this.storeVariable == questionsArray){
        return this.storeArray
      }
      var newArrayQuestions = []
      this.questions.forEach(function (value, i) {
        if (questionsArray !== value.props){
          newArrayQuestions.push(value.props)
        }

      });
      const shuffled = this.getRandom(newArrayQuestions, 3)
      newArrayQuestions = shuffled
      newArrayQuestions.push(questionsArray)
      this.shuffleArray(newArrayQuestions)
      this.storeArray = []
      this.storeArray = newArrayQuestions
      this.storeVariable = ""
      this.storeVariable = questionsArray
      return newArrayQuestions

    },
    getRandom(arr, n) {
      var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    },
    nextQuestion(){
      this.nextCount = this.score;
      if (this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;    
      }
      else{
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
        
      }
    },
    skipQuestion(){
      if (!this.next) {
        return;
      }
      this.progress = this.progress + (100/this.questions.length);
      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
        
        
      }else{
        this.a++;
        this.b++;
        
      }
      
    },
    
    restartQuiz(){
      Object.assign(this.$data, this.$options.data());
      this.initializeDatabaseData(); // reset data in vue
       
    },
    
  }
}
</script>

<style scoped>
.math-field {
 --hue: 10      
}

.container-app {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.container-quiz {
    display: flex;
    width: 40%;
    height: 85%;
    background-color: white;
    text-align: center;
    flex-flow: column;
    border: 1px solid #e7eae0;
    border-radius: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-quiz {
    display: flex;
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7eae0;
    justify-content: center;
    align-items: center;
    background-color: #e7eae0;
    border-radius: 10px 10px 0px 0px;
}

.container-quiz .box {
    display: table;
    width: 100%;
    height: 70%;
    flex-flow: column;
    margin: auto;
}

.box-question {
    margin-top: 20px;
}

.box-question p {
    margin-top: 20px;
}

.box-propositions {
    margin: auto;
    display: table;
    width: 100%;
    justify-content: center;
}

ul {
    display: flex;
    width: 90%;
    margin: 0;
    padding: 0;
    flex-flow: column;
}

li {
    list-style: none;
    line-height: 1;
    border: 1px solid #cdd2d2;
    margin-bottom: 20px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
}

li:hover {
    /*transform: scale(1.1);*/
    background-color: #e7eae0;
}

li>div {
    float: right;
    margin-top: 7px;
    margin-right: 7px;
    color: white;
}

.check {
    color: rgb(74, 219, 74);
}

.close {
    color: rgb(240, 117, 100);
}

.footer-quiz {
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    border-top: 1px solid #e7eae0;
    background-color: #e7eae0;
    border-radius: 0px 0px 10px 10px;
}

.box-button {
    display: flex;
    width: 100%;
}

.footer-quiz .box-button button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
    background-color: #a09f9ff5;
}

li.correct {
    border: 1px solid rgb(74, 219, 74);
    background-color: rgb(74, 219, 74);
    color: white;
    font-weight: 600;
}

li.incorrect {
    border: 1px solid rgb(240, 117, 100);
    background-color: rgb(240, 117, 100);
    color: white;
    font-weight: 600;
}

.box-score {
    display: flex;
    width: 100%;
    height: 70%;
    flex-flow: column;
}

.box-score h2 {
    margin-top: 40px;
}

i {
    display: none;
    color: white;
}

.step-progress {
    display: flex;
    width: 100%;
    height: 5px;
    background-color: rgb(106, 128, 202);
    transition: 0.5s;
}

.btn-restart {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 50px;
}

.btn-restart button {
    width: 150px;
    height: 35px;
    outline: none;
    border: 0;
    background-color: rgb(106, 128, 202);
    color: white;
    font-size: 18px;
    cursor: pointer;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.next {
    background-color: rgb(106, 128, 202);
}

</style>
