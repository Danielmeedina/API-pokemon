import "../stylesheets/testimonio.css"



export default function TestimonioPersonas(props){

  return(
    <div className="contenedor-testimonios">
      <img 
        className="imagen-testimonio"
        src={require(`../img/imagen-testimonio-${props.nombreImg}.png`)}
        alt= {`foto de ${props.nombre}`}
        title={`${props.nombre}`}
      />
      <div className="contenedor-texto">
        <h3 className="nombre-testimonio">{props.nombre} in {props.ciudad}</h3>
        <p className="empresa-testimonio">{props.carrera} at {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>

    </div>

  )

}