import React from "react";

const Login = () => {
  return (
    <>
      <section className="Home login">
        <div className="home-overlay">
          <form className="form-control">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
            <input type="password" name="password" id="password" />
            <button type="submit">Log In</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
