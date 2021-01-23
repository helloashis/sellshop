

export default{

    state:{
        userData:{}
    },
    getters: {

        authUsers(state){
            return state.userData;
        },
    },

    actions:{

        getUsers(data){
            axios.get("/user").then(function(result){
                data.commit("users", result.data.user);
            }).catch(function(error){

            })
        },

    },

    mutations: {
        users(state, data){
           return state.userData = data;

        },

    },
}
