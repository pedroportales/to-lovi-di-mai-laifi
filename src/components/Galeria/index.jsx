import './style.css'

function Galeria() {

  return (
    <div className='galeria'>
        {imagens.map((imagem, index) => (
            <div className='imagem-container' key={index}>
                <img src="{imagem.url}" alt="{imagem.alt}" />
            </div>
        ))}
    </div>
  )
}

export default Galeria