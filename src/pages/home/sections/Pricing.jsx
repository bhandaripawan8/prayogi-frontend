const Pricing = () => {
  return (
    <>
      <section className="bg_light_yellow pb_70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-8 col-md-10 text-center animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="heading_s1">
                <span className="sub_heading">Choose Our Package</span>
                <h2>Yoga Pricing Plan</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                elit ncididunt labore et dolore magna aliqua enim.{" "}
              </p>
              <div className="small_divider clearfix"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="pricing_box pricing_style1 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <div className="pr_title_wrap border-bottom">
                  <h4 className="pr_title">regular member</h4>
                  <div className="price_tage">
                    <h2>
                      $49<span>/ Month</span>
                    </h2>
                  </div>
                </div>
                <div className="pr_content pt-3">
                  <ul className="list_none pr_list">
                    <li>Basic Options</li>
                    <li>Full Access</li>
                    <li>Customers Support</li>
                    <li>Free Updates</li>
                    <li>Advanced Options</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="#" className="btn btn-dark rounded-0">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="pricing_box pricing_style1 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.3s"
              >
                <div className="pricing_ribbon">Popular</div>
                <div className="pr_title_wrap bg_default text_white">
                  <h4 className="pr_title">V.i.p Member</h4>
                  <div className="price_tage">
                    <h2>
                      $99<span>/ Month</span>
                    </h2>
                  </div>
                </div>
                <div className="pr_content pt-3">
                  <ul className="list_none pr_list">
                    <li>Standard Options</li>
                    <li>Full Access</li>
                    <li>Customers Support</li>
                    <li>Free Updates</li>
                    <li>Advanced Options</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="#" className="btn btn-default rounded-0">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="pricing_box pricing_style1 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="pr_title_wrap border-bottom">
                  <h4 className="pr_title">Premium Member</h4>
                  <div className="price_tage">
                    <h2>
                      $199<span>/ Month</span>
                    </h2>
                  </div>
                </div>
                <div className="pr_content pt-3">
                  <ul className="list_none pr_list">
                    <li>Unlimited Options</li>
                    <li>Full Access</li>
                    <li>Customers Support</li>
                    <li>Free Updates</li>
                    <li>Advanced Options</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="#" className="btn btn-dark rounded-0">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape_img">
          <div className="ol_shape8">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape8.png" alt="image" />
            </div>
          </div>
          <div className="ol_shape9">
            <div
              className="animation"
              data-animation="fadeInLeft"
              data-animation-delay="0.5s"
            >
              <img src="assets/images/shape9.png" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
