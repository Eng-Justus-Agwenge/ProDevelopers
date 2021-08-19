import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

const Home = () => {
  return (
    <section className="Home">
      <div className="home-overlay">
        <div className="prof">
          <Link className="profile" to="/profile">
            <MdAccountCircle size="3rem" />
            My Profile
          </Link>
        </div>

        <h1>KuCsA </h1>
        <h1>Where Programmers</h1>
        <h1>Are Nurtured</h1>
      </div>
    </section>
  );
};

export default Home;
