import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Soalan Lazim</h2>
              <p>
              Soalan Lazim Mengenai Proses Tempahan Kereta Sewa di Laman Web Kami: 
              Jawapan kepada Kebimbangan dan Pertanyaan Umum.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Apa yang istimewa tentang membandingkan tawaran sewa kereta?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Membandingkan tawaran sewa kereta adalah penting kerana ia membantu 
                  anda mencari tawaran terbaik yang sesuai dengan bajet dan keperluan anda, 
                  memastikan anda mendapat nilai yang paling baik untuk wang anda. 
                  Dengan membandingkan pelbagai pilihan, anda boleh mencari tawaran yang 
                  menawarkan harga lebih rendah, perkhidmatan tambahan, atau model kereta yang lebih baik. 
                  Anda boleh mencari tawaran sewa kereta dengan membuat kajian dalam talian dan 
                  membandingkan harga dari pelbagai syarikat penyewaan.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Bagaimana saya boleh mencari tawaran sewa kereta?</p>
                  <IconChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Anda boleh mencari tawaran sewa kereta dengan membuat kajian dalam talian 
                  dan membandingkan harga dari pelbagai syarikat penyewaan. 
                  {/* Laman web seperti Expedia, Kayak, dan Travelocity membolehkan anda 
                  membandingkan harga dan melihat pilihan sewaan yang tersedia.  */}
                  Adalah disyorkan untuk mendaftar untuk surat berita e-mel dan 
                  mengikuti syarikat sewa kereta di media sosial untuk dimaklumkan 
                  tentang sebarang tawaran istimewa atau promosi.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Bagaimana saya boleh mencari harga sewa kereta yang rendah?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Tempah lebih awal: Menempah kereta sewa anda lebih awal sering kali 
                  boleh menghasilkan harga yang lebih rendah. Bandingkan harga dari 
                  pelbagai syarikat: Gunakan laman web seperti Kayak, Expedia, atau 
                  Travelocity untuk membandingkan harga dari pelbagai syarikat penyewaan kereta. 
                  Cari kod diskaun dan kupon: Cari kod diskaun dan kupon yang boleh anda gunakan 
                  untuk mengurangkan harga sewaan. Menyewa dari lokasi luar lapangan terbang 
                  kadang-kadang boleh menghasilkan harga yang lebih rendah.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
