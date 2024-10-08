import './style.css'


function Home() {

    return (
        <>
            <header>
                    <h1>Olá, amor!! ❤🌹</h1>
            </header>
            <br />
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, libero. Mollitia ea amet tempore rerum? Doloremque dolore officia repudiandae labore, consequatur saepe, suscipit eaque non perferendis architecto delectus, fugiat soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cum corporis nihil consequuntur laudantium culpa, perferendis ut. Reprehenderit commodi explicabo, a, ea ullam eum rerum exercitationem aliquam dolorum, provident sequi.</p>
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
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={4}
                            aria-label="Slide 5"
                        />
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/photo_2024-09-29_10-15-05.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/photo_2024-09-29_10-15-51.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/photo_2024-10-04_09-21-54.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/photo_2024-10-02_19-40-21.jpg" className='d-block w-100' alt="..." />
                        </div>
                        <div className='carousel-item'>
                            <img src="/photo_2024-09-30_13-38-12.jpg" className='d-block w-100' alt="..." />
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos est cumque! Modi perferendis quasi culpa voluptate, officia quos labore facilis voluptatum architecto deserunt nulla ab porro. Iure, eveniet veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, facilis necessitatibus eveniet minima voluptatem est voluptatibus quo. Dolor ullam repudiandae earum, omnis saepe, sint, et cupiditate illo dolore consequatur fugit.</p>
            </main>
        </>
    )
}

export default Home
