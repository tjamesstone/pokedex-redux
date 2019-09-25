//INITIAL STATE
const initialState = {
    user: '',
    address: ''

}
// ACTION CONSTANTS
const SET_USER = 'SET_USER'
const SET_ADDRESS = 'SET_ADDRESS'

//ACTION BUILDERS
export const setUser = (user) => {
    return{
        type: SET_USER,
        payload: user
    }
}
export const setAddress = (address) => {
    return{
        type: SET_ADDRESS,
        payload: address
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type){
        case SET_USER:
            return{...state, user: action.payload}
        case SET_ADDRESS:
            return{...state, address: action.payload}
        default:
            return state
    }

}
