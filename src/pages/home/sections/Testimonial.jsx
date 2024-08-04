const Testimonial = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8 col-md-10 text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="heading_s1">
                <span className="sub_heading">Testimonial</span>
                <h2>Our Client Say!</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
              <div className="xs_divider clearfix d-none d-md-block"></div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div
                className="testimonial_slider testimonial_style1 carousel_slider owl-carousel owl-theme"
                data-margin="15"
                data-loop="true"
                data-autoplay="true"
                data-responsive='{"0":{"items": "1"}, "768":{"items": "2"}, "1199":{"items": "3"}}'
              >
                <div className="testimonial_box">
                  <div className="testi_meta">
                    <div className="testimonial_img">
                      <img src="/assets/images/client_img1.jpg" alt="client" />
                    </div>
                    <div className="testi_user">
                      <h5>Merry Walter</h5>
                      <span>Web Designer</span>
                    </div>
                  </div>
                  <div className="testi_desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Phasellus blandit massa enim Nullam varius nunc.Lorem
                      ipsum doloramet consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testi_meta">
                    <div className="testimonial_img">
                      <img src="/assets/images/client_img2.jpg" alt="client" />
                    </div>
                    <div className="testi_user">
                      <h5>Elena Mark</h5>
                      <span>Web Designer</span>
                    </div>
                  </div>
                  <div className="testi_desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Phasellus blandit massa enim Nullam varius nunc.Lorem
                      ipsum doloramet consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testi_meta">
                    <div className="testimonial_img">
                      <img src="/assets/images/client_img3.jpg" alt="client" />
                    </div>
                    <div className="testi_user">
                      <h5>Calvin William</h5>
                      <span>Web Designer</span>
                    </div>
                  </div>
                  <div className="testi_desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Phasellus blandit massa enim Nullam varius nunc.Lorem
                      ipsum doloramet consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="testimonial_box">
                  <div className="testi_meta">
                    <div className="testimonial_img">
                      <img src="/assets/images/client_img4.jpg" alt="client" />
                    </div>
                    <div className="testi_user">
                      <h5>Maria Wolter</h5>
                      <span>Web Designer</span>
                    </div>
                  </div>
                  <div className="testi_desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Phasellus blandit massa enim Nullam varius nunc.Lorem
                      ipsum doloramet consectetur adipiscing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
