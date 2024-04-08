'use client'

import { useState } from "react";
import VerifyAccessibility from "./VerifyAccessibility";
import Tts from "./Tts";

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
                compliance evaluation across public, private and civil society
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
                  <Tts />
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
