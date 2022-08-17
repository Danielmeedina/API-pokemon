import "./pokemons.css"

export default function Pokemon({ avatar, name}){
  return(
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}