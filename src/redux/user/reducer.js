const initialState = {
    loggedIn:false,
    errors:[],
    loading:false,
    userObj: null
}

const reducer = (state=initialState , action)=>{
    switch(action.type){
        case "random":
            return state
        default : return state
    }

}
export default reducer;