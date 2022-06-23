import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../components/index";
import {
  Apple,
  BlockchainIcon,
  BlockchainIconWhite,
  bannerImg,
  bannerImg2,
  bannerBackgroundImg,
  lap1,
  lap2,
  lap3,
  lap4,
  pluton,
  character,
  Android,
  Flutter,
  Ionic,
  Reactnative,
  Kotlin,
  Swift,
} from "../../assets/images/index";

function Home() {
  return (
    <div id="home">
      {/* ==============================section-banner========================== */}
      <section id="banner">
        <Header />
        <div className="main-banner">
          <div className="banner-container">
            <div className="row">
              <div className="col-md-6">
                <div className="main-banner-content">
                  <div className="content">
                    <h2>One of the Top</h2>
                    <h1>Blockchain</h1>
                    <h2>Company at your disposal</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="main-banner-image">
                  <div className="image text-center">
                    <img
                      src={bannerBackgroundImg}
                      alt="banner-background-image"
                      className="banner-background-img"
                    />
                    <img
                      src={bannerImg}
                      alt="banner-image"
                      className="banner-img"
                    />
                  </div>
                </div>
              </div>
              <div className="banner-btn">
                <button className="btn btn-primary ">Get Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============================section-about========================== */}
      <section id="home-about">
        <div className="main">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <div className="straight-line"></div>
                <span className="ellipse"></span>
              </div>

              <div className="main-about text-center">
                <div className="heading">
                  <h6>About</h6>
                  <h1>Providing Assistance with Excellence!</h1>
                </div>

                <div className="para">
                  <p>
                    Pluton’s establishment was laid in 2018. Our experience
                    started determined to utilize state-of-the-art innovation to{" "}
                    <br />
                    carry transparency and trustworthiness to organization
                    processes.
                  </p>{" "}
                  <p>
                    {" "}
                    Pluton’s group was created as extra innovative aficionados
                    joined the organization. We have faith in framing <br />
                    associations as opposed to clients to interface our vision
                    with theirs and pursue a shared objective.
                  </p>{" "}
                  <p>
                    With capability, imagination, and advancement, we fathom
                    your vision and assist you with transforming it into the{" "}
                    <br />
                    real world by coordinating innovation into corporate cycles
                    and upgrading and scaling specialized items. We desire{" "}
                    <br /> to increment dependence.
                  </p>{" "}
                  <p>
                    Pluton is one of the most mind-blowing innovative
                    administrations suppliers across the globe. We accept to use
                    of <br /> the best mechanical answers for resolving your
                    concerns. You can entrust Pluton Limited with your dreams,
                    as our <br />
                    group is talented and experienced and endeavors to give
                    flawlessness. We’ve joined forces with the best to carry out{" "}
                    <br />
                    cutting edge innovations to our clients.{" "}
                  </p>
                  <p>
                    We have obliged a few organizations in web and application
                    improvement, Games advancement, NFTs, Blockchain <br /> and
                    ICO, and so forth whether it is a CMS Web plan and Software
                    improvement or custom PHP advancement, <br /> WordPress
                    improvement or web-based business web improvement, SEO or
                    SMM, Android App improvement, or iOS <br /> application
                    advancement, or it is a coin and NFTs by utilizing Ethereum
                    or Solana. We have you covered!
                  </p>
                </div>

                <div className="about-btn">
                  <button className="btn home-about-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============================section-portfolio========================== */}
      <section id="home-portfolio" className="home-portfolio">
        <div className="main">
          <div className="banner-container">
            <div className="sec-padding">
              <div className="main-portfolio">
                <div className="row">
                  <div className="col-md-3 d-flex flex-column justify-content-evenly">
                    <div className="tabbing-link">
                      <div className="heading">
                        <h1>
                          Our <br /> Featured <br /> Portfolio
                        </h1>
                        <span className="underline"></span>
                      </div>
                      <div className="links">
                        <ul>
                          <li>
                            <a href="#">All</a>
                          </li>
                          <li>
                            <a href="#">Static Website</a>
                          </li>
                          <li>
                            <a href="#">Responsive Website</a>
                          </li>
                          <li>
                            <a href="#">Custom Website</a>
                          </li>
                          <li>
                            <a href="#">Game</a>
                          </li>
                          <li>
                            <a href="#">Video</a>
                          </li>
                          <li>
                            <a href="#">Logo Design</a>
                          </li>
                          <li>
                            <a href="#">Character Design</a>
                          </li>
                          <li>
                            <a href="#">Case Studyes</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="tabbing-img">
                      <div className="row gx-0">
                        <div className="col-md-5 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap1}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-5  m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap2}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-2 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={pluton}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>

                        <div className="col-md-2 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={character}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap3}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-md-5 m-0 p-0">
                          <div className="tabbing-card">
                            <img
                              src={lap4}
                              alt="portfolio-images"
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="more-work-btn d-flex">
                      <button className="btn btn-primary ">
                        <a href="#">More work</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================section-services========================== */}
      <section id="home-services">
        <div className="main">
          <div className="container">
            <div className="sec-padding">
              <div className="line">
                <div className="straight-line"></div>
                <span className="ellipse"></span>
              </div>

              <div className="main-about main-services text-center">
                <div className="heading">
                  <h6>Services</h6>
                  <h1>Our Awesome Services</h1>
                  <span className="underline"></span>
                </div>

                <div className="para">
                  <p>
                    Pluton’s establishment was laid in 2018. Our experience
                    started determined to utilize state-of-the-art innovation to{" "}
                    <br />
                    carry transparency and trustworthiness to organization
                    processes.
                  </p>{" "}
                </div>

                <div className="main-services-card">
                  <div className="row gx-0">
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Block chain Development</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Create and Launch your NFTs and ICOs with us, and
                            compete the world by following the latest
                            technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Mobile Application Development</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            We are the App Makers! Our expert mobile app
                            developers strive to provide you the best user
                            experience, custom android and iOS apps .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Ecommerce Web Developmen</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Hire our SEO specialists to assist you with on-page
                            SEO, off-page SEO, Technical SEO, and Local SEO
                            services to help you rank better and boost your
                            sales.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Website Maintenance & Support</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Hire our SEO specialists to assist you with on-page
                            SEO, off-page SEO, Technical SEO, and Local SEO
                            services to help you rank better and boost your
                            sales
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Creative Graphic Designs</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            The best digital designers team up together to bring
                            you creative, beautiful and engaging designs. We
                            create excellence!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xlg-4 col-lg-4 col-md-6 col-sm-6 col-xsm-12">
                      <div className="card">
                        <div className="service-card-image">
                          <img
                            src={BlockchainIcon}
                            className="black"
                            alt="BlockChain"
                          />
                          <img
                            src={BlockchainIconWhite}
                            className="white"
                            alt="BlockChain"
                          />
                        </div>
                        <div className="service-card-heading">
                          <h2>Custom Software Development</h2>
                        </div>
                        <div className="service-card-para">
                          <p>
                            Our custom software development services aim to
                            design, engineer, deploy, and support various types
                            of software
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================section-portfolio========================== */}
      <section id="home-technologies" className="home-portfolio">
        <div className="main">
          <div className="banner-container">
            <div className="sec-padding">
              <div className="main-portfolio">
                <div className="row">
                  <div className="col-md-3 d-flex flex-column justify-content-evenly">
                    <div className="tabbing-link">
                      <div className="heading">
                        <h1>
                          Technologies
                          <br /> we work <br />
                          with
                        </h1>

                        <span className="underline"></span>
                      </div>
                      <div className="links">
                        <ul>
                          <li>
                            <a href="#">Mobile</a>
                          </li>
                          <li>
                            <a href="#">Front end</a>
                          </li>
                          <li>
                            <a href="#">Data base</a>
                          </li>
                          <li>
                            <a href="#">Backend</a>
                          </li>
                          <li>
                            <a href="#">CMS</a>
                          </li>
                          <li>
                            <a href="#">Infra & develop</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 d-flex align-items-sm-end">
                    <div className="tech-icons-main">
                      <div className="row">
                        <div className="col-md-12 pb-3">
                          <div className="main-technical-icons">
                            <div className="tech-icons">
                              <img src={Apple} alt="" />
                              <h4>IOS</h4>
                            </div>
                            <div className="tech-icons">
                              <img src={Android} alt="" />
                              <h4>Android</h4>
                            </div>
                            <div className="tech-icons">
                              <img src={Flutter} alt="" />
                              <h4>Flutter</h4>
                            </div>
                            <div className="tech-icons">
                              <img src={Reactnative} alt="" />
                              <h4>React Native</h4>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="main-technical-icons justify-content-evenly">
                            <div className="tech-icons">
                              <img src={Ionic} alt="" />
                              <h4>Ionic</h4>
                            </div>
                            <div className="tech-icons">
                              <img src={Kotlin} alt="" />
                              <h4>Kotlin</h4>
                            </div>
                            <div className="tech-icons">
                              <img src={Swift} alt="" />
                              <h4>Swift</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;