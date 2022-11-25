import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/red-color-blue-colorful-yarn-wool-764435-pxhere.com.jpg";

function Home() {
  return (
    <main className="pt-20">
      <img
        src={homeImg}
        alt="The weaving"
        className="absolute object-cover w-full h-full opacity-60 brightness-70"
      />
      <Link to={"/products"}>
        <section className="relative flex justify-center min-h-screen pt-[30vh] smbl:pt-[20vh] px-8 ">
          <h1 className="text-5xl text-[deeppink] font-bold sectionfont leading-none text-shadow lg:leading-snug smbl:text-4xl">
            {" "}
            Please explore the designer collections from the Products Menu
          </h1>
        </section>
      </Link>
    </main>
  );
}

export default Home;
//blueviolet bisque blanchedalmond chocolate darkmagenta darkorchid  deeppink Tomato LightCoral
