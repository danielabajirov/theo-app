<template>
    <div id="questions">
        <div>
            <label id="label-question">Question number 1 </label>
        </div>
        <div>
        <input type="checkbox" id="checkboxA" v-model="checked">
        <label for="checkboxA">Something</label>
        </div>
        <div>
         <input type="checkbox" id="checkboxB" v-model="checked">
        <label for="checkboxB">Something</label>
        </div>
        <div>
         <input type="checkbox" id="checkboxC" v-model="checked">
        <label for="checkboxC">Something</label>
        </div>
        <div>
         <input type="checkbox" id="checkboxD" v-model="checked">
        <label for="checkboxD">Something</label>
        </div>
     </div>
</template>

<script>
export default {
  name: "Questions",
  props: {
    
  }
}
</script>

<style scoped>
#questions {
    text-align: center;
    border: 3px solid red;
}
#labe-question {
    font-family: Arial, Helvetica, sans-serif;
}
</style>