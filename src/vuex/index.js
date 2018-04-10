import vue from "vue"
import vuex from "vuex"
vue.use(vuex);
//login Mark
let loginModule = {
    state:{
        islogin : false
    },
    mutations:{
        login(state){
                state.islogin = true;            
        }
    }
};
export default new vuex.Store({
    modules:{
        loginModule,
    }
})