Vue.component("principal", {
    template:
        `<div>
            <h1>{{titulo}}</h1>
            <div class="d-flex justify-content-start">
                <button class="btn btn-dark mx-1" @click="link('home')">Ir a Home</button>
                <button class="btn btn-dark mx-1" @click="link('gym')">Ir a Nico's GYM</button>
                <button class="btn btn-dark mx-1" @click="link('shop')">Ir a Shopping</button>
            </div>
            <hr>
        </div>`,
    data() {
        return {
            titulo: "Nico's Amazing App"
        }
    },
    methods: {
        link(ref) {
            window.location.href = ref+".html";
        },
    }
});
