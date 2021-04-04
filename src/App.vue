<template>
  <b-container id="app">
    <Nav />
    <!-- <HelloWorld :msg="userInfo"/> -->
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';

import { UserMutations } from './store/user/mutations';

@Component({
  components: {
    // HelloWorld,
    Nav,
  },
})
export default class App extends Vue {

  // get helloMessage(){
  //   return this.$store.state.user.userName;
  // }
  get userInfo(){
    return this.$store.getters.getInfo;
  }

  mounted(){
    this.$store.dispatch({type:"fetchMessageLog"});
    setTimeout(()=>{
      this.$store.commit(UserMutations.SET_USERNAME,"更改陳測試")
    },3000)
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
  margin-top: 60px;
}
</style>
