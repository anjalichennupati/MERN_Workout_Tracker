import React from 'react';

const Contact = () => {
  return (
    <div>
      

      <div className="container my-4">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
         
          <label htmlFor="exampleInputPassword1" className="form-label">Choose from the following</label>

          <div className="form-floating">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option selected>Select the option</option>
              <option value="1">Found a bug</option>
              <option value="2">Have a suggestion</option>
              <option value="3">Complaint</option>
            </select>
          </div>
           
             
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label mt-4">Enter the details: </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
          
          <div className="mb-3 form-check mt-4">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <div className="offcanvas offcanvas-start show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Note</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          Want to leave a comment or maybe a suggestion, we are always available for you!
        </div>
      </div>

      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>
          © 2017–2024 Company, Inc. · <a href="#">Privacy</a> ·
          <a href="#">Terms</a>
        </p>
      </footer>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Contact;
