import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
    },

    getters: {
        getLoginState(state) {
            state.isLoggedIn = localStorage.getItem('accessToken') !== '' && localStorage.getItem('accessToken') !== null
            return state.isLoggedIn
        },
    },
})
