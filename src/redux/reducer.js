import * as actions from "./actions";


const initialValue = {
    displayValue:0,
    sampleText: "SAMPLE"
}    

const reducer = ( state = initialValue, {type, payload})=>{
    switch(type){
        case "increment":
            let invCount = state.displayValue + 1
            return {...state, displayValue: invCount }
        case "decrement":
            let decCount = state.displayValue - 1
            return {...state, displayValue: decCount }
        case "implementBySpecificCalue":
            let newNum = state.displayValue + payload
            return {...state, displayValue: newNum}
        default:
            return state
    }
}

export default reducer;