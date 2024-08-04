const CommingSoon = () => {
  return (
    <>
      <section
        className="background_bg full_screen p-0 my-5"
        data-img-src="/assets/images/comming_soon_bg.jpg"
      >
        <div className="cs_content_box">
          <div className="container">
            <div className="row justify-content-center align-content-center">
              <div className="col-lg-7 col-md-8 text-center">
                <div className="padding_eight_all overlay_bg_90">
                  <div className="logo_wrap">
                    <a
                      href="index.html"
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <img src="assets/images/logo_white.png" alt="logo" />
                    </a>
                  </div>
                  <div className="heading_s1 heading_light">
                    <h1>Coming Soon</h1>
                  </div>
                  <h5
                    className="animation text-white font_style1"
                    data-animation="fadeInUp"
                    data-animation-delay="0.3s"
                  >
                    Our website is under Maintenance, We&apos;ll be back
                    shortly.
                  </h5>
                  <div
                    className="countdown_time countdown_white animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                    data-time="2020/05/08 00:00:00"
                  ></div>
                  <div
                    className="newsletter_form2 mb-4 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.05s"
                  >
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        required=""
                        placeholder="Enter Email Address"
                      />
                      <button
                        type="submit"
                        title="Subscribe"
                        className="btn btn-default btn-radius"
                        name="submit"
                        value="Submit"
                      >
                        Notify Me
                      </button>
                    </form>
                  </div>
                  <div
                    className="social_white text-center animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.6s"
                  >
                    <ul className="list_none social_icons border_social rounded_social">
                      <li>
                        <a href="#" className="sc_facebook">
                          <i className="ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_twitter">
                          <i className="ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_gplus">
                          <i className="ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sc_instagram">
                          <i className="ion-social-instagram-outline"></i>
                        </a>
                      </li>
                    </ul>
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

export default CommingSoon;
