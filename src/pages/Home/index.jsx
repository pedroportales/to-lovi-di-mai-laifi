import './style.css'
import Galeria from '../../components/Galeria'

function Home() {
    const imagens = [
        {url: "https://www.arqplace.com.br/teste-teste", alt: "Imagem 1"}
    ]

    return (
        <div>
            <h1>Olá, amor!</h1>
            <Galeria imagens={imagens} />
        </div>
    )
}

export default Home
