const Know = () => {
    return (
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/1.png" className="d-block w-100" alt="Slide 1" />
              <div
                    className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                    style={{ height: '100%' }}
                    >
                    <h2 style={{ color: 'yellow',  fontSize: '100px', fontWeight: 'bold'}}>PLAN YOUR WORKOUT TODAY!</h2>
                    <p>Hi, all!</p>
                    
                </div>


            </div>
            <div className="carousel-item">
              <img src="/images/2.png" className="d-block w-100" alt="Slide 2" />
              <div
                    className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                    style={{ height: '100%' }}
                    >
                    <h2 style={{ color: 'black',  fontSize: '100px', fontWeight: 'bold'}}>BE ON TRACK!</h2>
                    <p>Hi, all!</p>
                    
                </div>
            </div>
            <div className="carousel-item">
              <img src="/images/3.png" className="d-block w-100" alt="Slide 3" />

              <div
                    className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                    style={{ height: '100%' }}
                    >
                    <h2 style={{ color: 'antiquewhite',  fontSize: '100px', fontWeight: 'bold'}}>ONE APP FOR ALL YOUR QUERIES</h2>
                    <p>Hi, all!</p>
                    
                </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
}
 
export default Know;