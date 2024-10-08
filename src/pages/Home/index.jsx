import './style.css'


function Home() {

    return (
        <>
            <header>
                    <h1>Feliz 1 mês, meu amor!! ❤️🌹</h1>
            </header>
            <br />
            <main>
                <p>Eu sei que esse não é o melhor presente do mundo KKKKK Mas eu fiz de coração pra ti!! E gostaria de lhe agradecer por ser essa garota tão especial que tem sido uma benção tão grande em minha vida... Abaixo separei 4 fotos de nós dois (vai passando pros lados), um ao lado do outro, e em todas podemos encontrar nada mais, nada menos que o sorriso mais belo de toda existência: </p>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={3}
                            aria-label="Slide 4"
                        />
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/to-lovi-di-mai-laifi/photo_2024-09-29_10-15-05.jpg" className="d-block w-100" alt="..." />
                        </div>
                        
                        <div className="carousel-item">
                            <img src="/to-lovi-di-mai-laifi/photo_2024-09-29_10-15-13.jpg" className='d-block w-100' alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/to-lovi-di-mai-laifi/photo_2024-09-29_10-15-51.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/to-lovi-di-mai-laifi/photo_2024-10-04_09-21-54.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                <p>Você me conquistou pelo seu jeito doce e incrível de ser!! E eu fico aqui tentando te descrever, tentando te elogiar... Mas me faltam palavras para expressar!! É como disse o Jorge Vercillo: "Ela une todas as coisas... Como eu poderia explicar?... Um doce mistério de rio... Com a transparência de um mar"</p>
                <img src="/to-lovi-di-mai-laifi/photo_2024-09-29_10-15-19.jpg" alt="" className="img-out" />
                <p>Estou ansioso para que possamos entrar juntos no Templo!! Se for parar pra pensar, ainda não fizemos isso, mesmo durante o período de Casa Aberta. Isso quer dizer que quando fizermos, será literalmente a primeira vez, e será única!!</p>
                <img src="/to-lovi-di-mai-laifi/photo_2024-09-30_13-38-12.jpg" alt="..." className="img-out" />
                <p>Também estou esperançoso de lhe carregar em meus braços, você com um belo vestido branco (que vai ficar ainda mais belo em você), e tendo juntos esse momento tão feliz e especial que nos é ordenado pelo Pai! Muito obrigado por ter ✨guardado✨ meu coração contigo, meu amor!! Pode ficar com ele (sem prazo de devolução 😝). Que venhamos muitos anos mais, e uma eternidade!! ❤️✨</p>
                <img src="/to-lovi-di-mai-laifi/photo_2024-10-02_19-40-21.jpg" alt="" className="img-out" />
                <br /><br /><br />
                <h1>Eu te amo!! E vou gritar pra todo mundo ouvir!! ❤️❤️❤️🫂</h1>
                <br /><br /><br />
            </main>
        </>
    )
}

export default Home
