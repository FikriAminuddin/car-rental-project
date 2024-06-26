import { IconQuote } from "@tabler/icons-react";
import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Disemak oleh Pengguna</h4>
              <h2>Testimoni Pengguna</h2>
              <p>
              Temui impak positif yang kami buat ke atas pengguna kami dengan membaca testimoni mereka. 
              Pengguna kami telah mengalami perkhidmatan dan hasil kami, dan mereka bersemangat untuk 
              berkongsi pengalaman positif mereka dengan anda.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                "Kami menyewa kereta dari laman web ini dan mengalami pengalaman yang menakjubkan! 
                Tempahan mudah dan kadar sewa sangat berpatutan."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Harris Irman</h4>
                      <p>Kota Bharu</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                "Kereta dalam keadaan baik dan menjadikan perjalanan kami lebih baik. 
                Sangat disyorkan untuk laman web sewa kereta ini!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Ahmad Reedzuan</h4>
                      <p>Pasir Mas</p>
                    </span>
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

export default Testimonials;
