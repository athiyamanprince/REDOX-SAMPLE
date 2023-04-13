export const increment = ()=>{
    return {
        type: "increment"
    }
}

export const decrement = ()=>{
    return {
        type: "decrement"
    }
}

export const implementBySpecificCalue = (value) =>{
    return {
        type: "implementBySpecificCalue",
        payload: value
    }
}