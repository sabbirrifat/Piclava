import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function Home() {
  return (
    <div>
      <section id="wrapper">
        <div className="hero container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Fade top>
                <h1>
                  Discover and Share the <br /> world's best photos
                </h1>
              </Fade>
              <Fade bottom>
                <p>
                  Get inspired with incredible photos from diverse styles and
                  genres around the world. We're not guided by fads—just great
                  photography.
                </p>
                <button className="button-link">
                  <a href="/register">Sign up</a>
                </button>
              </Fade>
            </div>
          </div>
        </div>
        <img src="/images/dashwave.png" alt="" />
      </section>
      <section id="services">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <h1 className="headLine"> What makes us different </h1>
          </div>
          <div className="row">
            <Fade left>
              <div className="services col-lg-4 animate-left">
                <img src="/images/leaf.svg" alt="" />
                <h2 className="subHeadLine">Grow as a photographer</h2>
                <p>
                  Get immediate exposure with your first upload. Our Pulse
                  algorithm surfaces new photographs and photographers, ensuring
                  your photos are seen by the community so you receive valuable
                  feedback on day one.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="services col-lg-4 animate-top">
                <img src="/images/career.svg" alt="" />
                <h2 className="subHeadLine">Build your career</h2>
                <p>
                  Present yourself as a professional. Get hired by displaying
                  your services, create a Directory listing, showcase the
                  workshops you're holding, and create Galleries to highlight
                  your work.
                </p>
              </div>
            </Fade>
            <Fade right>
              <div className="services col-lg-4 animate-right">
                <img src="/images/statistics.svg" alt="" />
                <h2 className="subHeadLine">See how you're performing</h2>
                <p>
                  With Statistics and Pulse you get valuable insights into how
                  your photos are performing and how you rank in comparison to
                  other photographers in the community.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section id="getTheApp">
        <div className="container-fluid">
          <div className="row getTheApp">
            <Fade bottom>
              <div className="col-lg-6 col-md-12 appText">
                <h1>Get the app</h1>
                <p>
                  Our app is in development and very soon it will realease so
                  until then stay with us.
                </p>
                <div className="storeLogo">
                  <img src="/images/appleStore.svg" alt="" />
                  <img src="/images/playStore.svg" alt="" />
                </div>
              </div>
            </Fade>
            <div className="col-lg-6 col-md-12 mobileMockBack">
              <img src="/images/mobilesMock.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <img className="appWave" src="/images/wave4.svg" alt="" />
      </section>
      <section id="editorChoice">
        <div className="container h-100">
          <div className="row h-100">
            <Fade top>
              <div className="col-lg-12 text-center my-auto">
                <img src="/images/badge.svg" className="img-fluid" alt="" />
                <h1>Editor's Choice</h1>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section id="ImageShow">
        <div className="row justify-content-center">
          <h2 className="headLine">POPULAR IMAGES</h2>
        </div>
        <Fade left>
          <div className="totalList">
            <ul className="list-unstyled gallery">
              <li>
                <a href="#">
                  <img src="/images/image01.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/image02.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/image03.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/image04.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/image05.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/image06.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </Fade>
        <div className="row justify-content-center btn-view-more">
          <a href="/login" className="btnColor">
            VIEW MORE
          </a>
        </div>
      </section>
      <section id="Prize">
        <div className="container h-100">
          <Fade top>
            <div className="row h-100">
              <div className="col-lg-12 text-center my-auto">
                <img src="/images/rocket.svg" className="img-fluid" alt="" />
                <h1>Quests</h1>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section id="Quest">
        <div className="container">
          <div className="row">
            <Slide left>
              <div className="col-lg-6">
                <img src="/images/cup.svg" className="cup" alt="" />
                <h1>
                  Win prizes and gain global <br /> exposure with Quests
                </h1>
                <p>
                  Creative challenges to help photographers test their skills,
                  get recognized for their work, and win exciting prizes.
                </p>
                <button className="btnColor button-link">
                  <a href="/login">View Quests</a>
                </button>
              </div>
            </Slide>
            <Slide right>
              <div className="col-lg-6">
                <img src="/images/imageside1.png" className="sideImg" alt="" />
              </div>
            </Slide>
          </div>
        </div>
      </section>
      <section id="Licensing">
        <div className="container h-100">
          <Fade top>
            <div className="row h-100">
              <div className="col-lg-12 text-center my-auto">
                <img src="/images/king.svg" className="img-fluid" alt="" />
                <h1>Licensing</h1>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section id="sellPhoto">
        <div className="container">
          <div className="row">
            <Slide left>
              <div className="col-lg-6">
                <img src="/images/imageside2.png" className="sideImg" alt="" />
              </div>
            </Slide>

            <Slide right>
              <div className="col-lg-6">
                <img src="/images/piggy.svg" className="piggy" alt="" />
                <h1>Get paid for your photos</h1>
                <p>
                  Don’t let your photos sit there gathering dust, like on other
                  platforms. Gain exposure and get paid for your work with 500px
                  Licensing. You'll earn 60% royalties (one of the industry's
                  highest rates) when you license your photos exclusively with
                  our global distribution partners.
                </p>
                <button className="btnColor button-link">
                  <a href="/login">Get Started Now</a>
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
