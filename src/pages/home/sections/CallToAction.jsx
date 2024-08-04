const CallToAction = () => {
  return (
    <>
      <section className="bg_light_pink">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-8 col-lg-6 text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="heading_s1">
                <h2>
                  Get <span className="text_default">25%</span> Discount for all
                  Classes
                </h2>
              </div>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit. Phasellus
                blandit massa enim.
              </p>
              <a href="#" className="btn btn-default rounded-0 mt-md-2">
                Join Now
              </a>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <div className="ol_shape5">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape5.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape6">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape6.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape7">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img
                data-parallax='{"x": 20, "smoothness": 20}'
                src="assets/images/shape7.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
