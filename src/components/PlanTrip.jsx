import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Rancang perjalanan anda sekarang</h3>
              <h2>Sewa kereta dengan cepat & mudah</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Pilih kereta</h3>
                <p>
                Kami menawarkan pelbagai kenderaan untuk semua keperluan memandu anda.
                Kami mempunyai kereta yang sempurna untuk memenuhi keperluan anda
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Hubungi Operator</h3>
                <p>
                Operator yang berpengetahuan dan mesra kami sentiasa bersedia untuk membantu dengan sebarang soalan atau kebimbangan
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Jom Pandu</h3>
                <p>
                Sama ada anda sedang meluncur di jalan raya terbuka, kami mempunyai anda tertutup dengan pelbagai kereta kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
