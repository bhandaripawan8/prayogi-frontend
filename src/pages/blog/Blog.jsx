import { useEffect } from "react";
import AllBlog from "./sections/AllBlog";
import BlogBreadCumb from "./sections/BlogBreadCumb";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogBreadCumb />

      <AllBlog />
    </>
  );
};

export default Blog;
