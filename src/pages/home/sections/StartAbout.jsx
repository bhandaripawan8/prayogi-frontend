const StartAbout = () => {
  return (
    <>
      <section className="bg_gray">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="heading_s1">
                <span className="sub_heading">Welcome to Dhyana</span>
                <h2>Better Life With Perfect Body</h2>
              </div>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                elit ncididunt labore et dolore magna aliqua enim.{" "}
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <a href="#" className="btn btn-default rounded-0">
                Read More
              </a>
            </div>
            <div className="col-md-6">
              <div
                className="about_img animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <img
                  data-parallax='{"y": -30, "smoothness": 20}'
                  src="assets/images/about_img.png"
                  alt="about_img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <div className="ol_shape1">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape1.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape2">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape2.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape3">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape3.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape4">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape4.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartAbout;
