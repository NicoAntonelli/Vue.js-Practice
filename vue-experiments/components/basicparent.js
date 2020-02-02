Vue.component("basicparent", {
    template:
        `<div>
            <h4>Número Positivo (Padre): {{ numero }}</h4>
            <basicchild></basicchild>
        </div>`,
    computed: {
        ...Vuex.mapState(['numero'])
    }
});
