import React from "react";
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";

const Destinations = () => {
  return (
    <section className="destinations">
      <h3>Register for our various Modules and learn with us</h3>
      <div className="grid">
        <div>
          <img src={image1} alt="destination-1" />
          <h3>Web Module</h3>
          <p>Become a proficient Web Developer!</p>
        </div>

        <div>
          <img src={image2} alt="destination-2" />
          <h3>Hardware Module</h3>
          <p>Take your Hardware skills to the next level!</p>
        </div>

        <div>
          <img src={image3} alt="destination-3" />
          <h3>Python Module</h3>
          <p>
            Strengthen your Machine Learning and Data Science foundations with
            Python!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
