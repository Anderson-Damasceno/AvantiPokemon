import './CardPokemon.css';

export default function CardPokemon(){
    return(<div> 
        <div className="container"> 
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" className='imagem'></img>
            <div className="info">
                <p>#0001</p>
                <h5> Pedro</h5>
            </div>
            <div className='habilidade1'>oi</div>
            <div className='habilidade2'>tchau</div>
         </div>
    </div>)
}