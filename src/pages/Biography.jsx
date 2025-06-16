import React from 'react';
import './Biography.css';

const Biography = () => {
  return (
    <div>
      {/* Main Content */}
      <h1 className="header-title">About Me</h1>
      <div className="bio-paragraph">
        <p>I am currently pursuing my masters in Software Engineering at Boston University to gain new skills and knowledge in software development
          and explore new career opportunities in this field. Although I have a few years of experience in the industry working at tech companies,
          my role has been more on the business side, with limited exposure to development. I hope to move into more technical roles with my education,
          especially roles like sales engineer, solutions engineer, or solution architect. I'm passionate about directly engaging with customers and being
          consultative through solution-driven methods.</p>

        <p>I am based in Seattle, WA and have lived here for most of my life. I attended the University of Washington where I earned
          a bachelor’s in Business Administration. My roots are in South Korea, where I was born and many of my family members still live. My family
          and I immigrated to the United States when I was young to seek better opportunities. I currently live with my wife and our dog in the suburbs
          of the greater Seattle area. This year, we received the exciting news that we’re expecting a baby girl at the end of the year!</p>

        <p>Please check out the next section for the activities and hobbies I enjoy during my free time:</p>
      </div>

      <section className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golfer_swing.jpg/1200px-Golfer_swing.jpg"
          alt="golf"
          className="container-icon"
        />
        <p>Golf - During the COVID pandemic, one of the activities that I got into was golf. I continue to play on a regular basis especially during the 
summer when we have great weather and it was one of the best decisions to have gotten into the sport.</p>
      </section>

      <section className="container">
        <p>Workout & Exercise - Weather its going to the gym for weight training, going out for a run, or just taking walks at nearby trails, I
like to keep myself active and incorporate regular exercise to my life. I am on the eye out for what other type of exercises of sports 
I can get into in the future!</p>
        <img
          src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22980_16600577310868068.jpg"
          alt="workout"
          className="container-icon"
        />
      </section>

      <section className="container">
        <img
          src="https://edmmaniac.com/wp-content/uploads/2023/12/FemaleDJ-1600x1067.jpg"
          alt="music"
          className="container-icon"
        />
        <p>Music - music is something that truly brings one of the greatest joy in life that you can take wherever you go. Some of the music genres I
listen to are EDM, hip pop, rap, and acoustic. I have also enjoyed going to music festivals and seeing my favorite artists at shows.</p>
      </section>
    </div>
  );
};

export default Biography;