import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Ahmad Reedzuan", job: "Jurujual" },
    { img: Person2, name: "Muhammad Fikri Aminuddin", job: "Pemilik Perniagaan" },
    { img: Person3, name: "Syahir Hakim", job: "Jurugambar" },
    { img: Person4, name: "Harris Irman", job: "Penerangan Kereta" },
    { img: Person5, name: "Iman Farhan", job: "Mekanik" },
    { img: Person6, name: "Johan Uzair", job: "Pengurus" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;
