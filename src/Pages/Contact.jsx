import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Perlu maklumat tambahan?</h2>
              <p>
              Seorang profesional pelbagai aspek yang 
              mahir dalam pelbagai bidang penyelidikan, 
              pembangunan serta pakar pembelajaran. Lebih 15 tahun pengalaman.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; (+6012) 345-67869
              </a>
              <a href="/">
                <IconMail /> &nbsp; carrental@carmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Pasir Mas, Malaysia
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Nama Penuh <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Fikri Aminuddin"'></input>

                <label>
                  E-mel <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                Beritahu kami mengenainya <b>*</b>
                </label>
                <textarea placeholder="Tulis disini.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Hantar Mesej
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
            <h2>Tempah kereta dengan menghubungi kami</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+6012) 345-6786</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
