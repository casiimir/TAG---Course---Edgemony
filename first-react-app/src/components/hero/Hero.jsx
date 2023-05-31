import "./index.css";

const Hero = ({ textContent }) => {
  return (
    <div className="Hero">
      <h1>{textContent}</h1>
      <img src="https://picsum.photos/1000/1000" alt="hero-image" />
    </div>
  );
};

export default Hero;
