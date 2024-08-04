import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBgColor(scrollY < 100 ? "transparent" : "white");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`header_wrap fixed-top dark_skin main_menu_uppercase main_menu_weight_600 ${
          bgColor == "transparent" ? "transparent_header" : ""
        }`}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="index.html">
              <img
                className="logo_light"
                src="assets/images/logo_white.png"
                alt="logo"
              />
              <img
                className="logo_dark"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
              <img
                className="logo_default"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="ion-android-menu"></span>{" "}
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/blogs">
                    Training
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav attr-nav align-items-center">
              <li>
                <a className="nav-link search_trigger">
                  <i className="ion-ios-search-strong"></i>
                </a>
                <div className="search-overlay">
                  <div className="search_wrap">
                    <form>
                      <div className="rounded_input">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control"
                          id="search_input"
                        />
                      </div>
                      <button type="submit" className="search_icon">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </li>
              <a href="#" className="btn btn-default btn-xs">
                Sign in
              </a>

              {/* <li className="dropdown cart_wrap">
                <a className="nav-link" href="#" data-toggle="dropdown">
                  <i className="ion-android-cart"></i>
                  <span className="cart_count">2</span>
                </a>
                <div className="cart_box dropdown-menu dropdown-menu-right">
                  <ul className="cart_list">
                    <li>
                      <a href="#" className="item_remove">
                        <i className="ion-close"></i>
                      </a>
                      <a href="#">
                        <img
                          src="/assets/images/cart_thamb1.jpg"
                          alt="cart_thumb1"
                        />
                        yoga mat For Exercises
                      </a>
                      <span className="cart_quantity">
                        {" "}
                        1 x{" "}
                        <span className="cart_amount">
                          {" "}
                          <span className="price_symbole">$</span>23.00
                        </span>
                      </span>
                    </li>
                    <li>
                      <a href="#" className="item_remove">
                        <i className="ion-close"></i>
                      </a>
                      <a href="#">
                        <img
                          src="/assets/images/cart_thamb2.jpg"
                          alt="cart_thumb2"
                        />
                        Running Shoes
                      </a>
                      <span className="cart_quantity">
                        {" "}
                        1 x{" "}
                        <span className="cart_amount">
                          {" "}
                          <span className="price_symbole">$</span>45.00
                        </span>
                      </span>
                    </li>
                  </ul>
                  <div className="cart_footer">
                    <p className="cart_total">
                      Total:{" "}
                      <span className="cart_amount">
                        {" "}
                        <span className="price_symbole">$</span>68.00
                      </span>
                    </p>
                    <p className="cart_buttons">
                      <a
                        href="cart.html"
                        className="btn btn-default rounded-0 view-cart"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-dark rounded-0 checkout"
                      >
                        Checkout
                      </a>
                    </p>
                  </div>
                </div>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
