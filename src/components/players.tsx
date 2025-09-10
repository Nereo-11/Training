interface player {
    name: string;
    posicion: string;
    years: number;
    img?:string;
    nickname?: string;
}

const person: player = {
  name: "Dybala",
  posicion: "MCO",
  years: 15,
  nickname: "La Joya",
  img:"https://tntsports.com.ar/img/2019/10/08/dybala-mask-juventus-paulo.jpg",
};

function Tarjeta(){
    return (
    <div>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src= {person.img}
        alt="Dybala"
        style={{ width: '300px', height: '300px' }}
      />
      <h2>Posición: {person.posicion}</h2>
      <ul>
        <li>{person.nickname}</li>
        <li>Next Messi</li>
        <li>El Guerrero</li>
      </ul>
    </div>
  );
}

export default function TodoList() {
  return (
    <div>
     <Tarjeta/>
    </div>
  );
}
