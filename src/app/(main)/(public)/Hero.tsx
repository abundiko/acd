import VerifyAccessibility from "./VerifyAccessibility";

export default function Hero({ isClient = false }: { isClient?: boolean }) {
  return (
    <>
      <section className="hero">
        <div className="hero_content container">
          <div className="hero-lft-txt">
            <p>Welcome to the Inclusive Friends </p>

            <h1>
              The <span>Accessibility Compliance and Evaluation</span> Dashboard{" "}
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

          <div className="hero-right-txt max-md:mt-32 relative xl:-top-10 xl:-left-[14%]">
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

      {/* <div className="verify_mobile">
        <div className="mobile_verifybg">
        <h4>Verify Accessibility
            <svg xmlns="http://www.w3.org/2000/svg" width="12" id="mobilecloser" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        </h4>
            <form action="#" method="post" id="verification_process">
                <input type="text" list="organiztion" id="organization_type"
                    placeholder="Type of Organization" required/>
                <datalist id="organiztion">
                    <option value="Government Agency"></option>
                    <option value="Public Service"></option>
                    <option value="Non-Governmental Organisation"></option>
                    <option value="Religious Organisation"></option>
                    <option value="Residential "></option>
                    <option value="Hotes & Hospitality "></option>
                    <option value="Clubs & Recreation"></option>
                    <option value="Academia"></option>

                </datalist>

                <input type="text" list="state" id="organization_location" placeholder="Location" required/>
                <datalist id="state">
                    <option value="Abia">Land of God</option>
                    <option value="Adamawa">Land of Beauty</option>
                    <option value="AkwaIbom">Land of Promise</option>
                    <option value="Anambra">Light of the Nation</option>
                    <option value="Bauchi">Pearl of Tourism</option>
                    <option value="Bayelsa">Glory of All Lands</option>
                    <option value="Benue">Food Basket of the Nation</option>
                    <option value="Borno">Home of Peace</option>
                    <option value="CrossRiver">The People&rsquo;s Paradise</option>
                    <option value="Delta">The Big Heart</option>
                    <option value="Ebonyi">Salt of the Nation</option>
                    <option value="Edo">Heartbeat of the Nation</option>
                    <option value="Ekiti">Land of Honour</option>
                    <option value="Enugu">Coal City State</option>
                    <option value="Gombe">Jewel in the Savannah</option>
                    <option value="Imo">Eastern Heartland</option>
                    <option value="Jigawa">The New World</option>
                    <option value="Kaduna">Centre of Learning</option>
                    <option value="Kano">Centre of Commerce</option>
                    <option value="Katsina">Home of Hospitality</option>
                    <option value="Kebbi">Land of Equity</option>
                    <option value="Kogi">Confluence State</option>
                    <option value="Kwara">State of Harmony</option>
                    <option value="Lagos">Centre of Excellence</option>
                    <option value="Nasarawa">Home of Solid Minerals</option>
                    <option value="Niger">The Power State</option>
                    <option value="Ogun">Gateway State</option>
                    <option value="Ondo">Sunshine State</option>
                    <option value="Osun">Land of Virtue</option>
                    <option value="Oyo">Pace Setter</option>
                    <option value="Plateau">Home of Peace and Tourism</option>
                    <option value="Rivers">Treasure Base of the Nation</option>
                    <option value="Sokoto">Seat of the Caliphate</option>
                    <option value="Taraba">Nature&rsquo;s Gift to the Nation</option>
                    <option value="Yobe">Pride of the Sahel</option>
                    <option value="Zamfara">Farming is Our Pride</option>
                </datalist>

                <input type="text" list="company_name" id="organization_name"
                    placeholder="Name of Organisation" required/>
                <datalist id="company_name">
                    <option value="Federal Ministry of Works"></option>
                    <option value="Federal Ministry of Health"></option>
                    <option value="Federal Ministry of Women Affairs"></option>
                    <option value="The Presidential Villa - Aso Rock"></option>
                    <option value="Federal Ministry of Power and Technology"></option>
                    <option value="Federal Ministry of Sports"></option>

                </datalist>

                <div>
                    <input type="submit" id="submit_btn" value="Verify"/>
                </div>
            </form>
    </div>
    </div> */}
    </>
  );
}
