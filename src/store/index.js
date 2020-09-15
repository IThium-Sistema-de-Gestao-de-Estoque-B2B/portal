import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/http' 
import axios from 'axios'

Vue.use(Vuex)

const state = {
    token: null,
    user: {}
}

const mutations = {
    SET_LOGGED_USER(state, { token, user }){
        state.token = token
        state.user = user
    },
    CLEAR(state){
        state.token = null
        state.user = {}
    }
}


const actions = {
    login({ commit }, data){
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}auth/login`, data, {
                headers: config.headerWithouToken
            })
            .then(response => {
                commit('SET_LOGGED_USER', {
                    token: response.data.access_token,
                    user: response.data.user
                })
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions
})