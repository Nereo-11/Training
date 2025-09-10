import './formulario.css'

export default function Formulario (){
return(
    <>
    <form className="formulario">
      <label>Nombre: 
        <input type="text" />
      </label>
      <label>Posición: 
        <input type="text" />
      </label>
      <label>Años: 
        <input type="text" />
      </label>
      <label>Url de img: 
        <input type="text" />
      </label>
      <label>Nickname: 
        <input type="text" />
      </label>
    </form>
    </>
);
}