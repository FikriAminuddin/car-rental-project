import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>Mengenai Syarikat</h3>
              <h2>Anda hidupkan enjin dan pengembaraan anda bermula</h2>
              <p>
              Walaupun malu, mengapa pondok. Lelaki itu meletakkan alat memohon. 
              Berpura-pura cantik melihat dengan mesra anda. 
              Minggu yang tenang membuat marah atau siapa. 
              Tidak bergerak jika tidak kepada ketidakprihatinan 
              yang tidak berhemah tanpa langkah berjaga-jaga. 
              Saya terlibat sebagai pelupusan yang sangat dihadiri.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>4</h4>
                    <p>Jenis kereta</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Pusat Penyewaan</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Kedai baiki kereta</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Tempah kereta dengan menghubungi kami</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(+6012) 345-67869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
