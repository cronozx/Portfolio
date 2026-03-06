import './AboutMe.css';

export const AboutMe = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutContent'>
        <p className='aboutText'>
          I am a Full Stack Software Engineer who focuses on minimalistic and sleek designs. I also study and currently work in the networking field.
        </p>
        <p className='aboutText'>
          Outside of developing I enjoy going to the gym and going out and building connections with others.
        </p>
      </div>
      <div className='aboutHighlights'>
        <div className='highlightItem'>
          <i className='bi bi-code-slash highlightIcon'></i>
          <span className='highlightText'>Clean Code Focused</span>
        </div>
        <div className='highlightItem'>
          <i className='bi bi-lightning-charge highlightIcon'></i>
          <span className='highlightText'>Quick Learner</span>
        </div>
        <div className='highlightItem'>
          <i className='bi bi-people highlightIcon'></i>
          <span className='highlightText'>Strong Communication</span>
        </div>
      </div>
    </div>
  );
};
