Vue.component("bienvenido", {
    template:
        `<div>
            <br>
            <bienvenidomensaje :texto="miTexto" @miRespuesta="respuestaMensaje = $event"></bienvenidomensaje>
            <p>El mensaje anterior fue enviado desde un {{respuestaMensaje}}, OMG</p>
        </div>`,
    data() {
        return {
            // For Child Component
            miTexto: "mi App",
            // Parent Response
            respuestaMensaje: ""
        }
    }
});
