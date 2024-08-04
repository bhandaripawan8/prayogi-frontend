import { useEffect } from "react";
import GalleryView from "./sections/GalleryView";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GalleryView />
    </>
  );
};

export default Gallery;
