const StartContact = () => {
  return (
    <>
      <section className="mt-5 ">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="heading_s2">
                <span className="sub_heading">Contact Us</span>
                <h3>Get In touch</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus blandit massa enim. Nullam id varius nunc id varius
                nunc.
              </p>
              <ul className="contact_info contact_info_style2 list_none">
                <li>
                  <span className="ti-mobile"></span>
                  <p>+123 456 7890</p>
                </li>
                <li>
                  <span className="ti-email"></span>
                  <a href="mailto:info@yourmail.com">info@yourmail.com</a>
                </li>
                <li>
                  <span className="ti-location-pin"></span>
                  <address>256 Mohra Rd, North London, UK</address>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-8 col-md-6 mt-4 mt-lg-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.3s"
            >
              <div className="field_form icon_form">
                <form method="post" name="enq">
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <div className="form-input">
                        <span>
                          <i className="ti-user"></i>
                        </span>
                        <input
                          required="required"
                          placeholder="Enter Name *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <div className="form-input">
                        <span>
                          <i className="ti-email"></i>
                        </span>
                        <input
                          required="required"
                          placeholder="Enter Email *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="form-group col-12">
                      <div className="form-input">
                        <span>
                          <i className="ti-folder"></i>
                        </span>
                        <input
                          placeholder="Enter Subject"
                          id="subject"
                          className="form-control"
                          name="subject"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group col-lg-12">
                      <div className="form-input">
                        <span>
                          <i className="ti-comments"></i>
                        </span>
                        <textarea
                          required="required"
                          placeholder="Message *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        title="Submit Your Message!"
                        className="btn btn-default"
                        id="submitButton"
                        name="submit"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-lg-12 text-center">
                      <div
                        id="alert-msg"
                        className="alert-msg text-center"
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartContact;
