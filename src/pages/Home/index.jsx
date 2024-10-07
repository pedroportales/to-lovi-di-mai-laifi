import './style.css'


function Home() {

    return (
        <>
            <div>
                <h1>Olá, amor!</h1>
                <p>Feliz primeiro mês!! Que venham muitos mais pela frente...</p>
                <br />
            </div>
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
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="src/assets/photo_2024-09-29_10-15-05.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="src/assets/photo_2024-09-29_10-15-51.jpg" className="d-block w-100" alt="..." />
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

            
        </>
    )
}

export default Home
