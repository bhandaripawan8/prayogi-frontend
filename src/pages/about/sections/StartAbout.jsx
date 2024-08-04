const StartAbout = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <div className="video_box overlay_bg_30 mb-3 mb-sm-4 mb-md-0">
                <img src="/assets/images/about_video.jpg" alt="about_img11" />
                <a
                  href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  className="video_popup video_play"
                >
                  <span className="ripple">
                    <i className="ion-play"></i>
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-md-6 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.3s"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default StartAbout;
