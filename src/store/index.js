import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    users: [],

    loginUser:[],
    Snackbar:false,

  },

  mutations: {
    SET_SNACKBAR(state,Snackbar){
      state.Snackbar = Snackbar;
    },
    SET_SNACKBARMSG_ERRRORMSG(state,snackbarErrorMsg){
      state.snackbarErrorMsg = snackbarErrorMsg;
    },

    SET_USER(state,users){

      state.users = users;

    },

    LOGIN_USER(state,loginUser){

      state.loginUser = loginUser;

    },

  },

  actions: {
    updateSnackBarStatus({commit}){
      commit("SET_SNACKBAR",false);
     },

    loadUser({ commit }, payload) {

      console.log(commit);

      console.log (payload);

      axios.post("https://imagesharelink.herokuapp.com/api/register",payload, {

        

      })
      .then((response) => {

            let data = response.data;

            console.log(response);


            commit('SET_USER', data)
            // window.open("/signin", '_self')

          })

          .catch(error => {
            console.log(error.response)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
          })

    },

    loginUser({ commit }, payload) {

      console.log(commit);

      console.log (payload);

      axios.post("https://imagesharelink.herokuapp.com/api/login",payload).then((response) => {

            let data = response.data;

            console.log(response);

            commit('LOGIN_USER', data)
            // window.open("/signin", '_self')

          })

          .catch(error => {
            console.log(error.response)
            commit('SET_SNACKBAR',true)
            commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
          })

    },ForgotData({commit},payload){
     
      console.log(commit);

      console.log(payload);
      axios.post("https://imagesharelink.herokuapp.com/api/forget_password",payload).then(function(response){
        console.log(response);
        // window.open("/signin", '_self')


      })

      .catch(error => {
        console.log(error.response)
        commit('SET_SNACKBAR',true)
        commit('SET_SNACKBARMSG_ERRRORMSG',error.response.data.message)
      })
      }

  },
  getters:{
    getSnackbarStutes(state){
    return state.Snackbar;
    },
    getSnackbarErrorMsg(state){
      return state.snackbarErrorMsg;
    }
},
  modules: {
  }
})
