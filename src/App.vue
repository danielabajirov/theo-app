<template>
  <div id="nav">
    <TestQuestions/>
    <!-- <router-link to="/">Home</router-link> -->
    <!-- Comment<router-link to="/about">About</router-link> -->
    <!-- <router-link to="/about">About</router-link>  -->
  </div>
</template>

<script>
// @ is an alias to /src
import TestQuestions from './components/TestQuestions.vue'
export default {
  name: 'App',
  components: {
    TestQuestions
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
