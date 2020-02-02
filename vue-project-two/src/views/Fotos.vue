<template>
  <div class="fotos">
    <h1>Galería de Fotos</h1>

    <router-link :to="{ name: 'fotos', params: {id: item} }"
    v-for="(item, index) of fotosArray" :key="index">
      <button>Foto {{item}}</button>
    </router-link>

    <span v-if="$route.params.id!=null"><Foto/></span>
    <br>
    <br>
    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue"

export default {
  name: 'Fotos',
  components: {
    Foto
  },
  data() {
    return {
      fotosArray: [1, 2, 3]
    }
  },
  methods: {
    home() {
      this.$router.push('/');
    },
    anterior() {
      this.$router.go(-1);
    },
    siguiente() {
      this.$router.go(1);
    }
  }
}
</script>
