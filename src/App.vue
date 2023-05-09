<template>
  <div class="ravi">
      <NavBar />
      <br><br>
      <br><br>
      <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components:{
     NavBar
  } ,
  setup(){

  }
}
</script>

<style>
  @font-face {
    font-family: ravi ;
    src: url(Ravi/ravi.woff);
  }
  .ravi {
    font-family: ravi , Arial, Helvetica, sans-serif !important;
  }
</style>
