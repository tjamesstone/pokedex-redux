import axios from 'axios'

//INITIAL STATE

const initialState = {
    pokemon: {results: []},
    loading: false
}

//ACTION CONSTS

const GET_POKEMON = 'GET_POKEMON'

//ACTION BUILDERS

export const getPokemon = (url) => {
let pokemonPromise = axios.get(url).then(res => {
    return res.data
})
return {
    type: GET_POKEMON,
    payload: pokemonPromise
}
}

//REDUCER FUNCTION

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMON + '_PENDING':
            return {...state, loading: true}
        case GET_POKEMON + '_REJECTED':
            return {...state, loading: false}
        case GET_POKEMON + '_FULFILLED':
            return {...state, pokemon: action.payload, loading: false}
        default: return state
        
    }

}

export default reducer