const store = new Vuex.Store({
    state: {
        numero: 10,
        cursos: []
    },
    mutations: {
        aumentar(state) {
            state.numero++;
        },
        disminuir(state, nro) {
            state.numero-=nro;
            if(state.numero < 0) {
                state.numero = 0;
            }
        },
        llenarCursos(state, cursosData) {
            state.cursos = cursosData
        }
    },
    actions: {
        obtenerCursos: async function({commit}) {
            // Only "commit" needed, not ALL the context
            const data = await fetch("cursos.json");
            const cursos = await data.json();
            commit("llenarCursos", cursos);
        }
    }
});
