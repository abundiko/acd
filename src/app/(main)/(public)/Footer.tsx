import SubscribeNewsletter from "./SubscribeNewsletter";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer_waves">
        <img src="/ASSETS/Images/footer_waves.svg" alt="" />
        <img src="/ASSETS/Images/lowerfooterwaves.svg" alt="" />
      </div>
      <div className="footer_holder container">
        <div className="logo footer_logo">
          <a href="#" title="Accessibility Compliance Dashboard">
            <img src="/ASSETS/Images/logo01.png" alt="logo" width="90" />
            <img
              src="/ASSETS/Icons/union-footer.svg"
              alt="logo"
              className="footer-img"
            />

            <div className="ac-dashboard">
              <div className="access-footer-logo-txt">A</div>
              <div className="comply-footer-logo-txt">C</div>
              <div className="dashboard-footer-logo-txt">D</div>
            </div>

            <div className="acd-footer-full">
              <p>Accessibility</p>
              <p>Complaince</p>
              <p>Dashboard</p>
            </div>
          </a>
        </div>

        <div className="lowerfooter">
          <div className="resources">
            <h4>Resources</h4>

            <p>
              <a href="https://inclusivefriends.org/resources/publications/">
                Our Research
              </a>
            </p>
            <p>
              <a href="">Compliance Dashboard</a>
            </p>
            <p>
              <a href="">Disability Act, 2018</a>
            </p>
            <p>
              <a href="">Know Your Disability Rights</a>
            </p>
          </div>

          <div className="company">
            <h4>Company</h4>

            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Careers</a>
            </p>
            <p>
              <a href="#">FAQs</a>
            </p>
            <p>
              <a href="#">Teams</a>
            </p>
          </div>

          <div className="subscribe">
            <h4>Subscribe</h4>

            <p>
              Subscribe to stay tuned for our News letters and latest updates.
            </p>

            <SubscribeNewsletter />
          </div>

          <div className="contact_us">
            <h4>Contact Us</h4>

            <div className="footer_socials">
              <a href="#">
                <div>
                  <img src="/ASSETS/Icons/fb-icn.svg" alt="#" />
                </div>
              </a>
              <a href="https://twitter.com/inclusivefrnds">
                <div>
                  <img src="/ASSETS/Icons/x-icn.svg" alt="#" />
                </div>
              </a>
              <a href="#">
                <div>
                  <img src="/ASSETS/Icons/ig-icn.svg" alt="#" />
                </div>
              </a>
            </div>

            <div className="essentials">
              <p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_31_2047)">
                    <path
                      d="M21.1261 10.2783C21.1261 17.2783 12.1261 23.2783 12.1261 23.2783C12.1261 23.2783 3.1261 17.2783 3.1261 10.2783C3.1261 7.89137 4.07431 5.60219 5.76214 3.91436C7.44996 2.22653 9.73915 1.27832 12.1261 1.27832C14.513 1.27832 16.8022 2.22653 18.4901 3.91436C20.1779 5.60219 21.1261 7.89137 21.1261 10.2783Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.1261 13.2783C13.783 13.2783 15.1261 11.9352 15.1261 10.2783C15.1261 8.62147 13.783 7.27832 12.1261 7.27832C10.4692 7.27832 9.1261 8.62147 9.1261 10.2783C9.1261 11.9352 10.4692 13.2783 12.1261 13.2783Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_2047">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.126099 0.27832)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                1 Patricia Etteh Cl, Wuye, Abuja 900108, Federal Capital
                Territory
              </p>

              <p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.1261 4.27832H20.1261C21.2261 4.27832 22.1261 5.17832 22.1261 6.27832V18.2783C22.1261 19.3783 21.2261 20.2783 20.1261 20.2783H4.1261C3.0261 20.2783 2.1261 19.3783 2.1261 18.2783V6.27832C2.1261 5.17832 3.0261 4.27832 4.1261 4.27832Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.1261 6.27832L12.1261 13.2783L2.1261 6.27832"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                support@inclusivefriends.org
              </p>

              <p>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_31_2049)">
                    <path
                      d="M15.1762 5.27832C16.1529 5.46889 17.0505 5.94658 17.7542 6.65026C18.4579 7.35393 18.9356 8.25159 19.1262 9.22832L15.1762 5.27832ZM15.1762 1.27832C17.2054 1.50376 19.0977 2.4125 20.5424 3.85533C21.987 5.29816 22.8982 7.18933 23.1262 9.21832L15.1762 1.27832ZM22.1262 17.1983V20.1983C22.1273 20.4768 22.0702 20.7525 21.9587 21.0077C21.8471 21.2628 21.6835 21.4919 21.4782 21.6802C21.273 21.8685 21.0307 22.0118 20.7669 22.101C20.5031 22.1902 20.2235 22.2234 19.9462 22.1983C16.869 21.864 13.9132 20.8125 11.3162 19.1283C8.89998 17.593 6.85149 15.5445 5.31615 13.1283C3.62613 10.5195 2.5744 7.54931 2.24615 4.45832C2.22116 4.18179 2.25403 3.90308 2.34265 3.63994C2.43128 3.37681 2.57372 3.13501 2.76092 2.92994C2.94811 2.72487 3.17596 2.56103 3.42994 2.44884C3.68393 2.33665 3.95849 2.27858 4.23615 2.27832H7.23615C7.72146 2.27354 8.19195 2.4454 8.55992 2.76185C8.92789 3.07831 9.16823 3.51777 9.23615 3.99832C9.36278 4.95839 9.5976 5.90105 9.93615 6.80832C10.0707 7.16624 10.0998 7.55524 10.0201 7.9292C9.9403 8.30317 9.75502 8.64643 9.48615 8.91832L8.21615 10.1883C9.63971 12.6919 11.7126 14.7648 14.2162 16.1883L15.4862 14.9183C15.758 14.6495 16.1013 14.4642 16.4753 14.3844C16.8492 14.3047 17.2382 14.3338 17.5962 14.4683C18.5034 14.8069 19.4461 15.0417 20.4062 15.1683C20.8919 15.2369 21.3356 15.4815 21.6527 15.8558C21.9698 16.2301 22.1383 16.7079 22.1262 17.1983Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_2049">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.126099 0.27832)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                +234 816 064 6394
              </p>
            </div>
          </div>
        </div>

        <div className="footerextra">
          <div>
            <a href="#" title="privacy policy">
              Privacy Policy
            </a>
            <a href="#" title="Terms of Use">
              Terms of Use
            </a>
            <a href="#" title="Legal">
              Legal
            </a>
            <a href="#" title="Site Map">
              Site Map
            </a>
          </div>

          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}
