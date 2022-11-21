import React from "react";
import homeImg from "../assets/red-color-blue-colorful-yarn-wool-764435-pxhere.com.jpg";

function Home() {
  return (
    <main>
      <img
        src={homeImg}
        alt="The weaving"
        className="absolute object-cover w-full h-full opacity-60 brightness-70"
      />
      <section>
        <h1> Please explore the design collections</h1>
      </section>
    </main>
  );
}

export default Home;
