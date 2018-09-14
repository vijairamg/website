import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentUser :''
      ,usersList : '' ,
      currentUserDetails:'',
      friends:''
  },
  mutations: {
        setCurrentUserDetails(state,userDetails)
        {
          state.currentUserDetails = userDetails 
        }
        ,
        setUsersList(state,users){
          state.usersList = users
        }
        ,setCurrentUser(state,user){
          state.currentUser = user 
        },
        setFriends(state,friends){
          state.friends = friends[0].member_user_ids[0]
        }
  },
  actions: {

  },
  getters:{
    
  }
})
