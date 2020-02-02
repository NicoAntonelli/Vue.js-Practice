const app = new Vue({
    el: "#app",
    data: {
        titulo: "Nico's Amazing App",
        subtitulo: "Shopping: Stock Management",
        frutas: [
            {nombre: "Manzana", cantidad: 10},
            {nombre: "Naranja", cantidad: 0},
            {nombre: "Banana", cantidad: 11}
        ],
        nuevaFrutaNombre: "",
        nuevaFrutaCantidad: 0,
        total: 0,
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFrutaNombre,
                cantidad: this.nuevaFrutaCantidad
            });
            console.log("Elemento Agregado");
            this.nuevaFrutaNombre = "";
            this.nuevaFrutaCantidad = 0;
        },
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        },
    },
    watch: {
        // Positivity and Integer Validation
        nuevaFrutaCantidad() {
            if (this.nuevaFrutaCantidad < 0) { this.nuevaFrutaCantidad = 0; }
            if (!Number.isInteger(this.nuevaFrutaCantidad)) { this.nuevaFrutaCantidad = 0; }
        },
        // Positivity and Integer Validation
        frutas: {
            handler() {
                this.frutas.forEach(fruta => {
                    if (fruta.cantidad < 0) { fruta.cantidad = 0; }
                    if (!Number.isInteger(fruta.cantidad)) { fruta.cantidad = 0; }
                });
            },
            deep: true
        }
    }
});
