import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9 text-center">
              <div className="error_txt text_default">404</div>
              <div className="heading_s2 mb-2">
                <h5>oops! The page you requested was not found!</h5>
              </div>
              <p>
                The page you are looking for was moved, removed, renamed or
                might never existed.
              </p>
              <Link to="/" className="btn btn-outline-black">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
