const DarkModeReducer = (state,action)=>{
    
    // console.log(action.type)
    switch (action.type){
        case "LIGHT":{
            return {
                darkMode:false,
            }
        }
        case "T":{
            return {
                darkMode:false,
            }
        }
        case "DARK":{
            console.log(state.darkMode)
            return {
                darkMode:true,
            }
        }
        
        default:
            return state;
    }
}
export default DarkModeReducer;