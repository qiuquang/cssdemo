<template>
  <div id="app">
    <div id="nav">
      <router-link to="/float">float</router-link> |
      <router-link to="/position">position</router-link> |
      <router-link to="/twoOrThree">twoOrThree</router-link> |
      <router-link to="/flex">flex</router-link> |
      <router-link to="/sass">sass</router-link>
      <!-- <router-link to="/useSass">How To Use SASS</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body,div,p{
  margin: 0;
  padding: 0;
}
html, body{
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
