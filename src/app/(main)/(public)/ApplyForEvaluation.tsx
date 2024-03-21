"use client";

import EvaluationForm from "./EvaluationForm";

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

          <EvaluationForm />
        </div>
      </div>
    </section>
  );
}
