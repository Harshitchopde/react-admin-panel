const DarkModeReducer = (state,action)=>{
    
    // console.log(action.type)
    switch (action.type){
        case "LIGHT":{
            return {
                darkMode:false,
            }
        }
        case "TOGGLE":{
            console.log(state.darkMode);
            
            return {
                darkMode:!state.darkMode,
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