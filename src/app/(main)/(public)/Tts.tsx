import { useScreenReaderHotkeys } from "@/hooks/useScreenReaderHotkeys";
import { useEffect, useState } from "react";
import { SpeakerDisable } from "react-huge-icons/solid";

export default function Tts() {
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!enabled) window.speechSynthesis.cancel();
    const w = window as any;
    w.ALLOW_SPEECH = enabled;
  }, [enabled]);

  useEffect(() => {
    function registerTTS() {
      const msg = new SpeechSynthesisUtterance();
      const tags = document.querySelectorAll(
        "h1,h2,h3,h4,h5,h6,p,a,button,img,li,input,textarea"
      );
      function runSpeech(tag: any) {
        window.speechSynthesis.cancel();
        setTimeout(() => {
          if (tag.tagName.toLocaleLowerCase() == "img") {
            msg.text = tag.alt ?? "Image";
          } else if (
            ["button", "a"].includes(tag.tagName.toLocaleLowerCase())
          ) {
            msg.text = tag.title ? tag.title : tag.innerText ?? "button";
          } else if (
            ["input", "textarea"].includes(tag.tagName.toLocaleLowerCase())
          ) {
            msg.text = tag.value ? tag.value : tag.placeholder;
          } else msg.text = tag.textContent ?? "";

          tag.style.backgroundColor = "#ffff0044";
          window.speechSynthesis.speak(msg);

          let int = setInterval(() => {
            if (!window.speechSynthesis.speaking) {
              tag.style.removeProperty("background-color");
              clearInterval(int);
            }
          }, 100);
        }, 120);
      }

      tags.forEach((tag: any) => {
        if (
          !tag.getAttribute("tabindex") &&
          !["button", "a", "p"].includes(
            tag.parentElement?.tagName.toLowerCase()
          )
        ) {
          tag.setAttribute("tabindex", 0);
        }
        tag.addEventListener("click", () => {
          const w = window as any;
          if (w.ALLOW_SPEECH) runSpeech(tag);
        });
        tag.addEventListener("focus", () => {
          const w = window as any;
          if (w.ALLOW_SPEECH) runSpeech(tag);
        });
      });
    }

    setTimeout(() => {
      registerTTS();
      setReady(true);
    }, 10000);
  }, [enabled]);

  useEffect(() => {
    function init() {
      console.log("yes window", !!window.speechSynthesis);
  
      const msg = new SpeechSynthesisUtterance();
      msg.text = "Press Alt + S to start screen reader and Alt + X to stop it.";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    }
  
    function handleUserInteraction() {
      init();
      // Remove listener after first interaction
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    }
  
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
  
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);
  

  useScreenReaderHotkeys({
    onStart: () => {
      setEnabled(true);
    },
    onStop: () => {
      setEnabled(false);
    },
  });

  if (ready)
    return (
      <div className="relative">
        <div
          onClick={() => setEnabled((_) => !_)}
          className="rounded-3xl size-10 scale-[6] !bg-transparent absolute left-0 !shadow-none !-top-4"
        ></div>
        {enabled ? (
          <button
            title="disable screen reader"
            onClick={() => setEnabled(false)}
          >
            <SpeakerDisable className="size-10 text-white" />
          </button>
        ) : (
          <button onClick={() => setEnabled(true)} title="enable screen reader">
            <svg
              width="49"
              height="43"
              viewBox="0 0 49 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 29.1326V15.5339C29 7.93304 29 4.13259 26.7639 3.18681C24.5277 2.241 21.8957 4.92833 16.6323 10.303C13.9065 13.0863 12.3512 13.7027 8.47294 13.7027C5.08122 13.7027 3.38537 13.7027 2.16715 14.5338C-0.361646 16.2592 0.0205979 19.6315 0.0205979 22.3333C0.0205979 25.0352 -0.361646 28.4074 2.16715 30.1329C3.38537 30.964 5.08122 30.964 8.47294 30.964C12.3512 30.964 13.9065 31.5805 16.6323 34.3637C21.8957 39.7384 24.5277 42.4257 26.7639 41.4799C29 40.534 29 36.7335 29 29.1326Z"
                fill="#F0F0F0"
              />
              <path
                d="M36.25 15.0834C37.7614 17.0643 38.6667 19.5866 38.6667 22.3334C38.6667 25.0802 37.7614 27.6024 36.25 29.5834"
                fill="#F0F0F0"
              />
              <path
                d="M43.5 10.25C46.5228 13.5515 48.3333 17.7554 48.3333 22.3333C48.3333 26.9112 46.5228 31.1153 43.5 34.4167"
                fill="#F0F0F0"
              />
              <path
                d="M17 18V26"
                stroke="#107BEF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 20V24"
                stroke="#107BEF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 21V23"
                stroke="#107BEF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 20V24"
                stroke="#107BEF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 21V23"
                stroke="#107BEF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
}
