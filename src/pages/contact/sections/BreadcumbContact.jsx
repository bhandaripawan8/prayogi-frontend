import { Link } from "react-router-dom";

const BreadcumbContact = () => {
  return (
    <>
      <section
        className="breadcrumb_section page-title-light background_bg overlay_bg_blue_70"
        data-img-src="/assets/images/breadcrumb_bg4.jpg"
        style={{
          backgroundImage: "url(/assets/images/counter_bg.jpg)",
          marginTop: "100px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 text-center">
              <div className="page-title">
                <h1>Contact Us</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcumbContact;
