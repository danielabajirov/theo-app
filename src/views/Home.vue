<template>
  <div class="home">
    <Questions/>
  </div>
  <div>
    <button id="click-me" @click="submit">Click Me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/firebase'
import Questions from '../components/Questions.vue'

export default {
  name: 'Home',
  components: {
    Questions
    
  },
  methods: {
    submit() {
    
      /**db.collection('questions').onSnapshot(res => {
        const dataStored = res.docChanges();

        dataStored.forEach(element => {
          console.log(element.doc.data())
        });
      })**/
      let self = [];
      db.ref("/questions").on("value", function(snapshot) {
        let returnArr = [];
        snapshot.forEach(function(childSnapshot) {
          console.log(childSnapshot.val());
          returnArr.push(childSnapshot.val());
          // Fill the local data property with Firebase data
          self = returnArr;
      });
    });

      //console.log(db.ref("/questions").child(0));
      console.log(self);

    }
  }
}
</script>
