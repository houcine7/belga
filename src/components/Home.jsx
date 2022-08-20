import ReactRotatingText from "react-rotating-text";
import Fade from "react-reveal/Fade";

function Home({ mouse }) {
  return (
    <section
      className="hero d-flex flex-column justify-content-center align-items-center"
      id="home"
      onMouseEnter={mouse}
    >
      <div className="bg-overlay"></div>
      <Fade bottom>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text mt-5 text-center">
                <h6
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{
                    marginBottom: "15px",
                    letterSpacing: "0.5px",
                    fontSize: "x-large",
                  }}
                >
                  Les sportifs nous font confiance pour leur entraînement
                </h6>

                <img
                  src="./imgs/logoB.png"
                  style={{
                    width: "400px",
                    height: "240px",
                    zIndex: "-1",
                  }}
                />

                <h2
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontSize: "x-large",
                    height: "65px",
                  }}
                >
                  <ReactRotatingText
                    items={[
                      "Améliorez votre corps",
                      "Deviens enfin la meilleure version de toi même",
                      "Où un athlète devient champion",
                    ]}
                  />
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12 text-center">
              <a
                href="#feature"
                className="btn custom-btn mt-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Get started
              </a>

              <a
                href="#about"
                className="btn custom-btn bordered mt-3"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                learn more
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Home;
