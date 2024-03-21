export default function Reviews() {
  return (
    <section className="reviews container">
      <div className="expert_reviews">
        <div className="expert_comments">
          <p>Expert Comments on Disability Act, 2019</p>

          <div className="expert_cmmnts_image">
            <img src="/ASSETS/Images/commentors.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="pro_reviewers">
        <div className="uppercard">
          <img src="/ASSETS/Icons/quotes.svg" alt="" />
          <div className="arrow_navigation">
            <div>
              <img src="/ASSETS/Icons/left arrow.svg" alt="" />
            </div>
            <div>
              <img src="/ASSETS/Icons/right arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="uppercard_text">
          <p>
            This is a good development in the direction of the vulnerable
            segment of the society. I have been with spinal cord injury for
            almost 45 years now. We thanked GOD that we are having laws that
            protect us now. I studied and worked under constant oppression from
            colleagues.
          </p>
        </div>

        <div className="lowercard">
          <div className="lowercard_img_holder">
            <img src="/ASSETS/Images/Commenters/commenter1.svg" alt="" />
          </div>

          <div className="name_info">
            <h3>Dr. Dahiru Faralu Ibrahim</h3>
            <p>Disability Professional, Lagos, NG</p>
          </div>
        </div>
      </div>
    </section>
  );
}
