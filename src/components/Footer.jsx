import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
              Kami menawarkan pelbagai kenderaan untuk semua keperluan memandu anda. 
              Kami mempunyai kereta yang sempurna untuk memenuhi keperluan anda.
              </li>
              <li>
                <a href="tel:+60123456789">
                  <IconPhoneCall /> &nbsp; (+6012) -345-6789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://fikriaminuddin.github.io/"
                >
                  Direka oleh FikriAminuddin
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Syarikat</li>
              <li>
                <a href="#home">Pasir Mas</a>
              </li>
              <li>
                <a href="#home">Kerjaya</a>
              </li>
              <li>
                <a href="#home">Mudah Alih</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Cara Kami Bekerja</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Waktu Bekerja</li>
              <li>Mon - Fri: 9:00AM - 6:00PM</li>
              <li>Sat: Tutup</li>
              <li>Sun: Tutup</li>
            </ul>

            <ul className="footer-content__2">
              <li>Langganan</li>
              <li>
                <p>Langgan alamat e-mel anda untuk berita dan kemas kini terkini.</p>
              </li>
              <li>
                <input type="email" placeholder="Masukkan Alamat E-mel"></input>
              </li>
              <li>
                <button className="submit-email">Hantar</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
