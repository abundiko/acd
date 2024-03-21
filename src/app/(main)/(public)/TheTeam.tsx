"use client";

import { useIndexPageState } from "@/state/indexStore";

export default function TheTeam() {
  const team = useIndexPageState(s => s.team);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {team.map((item, index) =>
          <div key={item._id} className="experts_reviews">
            <div className="expert-review_images">
              <img
                src={item.img}
                alt={item.name}
                className="aspect-[4/3] object-cover"
              />
            </div>

            <h4>
              {item.name}
            </h4>

            <p>
              {item.role}
            </p>
            <p>
              {item.comment}
            </p>

            <div className="expert_socials">
              {item.facebook &&
                <a title="Facebook" href={item.facebook}>
                  <div>
                    <img src="/ASSETS/Icons/fb-icn.svg" alt="" />
                  </div>
                </a>}
              {item.instagram &&
                <a title="Instagram" href={item.instagram}>
                  <div>
                    <img src="/ASSETS/Icons/ig-icn.svg" alt="" />
                  </div>
                </a>}
              {item.twitter &&
                <a title="Twitter(X)" href={item.twitter}>
                  <div>
                    <img src="/ASSETS/Icons/x-icn.svg" alt="" />
                  </div>
                </a>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
