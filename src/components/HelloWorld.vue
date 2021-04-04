<template>
  <div class="hello">
    <h1>{{ userInfo }}</h1>
    <h1>{{counter}}</h1>
    <b-button variant="primary" @click="incrementCounter">Click Me</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

    get userInfo(){
    return this.$store.getters.getInfo;
  }

  counter= 0;

  incrementCounter(){
    this.counter++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
