'use client'

import { useState } from "react";
import VerifyAccessibility from "./VerifyAccessibility";

export default function Hero({ isClient = false }: { isClient?: boolean }) {
  const [reading, setReading] = useState(false);
  function startReading(e:any) {
    return;
    e.preventDefault();
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      if(reading) {
        window.speechSynthesis.cancel();
        setReading(false);
        return;
      }
      // Create a new speech synthesis utterance
      var utterance = new SpeechSynthesisUtterance();

    // Set the text to be read (you can replace this with any text you want to read)
    utterance.text = document.body.textContent!;

    // Speak the text
    window.speechSynthesis.speak(utterance);
    setReading(true);
  } else {
    // Speech synthesis not supported
    alert("Speech not supported in your browser.");
  }
}


  return (
    <>
      <section className="hero">
        <div className="hero_content container">
          <div className="hero-lft-txt">
            <p>Welcome to the Inclusive Friends </p>

            <h1>
              <span>Accessibility <br /> Compliance and <br />   Evaluation</span> Dashboard{" "}
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
                  <a href="#" onClick={startReading} title="acd dashboard intro video">
                    
<svg width="49" height="43" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 29.1326V15.5339C29 7.93304 29 4.13259 26.7639 3.18681C24.5277 2.241 21.8957 4.92833 16.6323 10.303C13.9065 13.0863 12.3512 13.7027 8.47294 13.7027C5.08122 13.7027 3.38537 13.7027 2.16715 14.5338C-0.361646 16.2592 0.0205979 19.6315 0.0205979 22.3333C0.0205979 25.0352 -0.361646 28.4074 2.16715 30.1329C3.38537 30.964 5.08122 30.964 8.47294 30.964C12.3512 30.964 13.9065 31.5805 16.6323 34.3637C21.8957 39.7384 24.5277 42.4257 26.7639 41.4799C29 40.534 29 36.7335 29 29.1326Z" fill="#F0F0F0"/>
<path d="M36.25 15.0834C37.7614 17.0643 38.6667 19.5866 38.6667 22.3334C38.6667 25.0802 37.7614 27.6024 36.25 29.5834" fill="#F0F0F0"/>
<path d="M43.5 10.25C46.5228 13.5515 48.3333 17.7554 48.3333 22.3333C48.3333 26.9112 46.5228 31.1153 43.5 34.4167" fill="#F0F0F0"/>
<path d="M17 18V26" stroke="#107BEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20V24" stroke="#107BEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21V23" stroke="#107BEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20V24" stroke="#107BEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 21V23" stroke="#107BEF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
