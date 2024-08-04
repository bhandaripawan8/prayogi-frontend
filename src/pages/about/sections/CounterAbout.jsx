const CounterAbout = () => {
  return (
    <>
      <section
        className="overlay_bg_70 parallax_bg"
        data-parallax-bg-image="/assets/images/counter_bg.jpg"
        style={{ backgroundImage: "url(/assets/images/counter_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="box_counter counter_white text-center">
                <i className="flaticon-trainers"></i>
                <h3 className="counter_text">
                  <span className="counter">18</span>+
                </h3>
                <p>Our Trainers</p>
              </div>
            </div>
            <div
              className="col-md-3 col-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.3s"
            >
              <div className="box_counter counter_white text-center">
                <i className="flaticon-trophy"></i>
                <h3 className="counter_text">
                  <span className="counter">15</span>+
                </h3>
                <p>Win Awards</p>
              </div>
            </div>
            <div
              className="col-md-3 col-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.4s"
            >
              <div className="box_counter counter_white text-center">
                <i className="flaticon-users"></i>
                <h3 className="counter_text">
                  <span className="counter">1800</span>+
                </h3>
                <p>Happy Member</p>
              </div>
            </div>
            <div
              className="col-md-3 col-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.5s"
            >
              <div className="box_counter counter_white text-center">
                <i className="flaticon-classes"></i>
                <h3 className="counter_text">
                  <span className="counter">45</span>+
                </h3>
                <p>Monthly Classes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterAbout;
