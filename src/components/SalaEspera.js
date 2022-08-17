import React from 'react'
import "./SalaEspera.css"

const salaEspera = ({ mostrarPokemons }) => {
  return (
    <div className="contenedor-espera">
      <button onClick={mostrarPokemons}>Traer Pokemons</button>

      <img 
        src="https://imgs.search.brave.com/cVli3bZpL6sihD7nqTnWN6ICtA0cOZA4ccvK0dDkMek/rs:fit:1191:1200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvcG9rZW1v/bnMtcG5nLTYucG5n"
        alt="background pokemon"
        className="imagen-espera"
      />

    </div>
  )
}

export default salaEspera