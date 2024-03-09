export default function TheTeam() {
  return (
    <section className="accesibility container">
      <div className="accesibility_intro">
        <h4>OUR TEAM</h4>
        <h1>Meet our Accessibility Experts</h1>

        <p>
          Our team comprise certified experts in accessibility evaluation, we
          are committed to increasing awareness and promoting adherence to the
          Disability Act, 2018
        </p>
      </div>

      <div className="accesibility_experts">
        <div className="experts_reviews">
          <div className="expert-review_images">
            <img
              src="/ASSETS/Images/experts images/expert1.svg"
              alt="expert 01"
            />
          </div>

          <h4>Jocelyn Schleifer</h4>

          <p>Software Engineer</p>
          <p>There are many variations of passages of Lorem Ipsum available</p>

          <div className="expert_socials">
            <a title="Facebook" href="#">
              <div>
                <img src="/ASSETS/Icons/fb-icn.svg" alt="" />
              </div>
            </a>
            <a title="Instagram" href="#">
              <div>
                <img src="/ASSETS/Icons/ig-icn.svg" alt="" />
              </div>
            </a>
            <a title="Twitter(X)" href="#">
              <div>
                <img src="/ASSETS/Icons/x-icn.svg" alt="" />
              </div>
            </a>
          </div>
        </div>

        <div className="experts_reviews">
          <div className="expert-review_images">
            <img
              src="/ASSETS/Images/experts images/expert2.svg"
              alt="expert 01"
            />
          </div>

          <h4>Martin Donin</h4>

          <p>Software Engineer</p>
          <p>There are many variations of passages of Lorem Ipsum available</p>

          <div className="expert_socials">
            <a title="Facebook" href="#">
              <div>
                <img src="/ASSETS/Icons/fb-icn.svg" alt="" />
              </div>
            </a>
            <a title="Instagram" href="#">
              <div>
                <img src="/ASSETS/Icons/ig-icn.svg" alt="" />
              </div>
            </a>
            <a title="Twitter(X)" href="#">
              <div>
                <img src="/ASSETS/Icons/x-icn.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
