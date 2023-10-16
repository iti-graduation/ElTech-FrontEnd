import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className="footer-01">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <aside className="widget about-widget">
                <div className="foo-logo">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus er sit voluptatem
                  accusantium dolore.ea commo do consequat. Duis aute irure
                  dolor in re prehenderit in.
                </p>
                <div className="ab-social">
                  <a href="#">
                    <i className="twi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="twi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="twi-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="twi-linkedin"></i>
                  </a>
                </div>
              </aside>
            </div>
            <div className="col-lg-2 col-md-4 col-custome-1">
              <aside className="widget">
                <h3 className="widget-title">Useful Links</h3>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-2 col-md-4 col-custome-2">
              <aside className="widget">
                <h3 className="widget-title">Account</h3>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Log in</a>
                  </li>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                  <li>
                    <a href="#">Purchases</a>
                  </li>
                  <li>
                    <a href="#">Shipping Address</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-2 col-md-6 col-custome-3">
              <aside className="widget contact-widget">
                <h3 className="widget-title">Contact & Address</h3>
                <p>123 Street, Gandy Street, Syracuse New York - 13221.</p>
                <p>Phone: +1 315-234-3812 Email: info@goru.com</p>
              </aside>
            </div>
            <div className="col-lg-3 col-md-6 col-custome-4">
              <aside className="widget">
                <h3 className="widget-title">Subscribe</h3>
                <form className="subscribe-form" action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="admin@mail.com"
                  />
                  <button type="submit">
                    Subscribe<i className="twi-long-arrow-alt-right"></i>
                  </button>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Ened */}

      {/* Coryight Start */}
      <section className="copyright-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <ul className="menu-link">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>{" "}
                |
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="copys-text">
                <i className="twi-copyright"></i>Copyright WpSmasher 2020 | All
                Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Coryight End */}

      {/* Back To Top */}
      <a
        href="#"
        id="backtotop"
        style={{
          bottom: "50px",
          opacity: 1,
          visibility: "visible",
        }}
      >
        <i class="twi-angle-double-up2"></i>
      </a>
    </>
  );
};

export default Footer;
