const app = new Vue({
    el: "#app",
    data: {
        titulo: "Nico's Amazing App",
        subtitulo: "Awesome Shopping Cart",
        fondo: "bg-danger",
        color: true,
        frutas: [
            {nombre: "Manzana", cantidad: 10},
            {nombre: "Naranja", cantidad: 0},
            {nombre: "Banana", cantidad: 11}
        ],
        nuevaFrutaNombre: "",
        nuevaFrutaCantidad: 0,
        total: 0,
        mensaje: "Gracias por utilizar este programa"
    },
    methods: {
        // agregarFruta: function(){
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFrutaNombre,
                cantidad: this.nuevaFrutaCantidad
            });
            console.log("Elemento Agregado");
            this.nuevaFrutaNombre = "";
            this.nuevaFrutaCantidad = 0;
        },
        validarCantidad(cantidad, sum) {
            if (sum) { cantidad++; } else { cantidad--; }
            if (cantidad < 0) { cantidad = 0; }
            if (!Number.isInteger(cantidad)) { cantidad = 0; }
            return cantidad;
            // Solo funciona para los botones... investigar Nested Computeds
        },
        destruir() {
            this.$destroy();
        },
        gymLink() {
            window.location.href = "gym.html";
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        },
        mensajeInvertido() {
            return this.mensaje.split('').reverse().join('');
        }
    },
    watch: {
        nuevaFrutaCantidad() {
            if (this.nuevaFrutaCantidad < 0) { this.nuevaFrutaCantidad = 0; }
            if (!Number.isInteger(this.nuevaFrutaCantidad)) { this.nuevaFrutaCantidad = 0; }
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
