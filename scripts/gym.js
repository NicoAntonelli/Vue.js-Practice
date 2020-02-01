const app = new Vue({
    el: "#app",
    data: {
        titulo: "Nico's Amazing App",
        subtitulo: "Nico's Gym: Notes",
        tareas: [],
        nuevaTarea: "",
        contador: 0
    },
    methods: {
        guardarStorage() {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        // agregarTarea: function() {
        agregarTarea() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.guardarStorage();
            console.log("Agregaste: ", this.nuevaTarea);
            this.nuevaTarea = "";
        },
        editarTarea(index) {
            this.tareas[index].estado = !this.tareas[index].estado;
            this.guardarStorage();
            console.log(`Tarea ${index} en estado ${this.tareas[index].estado}`);
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            this.guardarStorage();
            console.log(`Se ha eliminado correctamente`);
        },
    },
    computed: {
        okButton() {

        },
        checkTareas() {
            let amount = this.tareas.length;
            let completed = 0;
            this.tareas.forEach(element => {
                if (element.estado) { completed++; }
            });
            return completed/amount*100;
        },
        colorBarProgress() {
            return {
                'bg-danger': this.checkTareas < 30,
                'bg-warning': this.checkTareas >= 30 && this.checkTareas < 60,
                'bg-success': this.checkTareas >= 60,
            }
        },
        colorBarManual() {
            return {
                'bg-danger': this.contador < 10,
                'bg-warning': this.contador >= 10 && this.contador < 25,
                'bg-info': this.contador >= 25 && this.contador < 50,
                'bg-primary': this.contador >= 50 && this.contador < 100,
                'bg-success': this.contador >= 100,
            }
        },
        checkContador() {
            if (this.contador < 0) { this.contador = 0; }
            if (this.contador > 100) { this.contador = 100; } 
            return this.contador;
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosDB === null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }

});
