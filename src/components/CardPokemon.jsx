import "./CardPokemon.css";

export default function CardPokemon() {
  const pokemons = [
    {
      id: "001",
      name: "Pedro",
      skills: ["grass", "terra"],
    },
    {
      id: "002",
      name: "Pedro",
      skills: ["grass", "terra"],
    },
  ];
  return pokemons.map((p, index) => (
    <div key={index}>
      <div className="container">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          className="imagem"
        ></img>
        <div className="info">
          <p>{p.id}</p>
          <h5> {p.name}</h5>
        </div>
        {p.skills.map((s, index) => (
          <div className={`habilidade${index + 1}`} key={s}>
            {s}
          </div>
        ))}
      </div>
    </div>
  ));
}
