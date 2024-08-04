import { useEffect } from "react";
import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import CallToAction from "./sections/CallToAction";
// eslint-disable-next-line no-unused-vars
import ClassTimeline from "./sections/ClassTimeline";
import Pricing from "./sections/Pricing";
import StartAbout from "./sections/StartAbout";
import StartClass from "./sections/StartClass";
import Testimonial from "./sections/Testimonial";
import Trainer from "./sections/Trainer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />

      <Benefits />

      <StartAbout />

      <StartClass />

      <CallToAction />

      {/* <ClassTimeline /> */}

      <Pricing />

      <Testimonial />

      <Trainer />
    </>
  );
};

export default Home;
