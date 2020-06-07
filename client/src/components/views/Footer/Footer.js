import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./Footer.css";

function Footer(props) {
  return (
    <div>
      <section id="social-media">
        <Slide bottom>
          <div className="container text-center animate-bottom">
            <p>FIND US ON SOCIAL MEDIA</p>
            <div className="social-icons">
              <a href="#">
                <img src="/images/social/facebook.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/social/Iinstagram.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/social/snapchat.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/social/whatsapp.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/social/twitter.png" alt="" />
              </a>
              <a href="#">
                <img src="/images/social/linkedin.png" alt="" />
              </a>
            </div>
          </div>
        </Slide>
      </section>

      <section id="footer">
        
        {props.mode === "dashboard" ? (
          <img src="images/wave7.png" className="footer-img" alt="" />
        ) : (
          <img src="images/wave5.png" className="footer-img" alt="" />
        )}

        <div className="container-fluid footer">
          <div className="row">
            <Fade left>
              <div className="col-md-4 footer-box">
                <h2>PicLava</h2>
                <p>
                  Get your desire photos easily and also you can make your
                  career by selling photos
                </p>
              </div>
            </Fade>

            <Fade bottom>
              <div className="col-md-4 footer-box">
                <p>
                  <b>CONTACT US</b>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  2098 Boggess Street, Donnelsville
                </p>
                <p>
                  <i className="fas fa-phone" />
                  +1(207) 352-2807
                </p>
                <p>
                  <i className="far fa-envelope" />
                  admin@piclava.com
                </p>
              </div>
            </Fade>

            <Fade right>
              <div className="col-md-4 footer-box">
                <p>
                  <b>SUBSCRIBE NEWSLETTER</b>
                </p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email..."
                />
                <button type="button" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </Fade>
          </div>
          <p className="copyright">
            Developed by <a href="https://sabbirrifat.com">Sabbir Rifat</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
