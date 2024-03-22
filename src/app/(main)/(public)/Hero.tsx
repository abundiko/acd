import VerifyAccessibility from "./VerifyAccessibility";

export default function Hero({ isClient = false }: { isClient?: boolean }) {
  return (
    <>
      <section className="hero">
        <div className="hero_content container">
          <div className="hero-lft-txt">
            <p>Welcome to the Inclusive Friends </p>

            <h1>
              <span>Accessibility Compliance and Evaluation</span> Dashboard{" "}
            </h1>

            <div className="hero_innercontent">
              <p>
                Get access to a comprehensive directory of our accessibility
                compliance evaluation across public, private and civil
                organisations in Nigeria
              </p>

              <div className="">{!isClient && <VerifyAccessibility />}</div>
            </div>
          </div>

          <div className="hero-right-txt max-md:mt-32 relative xl:-top-10 xl:-left-[6%]">
            <div className="innerwaves relative md:-top-7">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="inner_circle_play">
                <div>
                  <a href="#" title="acd dashboard intro video">
                    <img
                      src="/ASSETS/Images/playimg.png"
                      alt="video play img"
                    />
                  </a>
                </div>
              </div>

              <img src="/ASSETS/Images/man1.png" alt="man1" className="man1" />
              <img
                src="/ASSETS/Images/woman1.png"
                alt="woman1"
                className="woman1"
              />
              <img
                src="/ASSETS/Images/woman2.png"
                alt="woman2"
                className="woman2"
              />
              <img src="/ASSETS/Images/man2.png" alt="man2" className="man2" />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
