<template>
  <div id="app" class="container">
    <cabecera/>
    <Lista/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// <HelloWorld msg="Welcome to Your Vue.js App"/>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Cabecera,
    Lista
  }
}
</script>
