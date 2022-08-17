import './App.css';
import { useState, useEffect } from 'react'
import Pokemon from "./components/pokemon"
import SalaEspera from './components/SalaEspera';


function App() {

  const [pokemons, setPokemons] = useState([])
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const getPokemons = async (url) =>{
      const data = await fetch(url);
      const json = await data.json();
  
      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
         json = await res.json();
         console.log(json)
  
         let pokemon = {
          id: crypto.randomUUID(),
          name: json.name,
          avatar: json.sprites.other.dream_world.front_default,
         };
        
         setPokemons((pokemons) => [...pokemons, pokemon]);

      })
    }
    visible && getPokemons("https://pokeapi.co/api/v2/pokemon/");

  }, [visible])     
  
  const mostrarPokemons = () => setVisible(true)


  return (
    <div className="contenedor-principal">
      <h1>POKEMONS</h1>
      <div className="contenedor-pokemons">
        {
          visible === false
          ?(<SalaEspera mostrarPokemons={mostrarPokemons} />)            
          :(pokemons.map((el) =>(
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          )))
        }
      </div>
    </div>
  );
}

export default App;


