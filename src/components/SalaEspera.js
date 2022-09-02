import React from 'react'
import "./SalaEspera.css"

const salaEspera = ({ mostrarPokemons }) => {
  return (
    <div className="contenedor-espera">
      <button className="cssbuttons-io-button" onClick={mostrarPokemons}>Traer pokemons
        <div className="icon">
          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
        </div>
      </button>
      <div className="imagen-espera">
        <img 
          src="https://imgs.search.brave.com/cVli3bZpL6sihD7nqTnWN6ICtA0cOZA4ccvK0dDkMek/rs:fit:1191:1200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvcG9rZW1v/bnMtcG5nLTYucG5n"
          alt="background pokemon"
        />
      </div>
    </div>
  )
}

export default salaEspera