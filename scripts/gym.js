const app = new Vue({
    el: "#app",
    data: {
        titulo: "Nico's Gym",
        tareas: [],
        nuevaTarea: ""
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
        homeLink() {
            window.location.href = "home.html";
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
