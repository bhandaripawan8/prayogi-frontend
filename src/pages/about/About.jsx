import { useEffect } from "react";
import Breadcumb from "../../components/Breadcumb";
import BenefitsAbout from "./sections/BenefitsAbout";
import CounterAbout from "./sections/CounterAbout";
import StartAbout from "./sections/StartAbout";
import YogaTeacher from "./sections/YogaTeacher";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcumb
        title="About Us"
        subtitle1="Home"
        route1="/"
        subtitle2="About"
        img=""
      />

      <StartAbout />

      <BenefitsAbout />

      <CounterAbout />

      <YogaTeacher />
    </>
  );
};

export default About;
