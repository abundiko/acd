"use client";

import { useIndexPageState } from "@/state/indexStore";

export default function Sponsors() {
  const logos = useIndexPageState(s => s.logos);
  return (
    <section className="sponsors container">
      <div className="sponsors_left_content">
        <div className="federal_images">
          <div>
            <img src="/ASSETS/Images/coat1.svg" alt="" />
          </div>
          <div>
            <img src="/ASSETS/Images/coat2.svg" alt="" />
          </div>
          <div>
            <img src="/ASSETS/Images/coat1.svg" alt="" />
          </div>
        </div>

        <div className="verified_users">
          <p>
            <span>500+</span>Organisations have been verified
          </p>
        </div>
      </div>

      <div className="sponsor_scroller">
        <div className="container">
          <div className="sponsor_images">
            {logos.map(e =>
              <img
                key={e.img}
                src={e.img}
                alt="featured Logo"
                className="h-20 object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
