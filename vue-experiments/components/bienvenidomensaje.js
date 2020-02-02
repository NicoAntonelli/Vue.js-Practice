Vue.component("bienvenidomensaje", {
    template:
        `<h3>{{saludo}}</h3>`,
        // I could use {{texto}}
    data() {
        return {
            saludo: `--> Bienvenido a ${this.texto}!! <--`,
            info: "Componente Anidado"
        }
    },
    mounted() {
        // For Parent Component (Without VueX)
        this.$emit("miRespuesta", this.info);
    },
    props: ['texto']
});
