import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getPokemon} from '../../ducks/pokeReducer'



const Open = (props) => (
  <div className="open">
    <div className="background">
      <div className="camera-ring">
        <Link to='/'>
          <div className="camera-circle" />
        </Link>
      </div>
      <div className="circles-container">
        <div className="little-circle red" />
        <div className="little-circle yellow" />
        <div className="little-circle green" />
      </div>
      <div className="inside">
        <h1>Welcome, {props.user}!</h1>
        {props.loading ? 'Loading... bee-otch' : props.pokemon.results.map(el => {
          <h3 key={el.name}
          >{el.name}</h3>
        })}
        <button
        onClick={() => props.getPokemon(props.getPokemon(props.pokemon.previos))}
        >
         {'<<<'}
        </button>
        <button
                onClick={() => props.getPokemon(props.getPokemon(props.pokemon.next))}

        >
          {'>>>'}
        </button>
      </div>
    </div>
  </div>
)

function mapStateToProps(reduxState){
  const {user} = reduxState.userReducer
  const {pokemon, loading} = reduxState.pokeReducer
  return {user, pokemon, loading}
  
}

//TWO PARAMS
//1. a function that takes in redux state and returns an object with the state we want for the componenet
//2. an object that contains any action builders
export default connect(mapStateToProps, {getPokemon})(Open)

//IIFE immediaetly invoked function expression aka currying