import Breadcumb from "../../components/Breadcumb";
import StartSectionFaq from "./sections/StartSectionFaq";

const Faq = () => {
  return (
    <>
      <Breadcumb
        title="Frequently Ask Questions"
        subtitle1="Home"
        route1="/"
        subtitle2="FAQ"
        img=""
      />

      <StartSectionFaq />
    </>
  );
};

export default Faq;
