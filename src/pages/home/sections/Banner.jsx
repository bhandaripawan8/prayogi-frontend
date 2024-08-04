import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <section className="banner_slider banner_slide_half p-0">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active bg_light_pink">
              <div className="banner_slide_content">
                <div className="container">
                  <div className="row justify-content-end align-items-center">
                    <div className="col-xl-6 col-md-5">
                      <div className="banner_img text-center">
                        <div
                          className="animation"
                          data-animation="fadeInLeft"
                          data-animation-delay="0.5s"
                        >
                          <img
                            data-parallax='{"y": -30, "smoothness": 20}'
                            src="/assets/images/banner_img1.png"
                            alt="image"
                          />
                        </div>
                        <div className="circle_bg1">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-7">
                      <div
                        className="banner_content animation"
                        data-animation="zoomIn"
                        data-animation-delay="0.4s"
                        data-parallax='{"y": 30, "smoothness": 10}'
                      >
                        <h2
                          className="animation"
                          data-animation="fadeInDown"
                          data-animation-delay="0.5s"
                        >
                          {" "}
                          Welcome to Prayogi Yoga
                        </h2>
                        <p
                          className="animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          Yoga has always been something more, than just a
                          workout routine. It&apos;s always been more of a
                          philosophy, a lifestyle for a mind & body balance.{" "}
                        </p>
                        <Link
                          className="btn btn-default rounded-0 animation"
                          to="/about"
                          data-animation="fadeInUp"
                          data-animation-delay="0.7s"
                        >
                          Learn More
                        </Link>
                        <Link
                          className="btn btn-white rounded-0 animation"
                          to="/contact"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner_shape">
                <div className="shape1">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img src="/assets/images/slider_pattern1.png" alt="image" />
                  </div>
                </div>
                <div className="shape2">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img src="/assets/images/slider_pattern2.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item bg_light_yellow">
              <div className="banner_slide_content">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5">
                      <div className="banner_img2 text-center">
                        <div
                          className="animation border_img"
                          data-animation="fadeInRight"
                          data-animation-delay="0.5s"
                        >
                          <img
                            data-parallax='{"y": -30, "smoothness": 20}'
                            src="assets/images/banner_img2.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-7 order-md-first">
                      <div
                        className="banner_content animation"
                        data-animation="fadeIn"
                        data-animation-delay="0.4s"
                        data-parallax='{"y": 30, "smoothness": 10}'
                      >
                        <h2
                          className="animation"
                          data-animation="fadeInDown"
                          data-animation-delay="0.5s"
                        >
                          Find lifestyle to the yoga{" "}
                        </h2>
                        <p
                          className="animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          Through and through we were trying to make our Yoga
                          studio a peaceful, meditational place of tranquility,
                          which according to our ever-growing list of attendees
                          we&apos;ve succeeded at.
                        </p>
                        <Link
                          className="btn btn-default rounded-0 animation"
                          to="/about"
                          data-animation="fadeInUp"
                          data-animation-delay="0.7s"
                        >
                          Learn More
                        </Link>
                        <Link
                          className="btn btn-white rounded-0 animation"
                          to="/contact"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner_shape">
                <div className="shape3">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img src="assets/images/slider_pattern3.png" alt="image" />
                  </div>
                </div>
                <div className="shape4">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img src="assets/images/slider_pattern4.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item bg_light_gold">
              <div className="banner_slide_content">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5">
                      <div className="banner_img3 text-center">
                        <div
                          className="animation"
                          data-animation="fadeInRight"
                          data-animation-delay="0.5s"
                        >
                          <img
                            data-parallax='{"y": -30, "smoothness": 20}'
                            src="assets/images/banner_img3.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-7 order-md-first">
                      <div
                        className="banner_content animation"
                        data-animation="fadeIn"
                        data-animation-delay="0.4s"
                        data-parallax='{"y": 30, "smoothness": 10}'
                      >
                        <h2
                          className="animation"
                          data-animation="fadeInDown"
                          data-animation-delay="0.5s"
                        >
                          Yoga Studio for Everyone
                        </h2>
                        <p
                          className="animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          Our Yoga studio has become one of the most popular
                          yoga venues in USA. It is time to go beyond your
                          limits and discover your passion.{" "}
                        </p>
                        <Link
                          className="btn btn-default rounded-0 animation"
                          to="/about"
                          data-animation="fadeInUp"
                          data-animation-delay="0.7s"
                        >
                          Learn More
                        </Link>
                        <Link
                          className="btn btn-white rounded-0 animation"
                          to="/contact"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner_shape">
                <div className="shape5">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img src="assets/images/slider_pattern5.png" alt="image" />
                  </div>
                </div>
                <div className="shape6">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img
                      data-parallax='{"y": 30, "smoothness": 20}'
                      src="assets/images/slider_pattern6.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="shape7">
                  <div
                    className="animation"
                    data-animation="fadeInLeft"
                    data-animation-delay="0.5s"
                  >
                    <img
                      data-parallax='{"y": -30, "smoothness": 20}'
                      src="assets/images/slider_pattern7.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_nav">
            <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <i className="ion-chevron-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <i className="ion-chevron-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
