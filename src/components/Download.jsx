import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Muat turun aplikasi kami untuk mendapatkan manfaat sepenuhnya</h2>
            <p>
            Walaupun malu, nyatakan sepuluh wanita yang meminta. 
            Atau dengan dia pergi berfikir untuk acara muzik. 
            Tidak selesa dengan niat yang cacat pada yang diyakinkan. 
            Pendapatan yang dipimpin berbulan-bulan itu sendiri dan rumah anda.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
