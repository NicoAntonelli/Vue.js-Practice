Vue.component("basicchild", {
    template:
        // Without mapState: <h4>Número Positivo (Hijo): {{ $store.state.numero }}</h4>
        // Without mapMutations: <button class="btn btn-success" @click="$store.commit('aumentar')">+</button>

        `<div>
            <h4>Número Positivo (Hijo): {{ numero }}</h4>
            <button class="btn btn-success" @click="aumentar">+</button>
            <button class="btn btn-danger" @click="disminuir(1)">-</button>
            <button class="btn btn-danger" @click="disminuir(2)">--</button>
            <hr>
            <ul class="mt-3 px-0">
                <li v-for="item of cursos"><div class="alert alert-info mb-1" role="alert">{{item.nombre}}</div></li>
            </ul>
            <div class="alert alert-warning" role="alert">Info obtenida desde JSON</div>
            </div>`,
            // <button class="btn btn-warning" @click="obtenerCursos">Obtener Cursos desde JSON</button>
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
        ...Vuex.mapActions(['obtenerCursos']),
    },
    computed: {
        // numero() { return store.state.numero }
        ...Vuex.mapState(['numero', 'cursos']),
    },
    mounted() {
        this.obtenerCursos();
    },
});
