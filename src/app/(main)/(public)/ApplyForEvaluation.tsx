"use client";

import DatePicker from "@/components/DatePicker";

export default function ApplyForEvaluation() {
  return (
    <section className="evaluation_space container" id="apply-for-evaluation">
      <div className="evaluations">
        <h2>Apply for Evaluation</h2>

        <div className="evaluation_form">
          <h3>Organisation information</h3>

          <p>
            Fill in the data to help us identify your organisation and create a
            schedule for your Accessibility evaluation. It will take less than a
            minute to fill the form.
          </p>

          <form action="#" method="post">
            <h4>Contacts</h4>
            <p>These contacts are used to reach you or your representative.</p>

            <div className="form_input">
              <img src="/ASSETS/Icons/mail.svg" width="20" alt="" />
              <img src="/ASSETS/Icons/phone.svg" width="20" alt="" />
              <img src="/ASSETS/Icons/location.svg" width="20" alt="" />
              <input
                type="email"
                placeholder="yourcompanyemail@email.com"
                required
              />
              <input type="text" placeholder="+234 0000 0000 000" required />
              <input
                type="text"
                placeholder="15, Abubakar Str, Maitama, FCT"
                required
              />
            </div>
            <DatePicker />

            <input
              type="submit"
              value="Submit Application →"
              id="submit_form"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
