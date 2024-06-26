import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";
import { IconChevronRight } from "@tabler/icons-react";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Mengapa Pilih Kami</h4>
                <h2>Tawaran terbaik yang anda pernah jumpa</h2>
                <p>
                Temui tawaran terbaik yang pernah anda jumpa dengan tawaran kami yang tidak dapat ditandingi. 
                Kami berusaha untuk memberikan nilai terbaik untuk wang anda, supaya anda boleh menikmati perkhidmatan 
                dan produk berkualiti tanpa menghancurkan belanjawan anda. 
                Tawaran kami direka untuk memberikan pengalaman penyewaan yang hebat, 
                jadi jangan lepaskan peluang anda untuk berjimat besar.
                </p>
                <a href="#home">
                Dapatkan Butiran &nbsp;
                  <IconChevronRight />
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Pandu Melintasi Negara</h4>
                    <p>
                    Bawa pengalaman memandu anda ke tahap yang lebih tinggi 
                    dengan kenderaan terbaik kami untuk pengembaraan melintasi negara.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Harga Termasuk Semua</h4>
                    <p>
                    Dapatkan segala-galanya dalam satu harga yang mudah 
                    dan telus dengan polisi harga termasuk semua kami.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tiada Caj Tersembunyi</h4>
                    <p>
                    Nikmati ketenangan fikiran dengan polisi tiada caj tersembunyi kami. 
                    Kami percaya pada penentuan harga yang telus dan jujur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
