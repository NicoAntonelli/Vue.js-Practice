<template>
  <div class="tareas">
    <h1>This is not an about page</h1>
    <h3>{{titulo}}</h3>
    <h2 v-for="(item, index) in tareasArray" :key="index">{{item}}</h2>
    <h3>Mejor Tarea: {{best}}</h3>
    <button @click="aumentarContador(1)">+</button>
    <h3>Contador: {{contador}}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  computed: {
    ...mapState(['titulo']),
    ...mapState('tareas', ['tareasArray', 'best']),
    ...mapState('contador', ['contador'])
  },
  methods: {
    ...mapMutations('contador', ['aumentarContador'])
  }
}
</script>
