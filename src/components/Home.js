import React from "react";
import homeImg from "../assets/red-color-blue-colorful-yarn-wool-764435-pxhere.com.jpg";

function Home() {
  return (
    <main className="pt-20">
      <img
        src={homeImg}
        alt="The weaving"
        className="absolute object-cover w-full h-full opacity-60 brightness-70"
      />
      <section className="relative flex justify-center min-h-screen pt-24 lg:pt-64 px-8 ">
        <h1 className="text-5xl text-[deeppink] font-bold sectionfont leading-none text-shadow lg:leading-snug ">
          {" "}
          Please explore the designer collections from the Products Menu
        </h1>
      </section>
    </main>
  );
}

export default Home;
//blueviolet bisque blanchedalmond chocolate darkmagenta darkorchid  deeppink Tomato LightCoral
