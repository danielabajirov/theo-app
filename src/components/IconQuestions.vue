<template>
  <div class="container-app">

    <div class="container-quiz">
      <div class="header-quiz">
        <h1>Theo Quiz Time</h1>
        <img src="@/assets/biber-fmi.svg" width="80" height="70"/>
      </div>
      <div class="step-progress" :style="{'width':progress + '%'}"></div>
      <div class="box" v-for="(question,index) in questions.slice(a,b)" :key="index" v-show="quiz">

        <div class="box-question">
          <h2>Question {{b}}/{{questions.length}}</h2>
          <p>{{question.question}}</p>
        </div>
        <div class="box-propositions">
          <ul>

            <li v-for="(proposition,index) in question.propositions" :key="index" class="li" @click="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">
              <math-field id="testing"  style="font-size: 13px;" read-only=false v-bind:value="proposition.props"  @pointerdown="selectResponse(proposition,index)" :class=" correct ? check(proposition) : ''">
              </math-field>
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
export default {
  name: "IconQuestions"
}
</script>

<style scoped>

</style>