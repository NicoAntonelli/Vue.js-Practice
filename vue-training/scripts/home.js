const app = new Vue({
    el: "#app",
    // store: store,
    store,
    data: {
        subtitulo: "Testing Zone (Home)",
        fondo: "bg-danger",
        color: true,
        mensaje: "Gracias por utilizar este programa"
    },
    methods: {
        // functionName: function() {
        destruir() {
            this.$destroy();
        },
    },
    computed: {
        mensajeInvertido() {
            return this.mensaje.split('').reverse().join('');
        }
    },
    beforeDestroy() {
        console.log("Ha sido activado el botón de eliminación de Instancia de Vue");
        console.log("Ningún evento de Vue funcionará. Toca F5 para volver a instanciar. Adios!!");
    }

    // Vue's Life Cycle
    // beforeCreate(), created(),
    // beforeMount(), mounted(),
    // beforeDestroy(), destroyed()
});
