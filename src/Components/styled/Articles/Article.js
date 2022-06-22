import React from "react";
import { StyledArticleSection } from "./Article.styled";
import IllustrationGrowTogether from "../../svgs/IllustrationGrowTogether";
import { StyledButton } from "../Button/Button.styled";
import { ReactVideo } from "reactjs-media";


function Article() {
  return (
    <StyledArticleSection>
      <article>
        <IllustrationGrowTogether />
        <div>
          <h3>Grow Together</h3>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </article>

      <div className="video" style={{ textAlign: 'center' }}>
        <h2>Show visitors what they're signing up for</h2>
        <p>
          Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).
        </p>
        <ReactVideo
          src="https://www.example.com/url_to_video.mp4"
        />
      </div>
      <section className="sect">
        <div className="card">
          <img src="./images/sec.jpg" alt="" />
          <h5>Feature 1</h5>
          <p>Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div> 
        <div className="card">
          <img src="./images/sec.jpg" alt="" />
          <h5>Feature 2</h5>
          <p>Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div>
        <div className="card">
          <img src="./images/sec.jpg" alt="" />
          <h5>Feature 3</h5>
          <p>Talk about some of the details of your offer with a focus on the value people get back.</p>
        </div>
      </section>

      <article>
        <img className="secImg" src="./images/sec.jpg" alt="" />
        <div>
          <h3>Some more information about your business</h3>
          <p>
          Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.
          </p>
        </div>
      </article>

      <div className="cta">
        <h2>Ready To Build Your Community?</h2>
        <StyledButton>Get Started For Free</StyledButton>
      </div>
    </StyledArticleSection>
  );
}

export default Article;
