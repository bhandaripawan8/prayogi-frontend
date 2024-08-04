const ClassTimeline = () => {
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
                <span className="sub_heading">Choose Your timing Schedule</span>
                <h2>Our Classes Timetable</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing
                elit ncididunt labore et dolore magna aliqua enim.{" "}
              </p>
              <div className="xs_divider clearfix"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <ul
                className="classes_filter animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <li>
                  <a href="#" className="current" data-filter="all">
                    All Classes
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="hatha">
                    Hatha
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="kundalini">
                    Kundalini
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="pilates">
                    Pilates
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="alignment">
                    Alignment
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="yoga-dance">
                    Yoga Dance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="schedule_table box_shadow1 table-responsive animation"
                data-animation="fadeInUp"
                data-animation-delay="0.3s"
              >
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <td>Time</td>
                      <td>Monday</td>
                      <td>Tuesday</td>
                      <td>Wednesday</td>
                      <td>Thursday</td>
                      <td>Friday</td>
                      <td>Saturday</td>
                      <td>Sunday</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9:00AM</td>
                      <td>
                        <div data-classes-schedule="hatha">
                          <div className="classes_title">
                            <h6>Hatha Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>9:00 - 10:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div data-classes-schedule="kundalini">
                          <div className="classes_title">
                            <h6>Kundalini Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>9:00 - 10:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="pilates">
                          <div className="classes_title">
                            <h6>Pilates Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>9:00 - 10:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Regina</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="alignment">
                          <div className="classes_title">
                            <h6>Alignment Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>9:00 - 10:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="pilates">
                          <div className="classes_title">
                            <h6>Pilates Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>9:00 - 10:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Regina</span>
                          </div>
                        </div>
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>10:00AM</td>
                      <td>
                        <div data-classes-schedule="pilates">
                          <div className="classes_title">
                            <h6>Pilates Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>10:00 - 11:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Regina</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="alignment">
                          <div className="classes_title">
                            <h6>Alignment Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>10:00 - 11:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="yoga-dance">
                          <div className="classes_title">
                            <h6>Yoga Dance</h6>
                          </div>
                          <div className="classes_timing">
                            <span>10:00 - 11:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div data-classes-schedule="kundalini">
                          <div className="classes_title">
                            <h6>Kundalini Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>10:00 - 11:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="hatha">
                          <div className="classes_title">
                            <h6>Hatha Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>10:00 - 11:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="yoga-dance">
                          <div className="classes_title">
                            <h6>Yoga Dance</h6>
                          </div>
                          <div className="classes_timing">
                            <span>10:00 - 11:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>11:00AM</td>
                      <td>
                        <div data-classes-schedule="hatha">
                          <div className="classes_title">
                            <h6>Hatha Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>11:00 - 12:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div data-classes-schedule="pilates">
                          <div className="classes_title">
                            <h6>Pilates Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>11:00 - 12:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Regina</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="alignment">
                          <div className="classes_title">
                            <h6>Alignment Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>11:00 - 12:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="yoga-dance">
                          <div className="classes_title">
                            <h6>Yoga Dance</h6>
                          </div>
                          <div className="classes_timing">
                            <span>11:00 - 12:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="kundalini">
                          <div className="classes_title">
                            <h6>Kundalini Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>11:00 - 12:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                      <td>&nbsp; </td>
                    </tr>
                    <tr>
                      <td>12:00AM</td>
                      <td>
                        <div data-classes-schedule="pilates">
                          <div className="classes_title">
                            <h6>Pilates Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>12:00 - 01:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Regina</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="kundalini">
                          <div className="classes_title">
                            <h6>Kundalini Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>12:00 - 01:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="hatha">
                          <div className="classes_title">
                            <h6>Hatha Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>12:00 - 01:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div data-classes-schedule="pilates">
                          <div className="classes_title">
                            <h6>Pilates Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>12:00 - 01:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Regina</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="alignment">
                          <div className="classes_title">
                            <h6>Alignment Yoga</h6>
                          </div>
                          <div className="classes_timing">
                            <span>12:00 - 01:00</span>
                          </div>
                          <div className="cl_trainer">
                            <span>Maria</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div data-classes-schedule="yoga-dance">
                          <div className="classes_title">
                            <h6>Yoga Dance</h6>
                          </div>
                          <div className="classes_timing">
                            <span>12:00 - 01:00</span>
                          </div>
                          <div className="cl_trainer ">
                            <span>Elena</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClassTimeline;
