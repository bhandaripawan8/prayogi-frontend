import { useEffect } from "react";
import BreadcumbContact from "./sections/BreadcumbContact";
import ContactMap from "./sections/ContactMap";
import StartContact from "./sections/StartContact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BreadcumbContact />

      <StartContact />

      <ContactMap />
    </>
  );
};

export default Contact;
