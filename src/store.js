import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            products: JSON.parse(localStorage.getItem('products')) || [],
            auth: JSON.parse(sessionStorage.getItem('auth')) || '-'
        }
    },
    getters: {
        getLength(state) {
            return state.products.length;
        }
    },
    mutations: {
        stateAuth(state) {
            state.auth = state.auth === '+' ? '-' : '+';
            sessionStorage.setItem('auth', JSON.stringify(state.auth));
            window.location.reload();
        },
        addProduct(state, payload) {
            const newProduct = {
                id: payload.currentLength + 1,
                name: payload.name,
                price: payload.price,
                inLike: false,
                inCart: false,
                countInCart: 0
            }

            state.products.push(newProduct)
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        setFavourite(state, payload) {
            const product = state.products.find(product => product.id === payload);

            product.inLike = !product.inLike;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        addInCart(state, payload) {
            const product = state.products.find(product => product.id === payload);


            product.inCart = !product.inCart;
            product.countInCart = 1;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        changeCountInCart(state, payload) {
            const product = state.products.find(product => product.id === payload.id);

            product.countInCart = payload.count;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        signUp(_, payload) {
            if (payload.password === payload.truePassword){
                delete payload.truePassword;
                localStorage.setItem(`${payload.mail}`, JSON.stringify(payload));
                alert('Успешно, Выполните вход!');
            }
            else {
                alert('Неверные данные!')
            }
        },
        signIn(_, payload) {
            const person = JSON.parse(localStorage.getItem(`${payload.mail}`)) || [];

            if (payload.mail === person.mail && payload.password === person.password){
                sessionStorage.setItem('auth', JSON.stringify('+'));
                window.location.reload();
            }
            else { alert('Неверные данные!'); }
        }
    },
    actions: {
        addProduct({ commit, getters }, payload) {
            payload.currentLength = getters.getLength;

            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('addProduct', payload);
                    resolve();
                },1500)
            });
        },
        setFavourite({ commit }, payload) {
            commit('setFavourite', payload);
        },
        addInCart({ commit }, payload) {
            commit('addInCart', payload);
        },
        changeCountInCart({ commit }, payload) {
            commit('changeCountInCart', payload);
        },
        signUp({ commit }, payload) {
            commit('signUp', payload);
        },
        signIn({ commit }, payload) {
            commit('signIn', payload);
        },
        stateAuth({ commit }) {
            commit('stateAuth');
        }
    }
})

export default store;