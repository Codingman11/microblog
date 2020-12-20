<template>
  <div id="app">
    <NavBar />
    
    <PostComponent />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import NavBar from "./components/NavBar";
import PostComponent from "./components/PostComponent";




export default {
  name: "App",
  components: { NavBar, PostComponent},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
