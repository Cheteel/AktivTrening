<template>
  <main class="min-height-100vh">
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e5044;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.min-height-100vh {
  min-height: 100vh;
}
</style>
