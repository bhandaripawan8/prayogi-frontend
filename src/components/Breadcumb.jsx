import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcumb = ({ img, title, subtitle1, subtitle2, route1 }) => {
  return (
    <>
      <section className="bg_light_pink breadcrumb_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 text-center">
              <div className="page-title">
                <h1>{title}</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    {subtitle1 && <Link to={route1}>{subtitle1}</Link>}
                  </li>

                  {subtitle2 && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle2}
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <div className="ol_shape11">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="/assets/images/shape11.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape12">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="/assets/images/shape12.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape13">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="/assets/images/shape7.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Breadcumb.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  route1: PropTypes.string,
};

export default Breadcumb;
