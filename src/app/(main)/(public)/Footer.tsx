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

            <form action="" method="post" id="footer_email">
              <input type="text" id="#" placeholder="Email address" required />
              <input type="submit" value="Submit" id="footer_email_submit" />
            </form>
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
                <img src="/ASSETS/Icons/location.svg" alt="" />
                1 Patricia Etteh Cl, Wuye, Abuja 900108, Federal Capital
                Territory
              </p>

              <p>
                <img src="/ASSETS/Icons/mail.svg" alt="" />
                support@inclusivefriends.org
              </p>

              <p>
                <img src="/ASSETS/Icons/phone.svg" alt="" />
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
