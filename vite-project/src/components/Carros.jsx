import carro from './../assets/carro.jpg'

function Carros(){
    
    return (
        <>
            <img src={carro} alt="imagem de carro" />
            <ul>
                <li> Honda Civic</li>

                <li> Fiat Uno</li>

                <li> Gol </li>

                <li> Citroen </li>

                <li> Wolskwagen </li>

            </ul>
        </>
    )
}

export default Carros