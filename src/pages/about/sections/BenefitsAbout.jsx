const BenefitsAbout = () => {
  return (
    <>
      <section className="bg_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8 col-md-10 text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="heading_s1">
                <span className="sub_heading">What we do</span>
                <h2>Essentials for everyday Yoga</h2>
              </div>
              <p>
                Contrary to popular belief Lorem is not simply random text. It
                has roots in adipiscing ncididunt piece of classical literature
              </p>
              <div className="small_divider clearfix"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="icon_box box_shadow4 icon_box_style2 animation"
                data-animation="fadeInRight"
                data-animation-delay="0.2s"
              >
                <div className="box_icon">
                  <i className="flaticon-strong-body"></i>
                </div>
                <div className="intro_desc">
                  <h5>Strong Body life</h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur blandit magna
                    adipiscing elit ncididunt labore et dolore magna aliqua
                    enim.{" "}
                  </p>
                </div>
              </div>
              <div
                className="icon_box box_shadow4 icon_box_style2 animation"
                data-animation="fadeInRight"
                data-animation-delay="0.3s"
              >
                <div className="box_icon">
                  <i className="flaticon-flexibility"></i>
                </div>
                <div className="intro_desc">
                  <h5>increased flexibility</h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur blandit magna
                    adipiscing elit ncididunt labore et dolore magna aliqua
                    enim.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-last">
              <div
                className="icon_box box_shadow4 icon_box_style2 animation"
                data-animation="fadeInLeft"
                data-animation-delay="0.2s"
              >
                <div className="box_icon">
                  <i className="flaticon-healthy-lifestyle"></i>
                </div>
                <div className="intro_desc">
                  <h5>healthy lifestyle</h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur blandit magna
                    adipiscing elit ncididunt labore et dolore magna aliqua
                    enim.{" "}
                  </p>
                </div>
              </div>
              <div
                className="icon_box box_shadow4 icon_box_style2 animation"
                data-animation="fadeInLeft"
                data-animation-delay="0.3s"
              >
                <div className="box_icon">
                  <i className="flaticon-drops-blood"></i>
                </div>
                <div className="intro_desc">
                  <h5>Drops blood pressure</h5>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur blandit magna
                    adipiscing elit ncididunt labore et dolore magna aliqua
                    enim.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="text-center benifits_bg animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <img src="assets/images/benifits_img.png" alt="benifits_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsAbout;
